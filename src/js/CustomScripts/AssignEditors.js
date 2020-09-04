var localProjectCode = ProjectCode;
// alert(localProjectCode);

$(document).ready(function()
{
	$.ajax(
	{
		url: urlConstant + "Admin/FetchAllEditors",
		type: "Post",
		data:
		{
			
		},
		success: function(data)
		{
			console.log(data);
			var EditorList = "";

			if(data.IsOk == true)
			{
				var EditorCount = "";
				EditorList += "<option value=''>--Select the Editor--</option>"

				for(var EditorCount = 0; EditorCount < data.ResponseObject.length; EditorCount++)
				{
					EditorList += "<option value='" + data.ResponseObject[EditorCount].EditorId + "'>" + data.ResponseObject[EditorCount].EditorName + "</option>";
				}
				$("#ddlEditors").html(EditorList);
			}
		}
	});

	$("#frmAssignEditors").submit(function(event){
		event.preventDefault();
		var isValid = true;

		$(".validate").each(function()
		{
			if($(this).val() == "")
			{
				$(this).addClass("is-invalid");
				isValid = false;
			}
			else
			{
				$(this).removeClass("is-invalid");
			}
		});
		if(isValid == true)
		{
			var editorAssigned = $("#ddlEditors").val();
			var pageCount = $("#txtPageCount").val();
			var comment = encodeURIComponent($.trim($("#txtComment").val()));

			data_all = "AssignedEditor=" + editorAssigned + "&Pages=" + pageCount + "&Comments=" + comment + "&ProjectId=" + localProjectCode;
			// console.log(data_all);
			$.ajax(
			{
				url: urlConstant + "Admin/EditorAssignment",
				type: "POST",
				dataType: "json",
				data: data_all,
				success: function(data)
				{
					console.log(data);
					if(data.IsOk == true)
					{
						// swal("Done!!",data.Message,"success");
						swal
						({
							title: data.Message,
							text: data.Message,
							type: "success",
							showCancelButton: true,
							confirmButtonClass: "btn-danger",
							confirmButtonText: "OK",
						});
						location.href="LoginAdmin.php";
					}
					else
					{
						// swal("Error!!",data.Message,"error");
						swal
						({
							title: data.Message,
							text: data.Message,
							type: "error",
							showCancelButton: true,
							confirmButtonClass: "btn-danger",
							confirmButtonText: "OK",
						});
					}
				}
			});
		}
	});
});