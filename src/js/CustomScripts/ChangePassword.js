var localUserMail = UserIDClient;
$(document).ready(function()
{
	// alert(localUserMail);
})

function ChangePassword()
{
	var oldPassword = document.getElementById("pwrdOld").value;	
	var newPassword = document.getElementById("pwrdNew").value;	
	var confirmPassword = document.getElementById("pwrdConfirm").value;

	if(newPassword == confirmPassword)
	{
		$.ajax(
		{
			url: urlConstant + "Clients/ChangePassword",
			type: "Post",
			data:
			{
				MailId: localUserMail,
				OldPassword: oldPassword,
				NewPassword: newPassword,
			},
			success:function(data)
			{
				console.log(data);
				if(data.IsOk == true)
				{
					swal
					({
						title: data.Message,
						text: data.Message,
						type: "success",
						showCancelButton: true,
						confirmButtonClass: "btn-danger",
						confirmButtonText: "OK",
					});

					alert("Please login again.");
					window.location = "Logout.php";
					// window.localStorage.clear();
				}
				else
				{
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
	else
	{
		alert("The new password and the confirm password doesnot match.")
		document.getElementById("pwrdNew").style.border = "1px solid red";
		document.getElementById("pwrdConfirm").style.border = "1px solid red";
	}	
}

function verifyPassword()
{
	var newPassword = document.getElementById("pwrdNew").value;
	var confirmPassword = document.getElementById("pwrdConfirm").value;

	if(newPassword != confirmPassword)
	{
		document.getElementById("pwrdNew").style.border = "1px solid red";
		document.getElementById("pwrdConfirm").style.border = "1px solid red";
	}
}