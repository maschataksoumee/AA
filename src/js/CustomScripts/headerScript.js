
$(document).ready(function(){
	$("#frmLogin").submit(function(event)
	{
		event.preventDefault();
		if($("#txtUserName").val() == "" || $("#txtPassword").val() =="")
		{
			alert("User Name & Password Required");
		}
		else
		{
			var Username = $("#txtUserName").val();
			var Password = $("#txtPassword").val();
			$.ajax(
			{
				url: urlConstant + "Clients/Login",
				type: "Post",
				data:
				{
					UserId: Username,
					Password: Password
				},
				success: function(data)
				{
					console.log(data);
					if(data.IsOk == true)
					{
						var EmployeeDetails = [];
						// Push Data In Local Array for passing and stire data in session Array //
						EmployeeDetails.push
						({
							UserId: data.ResponseObject.UserId,
							Role: data.ResponseObject.Role,
							FirstName: data.ResponseObject.FirstName,
							LastName: data.ResponseObject.LastName,
							CountryId: data.ResponseObject.CountryId,
							User: data.ResponseObject.User
						});
						sessionAssign(EmployeeDetails);
					}
				}
			})
		}
	});
});
function sessionAssign(EmployeeDetails)
{
	var EmployeeDetails = "EmployeeDetails="+JSON.stringify(EmployeeDetails);
    $.ajax({
        type: "POST",
        url: "php_action/session_assign.php",
        dataType: "text",
        data: EmployeeDetails,
        success: function (response) {
            if(response == 1)
            {
                location.href = "LoginAdmin.php";
            }
            else if(response == 2)
            {
            	location.href = "ClientDashboard.php";
            }
            else if(response == 3)
            {
            	location.href="EditorDashboard.php";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
        }
    });
}