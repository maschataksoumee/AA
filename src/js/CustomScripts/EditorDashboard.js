var localEditorUserId = EditorUserId;

$(document).ready(function()
{
	$("#loading-bar-spinner").show();
	var editor = localEditorUserId;
	$.ajax(
	{
		url: urlConstant + "Editor/FetchAllProjects",
		type: "Post",
		data:
		{
			EditorId: editor,
		},
		success: function(data)
		{
			console.log(data);
			if(data.IsOk == true)
			{
				var EditorProjectsList = "";
				var EditorProjectCount = 0;
				for(EditorProjectCount = 0; EditorProjectCount < data.ResponseObject.length; EditorProjectCount++)
				{
					if(data.ResponseObject[EditorProjectCount].FilePath)
					{
						var _disabled = "";
						var _icon = "fa fa-download";
						var _title = "Download - "+data.ResponseObject[EditorProjectCount].ProjectId;
						var _btn_class= "btn btn-sm btn-warning";

						var _disabled_done = "";
						var _icon_done = "fa fa-check-square";
						var _title_done = "Complete - "+data.ResponseObject[EditorProjectCount].ProjectId;
						var _btn_class_done = "btn btn-sm btn-success";
					}
					else
					{
						var _disabled = "disabled";
						var _icon = "fa fa-times";
						var _title = "Download File Not Available";
						var _btn_class= "btn btn-sm btn-danger";

						var _disabled_done = "disabled";
						var _icon_done = "fa fa-times";
						var _title_done = "File Not Available";
						var _btn_class_done = "btn btn-sm btn-danger";
					}
					EditorProjectsList += "<tr>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].ProjectId + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].ClientName + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].ServiceName + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].LevelOfEdit + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].Pages + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].Comments + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].AssignedDate + "</td>";
					EditorProjectsList += "<td>" + data.ResponseObject[EditorProjectCount].FileStatus + "</td>";
					EditorProjectsList += "<td>"+
												"<button type='button' class='"+_btn_class+"' "+_disabled+" title='"+_title+"' onclick=_file_download_with_zip('"+data.ResponseObject[EditorProjectCount].FilePath+"','"+data.ResponseObject[EditorProjectCount].ProjectId+"')>"+
													"<i class='"+_icon+"'></i>"+
												"</button>"+
											"</td>";
					EditorProjectsList +="<td>"+
												"<form id='frm_edit_upload_"+data.ResponseObject[EditorProjectCount].ProjectId+"' class='frm_editor_submit'>"+
													"<input type='File' class='form-control-file' id='EditedFile' name='EditedFile'>"+
													"<input type='hidden' name='FilePath' value='"+data.ResponseObject[EditorProjectCount].FilePath+"'>"+
													"<input type='hidden' name='ProjectId' value='"+data.ResponseObject[EditorProjectCount].ProjectId+"'>"+
													"<button class='"+_btn_class_done+"' "+_disabled_done+" title='"+_title_done+"'>"+
														"<i class='"+_icon_done+"'></i>"+
													"</button>"+
												"</form>"+
											"</td>";
					EditorProjectsList += "<td><button class='btn btn-primary' onclick='Queries(" + data.ResponseObject[EditorProjectCount].ProjectId + ")'>Queries</button></td>";
				}
				$("#tblEditorAssigned").html(EditorProjectsList);
				$("#loading-bar-spinner").hide();
				$(".frm_editor_submit").submit(function(event){
					event.preventDefault();
					var form_data = new FormData(this);
					$.ajax
					({
						type: "POST",
						url: "php_action/UploadEditedFiles.php",
						dataType: "json",
						data: form_data,
						contentType:false,          // The content type used when sending data to the server.
						cache:false,                // To unable request pages to be cached
						processData:false,          // To send DOMDocument or non processed data file it is set to false
						success: function (response) 
						{
							UpdatedEditedData(response);
							// console.log(response);
						},
						error: function (xhr, ajaxOptions, thrownError) 
						{
							// console.log(thrownError);
						}
					});
				});
			}
		}
	});
});
function _file_download_with_zip(file_path,ProjectCode)
{
	var file_path = "file_path="+ encodeURIComponent(file_path);
	var ProjectCode = "ProjectCode="+ encodeURIComponent(ProjectCode);
	data_all = file_path + "&" + ProjectCode;
	$.ajax({
		type: "POST",
		url: "create_zip_download.php",
		dataType: "json",
		data: data_all,
		success: function (response) {
			console.log(response);
			if(response.IsOk == true)
			{
				location.href = response.FilePath;
			}
			else
			{
				swal("Oppss..",response.ErrorMsg,"warning");
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			// console.log(thrownError);
			$("#loading-bar-spinner").hide();
		}
	});
}

function UpdatedEditedData(uploadedFileDetails)
{
	var EditorId = localEditorUserId;
	var ProjectCode = uploadedFileDetails.ProjectId;
	var EditedFileName = uploadedFileDetails.ResponseObjectMainFile;

	var InsertData = "EditedFileName="+EditedFileName+"&ProjectId="+ProjectCode+"&EditorId="+EditorId;
	alert(InsertData);

	$.ajax(
	{
		type: "POST",
		url: urlConstant + "Editor/UpdateEditedProject",
		dataType: "json",
		data: InsertData  ,
		success: function (data) 
		{
			console.log(data);
			if(data.IsOk == true)
			{
				swal("Done!!",data.Message,"success");
			}
			else
			{
				swal("Sorry",data.Message,"error");
			}
		}
	});
}

function Queries(ProjectId)
{
	// alert(ProjectId);
	var data_all = "ProjectCode="+ProjectId;

	$.ajax(
	{
		type: "POST",
		url: urlConstant + "Chats/FetchUserQuery",
		dataType: "json",
		data: data_all  ,
		success: function (data) 
		{
			console.log(data);
			if(data.IsOk == true)
			{
				window.location.href="EditorQueries.php?ProjectId="+ProjectId;
			}
			else
			{
				alert(data.Message);
			}
		}
	});
}