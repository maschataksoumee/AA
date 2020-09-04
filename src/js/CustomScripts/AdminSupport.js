var localUserId = userId;
var queryId = "";

$("document").ready(function()
{
	$("#btnSupport").addClass("active");
	// $("#btnDashboard").removeClass("active");
	$.ajax(
	{
		url: urlConstant + "Admin/FetchAllQueries",
		type: "Post",
		data:
		{
			
		},
		success: function(response)
		{
			// console.log(response);
			var editorQuery = "";

			for(var queryCount = 0; queryCount < response.ResponseObject.length; queryCount++)
			{
				if(response.ResponseObject[queryCount].ReplierId == 0)
				{
					editorQuery += "<tr class=''>";
					editorQuery += "<td class='border-danger' id='tdQuery_"+response.ResponseObject[queryCount].QueryId+"'"+
					"onClick='showQuery("+JSON.stringify(response.ResponseObject[queryCount])+")'>"+
									(response.ResponseObject[queryCount].QueryMessage).substring(0, 30)+"..."+
									"<br><span class='text-secondary' style='right:0;'>"+response.ResponseObject[queryCount].QueryTime+"</span></td>";
					editorQuery += "</tr>";
				}
				else
				{
					editorQuery += "<tr class=''>";
					editorQuery += "<td class='border-success'id='tdQuery_"+response.ResponseObject[queryCount].QueryId+"'"+
					"onClick='showQuery("+JSON.stringify(response.ResponseObject[queryCount])+")'>"+
									(response.ResponseObject[queryCount].QueryMessage).substring(0, 30)+"..."+
									"<br><span class='text-secondary' style='right:0;'>"+response.ResponseObject[queryCount].QueryTime+"</span></td>";
					editorQuery += "</tr>";
				}
				
			}
			$("#tbodyEditorQueries").html(editorQuery);
		}
	});
});

function showQuery(Object)
{
	console.log(Object);
	queryId = Object.QueryId;
	$("#spnquery").html("<strong>Query: </strong>"+Object.QueryMessage);
	$("#spnSentBy").html("<strong>Sent By: </strong>" + Object.SenderFirstName + " " + Object.SenderLastName);
	$("#spnSentTime").html("<strong>Sent On: </strong>"+Object.QueryTime);
	if(Object.ReplierId > 0)
	{
		$("#spnReply").html("<strong>Reply: </strong>"+Object.ReplyMessage);
		$("#spnreplyTime").html("<strong>Query: </strong>"+Object.ReplyTime);
	}
	else
	{
		$("#spnReply").html("<strong class='text-danger'>Not replied yet</strong>");
	}
}

function btnReply()
{
	
	var reply = $("#txtReplySupport").val();
	var replierId = localUserId;

	$.ajax(
	{
		url: urlConstant + "Admin/UpdateQueries",
		type: "Post",
		data:
		{
			ReplyMessage: reply,
			ReplierId: replierId,
			QueryId: queryId,
		},
		success: function(response)
		{
			console.log(response);
			if(response.IsOk == true)
			{
				swal
				({
					title: "Reply updated",
					text:response.Message,
					type: "success",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "OK",
					cancelButtonText: "Cancel",
				});
			}
			else
			{
				swal
				({
					title: "Unable to Reply",
					text:response.Message,
					type: "error",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "OK",
					cancelButtonText: "Cancel",
				});
			}
		}
	});
}