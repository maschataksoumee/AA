function btnSubmitMailId()
{
	var mailId = document.getElementById("txtMail").value;

	$.ajax(
	{
		url: urlConstant + "Clients/ForgotPassword",
		type: "Post",
		data:
		{
			MailId: mailId,
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
				}).then(function(){
					window.location = "aa.html";
				});	
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
				}).then(function(){
					window.location = "Registration.html";
				});	
			}
		}
	})
}