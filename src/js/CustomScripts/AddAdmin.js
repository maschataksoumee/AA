
$(document).ready(function()
{
	$("#btnAddAdmin").addClass("active");
})


function btnAddNewAdmin()
{
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var mailId = document.getElementById("txtMail").value;
	var mobile = document.getElementById("txtMobile").value;
	var password = document.getElementById("txtPassword").value;

	$.ajax(
	{
		url: urlConstant + "Admin/AddNewAdmin",
		type: "Post",
		data:
		{
			FirstName: firstName,
			LastName: lastName,
			MailId: mailId,
			Mobile: mobile,
			Password: password
		},
		success: function(data)
		{
			console.log(data);
			if(data.IsOk == true)
			{
				swal
				({
					title: "Yayy!!",
					text: data.Message,
					type: "success",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "OK",
					cancelButtonText: "Cancel",
				});
				window.location="aa.html";
			}
			else
			{
				swal
				({
					title: "OOPS!!",
					text: data.Message,
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