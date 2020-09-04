$( document ).ready(function()
{
	$("#btnDashboard").addClass("active");
	// var userId = localStorage.getItem("UserId");

	$("#loading-bar-spinner").show();
	// +This is required to fetch the list of projects for admin login
	$.ajax(
	{
		url: urlConstant + "Admin/FetchAllProjects",
		type: "Post",
		data:
		{
			FilteringValue: 0
		},
		success: function(data)
		{
			console.log(data);
			var AdminProjectTable = "";
			for(var ProjectCount = 0; ProjectCount < data.length; ProjectCount++)
			{
				AdminProjectTable += "<tr>";
				AdminProjectTable += "<td>" + data[ProjectCount].ProjectCode + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].Email + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].SubmissionDate.split("T")+ "</td>";
				// AdminProjectTable += "<td>" + data[ProjectCount].DeliveryDate.split("T") + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].PaymentStatus + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].EditedStatus + "</td>";
				AdminProjectTable += "<td><div class='btn-group btn-group-sm'>"+
										"<button type='button' class='btn btn-primary' onClick='SetProjectDetailsCookies(" + data[ProjectCount].ProjectCode + ")'>Edit</button>&nbsp;&nbsp;"+
										"<a href='generate-invoice/?ProjectID="+data[ProjectCount].ProjectCode+"' target='_BLANK'><button type='button' class='btn btn-success'>Generate Invoice</button></a>&nbsp;&nbsp;" + 
										"<button type='button' class='btn btn-warning' onClick=sendInvoiceMail('"+data[ProjectCount].ProjectCode+"','"+ data[ProjectCount].FirstName +"','"+data[ProjectCount].Email+"')>Send Mail</button>&nbsp;&nbsp;"+
										"<button type='button' class='btn btn-info' onClick=sendFileMail('"+data[ProjectCount].ProjectCode+"','"+ data[ProjectCount].FirstName +"','"+data[ProjectCount].Email+"')>Send File</button>"+
									"</div> </td>";
				AdminProjectTable += "</tr>";
			}
			$("#tblBodyProjectDetails").html(AdminProjectTable);
			$("#loading-bar-spinner").hide();
		}
	});
	// -This is required to fetch the list of projects for admin login
});


// +For now we are storing the ProjectCode in localstorage but todo - Cookies
function SetProjectDetailsCookies(ProjectCode)
{
	// alert(ProjectCode);
	document.cookie = "projectCode=" + ProjectCode;
	window.location.href = "ProjectDetails.php?ProjectCode="+ProjectCode;
	localStorage.setItem("ProjectCode", ProjectCode); 
}
// -For now we are storing the ProjectCode in localstorage but todo - Cookies

function btnLogoutClick()
{
	window.localStorage.clear();
}

function ProjectsFiltering(filteringValue)
{
	$.ajax(
	{
		url: urlConstant + "Admin/FetchAllProjects",
		type: "Post",
		data:
		{
			FilteringValue: filteringValue
		},
		success: function(data)
		{
			console.log(data);
			var AdminProjectTable = "";
			for(var ProjectCount = 0; ProjectCount < data.length; ProjectCount++)
			{
				AdminProjectTable += "<tr>";
				AdminProjectTable += "<td>" + data[ProjectCount].ProjectCode + "</td>";
				//AdminProjectTable += "<td>" + data[ProjectCount].ProjectName + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].Email + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].SubmissionDate + "</td>";
				//AdminProjectTable += "<td>" + data[ProjectCount].TurnAoundTime + "</td>";
				// AdminProjectTable += "<td>" + data[ProjectCount].DeliveryDate + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].PaymentStatus + "</td>";
				AdminProjectTable += "<td>" + data[ProjectCount].EditedStatus + "</td>";
				AdminProjectTable += "<td><div class='btn-group btn-group-sm'>"+
										"<button type='button' class='btn btn-primary' onClick='SetProjectDetailsCookies("+data[ProjectCount].ProjectCode+")'>Edit</button>&nbsp;&nbsp;"+
										"<a href='generate-invoice/?ProjectID="+data[ProjectCount].ProjectCode+"' target='_BLANK'><button type='button' class='btn btn-success'>Generate Invoice</button></a>&nbsp;&nbsp;" + 
										"<button type='button' class='btn btn-warning' onClick=sendInvoiceMail('"+data[ProjectCount].ProjectCode+"','"+ data[ProjectCount].FirstName +"','"+data[ProjectCount].Email+"')>Send Mail</button>"+
										"<button type='button' class='btn btn-info' onClick=sendFileMail('"+data[ProjectCount].ProjectCode+"','"+ data[ProjectCount].FirstName +"','"+data[ProjectCount].Email+"')>Send File</button>"+
									"</div> </td>";
				//AdminProjectTable += "<td>" + "<a class='btn btn-primary' onClick='SetProjectDetailsCookies(" + data[ProjectCount].ProjectCode + ")'>Edit</a>"+ "</td>";
				AdminProjectTable += "</tr>";
			}
			$("#tblBodyProjectDetails").html(AdminProjectTable);

		}
	});
}

function sendInvoiceMail(projectCode, FirstName, Email)
{
	swal("Good Job...","Mail has been sent successfully","success");
	$.ajax(
	{
		url: urlConstant + "Admin/FetchLinkParameters",
		type: "Post",
		data:
		{
			ProjectCode: projectCode
		},
		success: function(data)
		{
			if(data.IsOk == true)
			{
				console.log(data.ResponseObject);
				var mailBody = encodeURIComponent(data.ResponseObject.MailBody);
				var projectId = encodeURIComponent(data.ResponseObject.ProjectId);
				var name = encodeURIComponent(data.ResponseObject.Name);
				var mailId = encodeURIComponent(data.ResponseObject.Mail);
				var subject = encodeURIComponent(data.ResponseObject.Subject);
				_mail(mailBody,projectId,name,mailId,subject);
			}
			else
			{
				alert("Unable to generate the invoice link. Please contact the software developer.")
			}
		}
	});
}
function _mail(mailBody,projectId,name,mailId,subject)
{
	var mailBody = "mailBody="+mailBody;
	var projectId = "projectId="+projectId;
	var name = "name="+name;
	var mailId = "mailId="+mailId;
	var subject = "subject="+subject;
	var data_all = mailBody + "&" + projectId + "&" + name + "&" + mailId + "&" + subject;
	// alert(data_all);
	$.ajax({
		type: "POST",
		url: "php_action/MailFire.php",
		dataType: "text",
		data: data_all,
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(ajaxOptions);
		}
	});
}

function sendFileMail(projectCode, firstName, Email)
{
	//Write the mail function here
	var data_all = "ProjectCode="+projectCode+"&FirstName="+firstName+"&MailId="+Email;
	alert(data_all);

	$.ajax(
	{
		url: urlConstant + "Admin/SendFinalMailToClient",
		type: "POST",
		dataType: "json",
		data: data_all,
		success: function(response)
		{
			console.log(response);
			if(response.IsOk == true)
			{
				swal
				({
					title: "Mail Sent",
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
					title: "Oops!!",
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