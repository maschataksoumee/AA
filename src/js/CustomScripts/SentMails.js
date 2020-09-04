$( document ).ready(function()
{
	$("#btnSentMails").addClass("active");

	$.ajax(
	{
		url: urlConstant + "Admin/FetchAllMails",
		type: "Post",
		data:
		{
			
		},
		success: function(data)
		{
			var MailsTable = "";
			for(var MailCount = 0; MailCount< data.ResponseObject.length; MailCount++)
			{

				var mailResponse = "";
				if(data.ResponseObject[MailCount].MailResponse == 1)
				{
					mailResponse = "Mail sent";
				}
				else if(data.ResponseObject[MailCount].MailResponse == -1)
				{
					mailResponse = "Not recorded";
				}
				else if(data.ResponseObject[MailCount].MailResponse == 0)
				{
					mailResponse = "Mail not sent";
				}
				MailsTable += "<tr>";
				MailsTable += "<td>" + data.ResponseObject[MailCount].ProjectId + "</td>";
				MailsTable += "<td>" + data.ResponseObject[MailCount].ToMailId + "</td>";
				MailsTable += "<td>" + data.ResponseObject[MailCount].Subject + "</td>";
				MailsTable += "<td>" + data.ResponseObject[MailCount].SentTime.split("T")+ "</td>";
				MailsTable += "<td>" + mailResponse + "</td>";
				MailsTable += "</tr>";
			}
			$("#tblBodyMailDetails").html(MailsTable);
		}
	})
});