function btnSubmitQueries()
{
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var mail = document.getElementById("txtEmailId").value;
	var phoneNumber = document.getElementById("txtPhoneNumber").value;
	var querystring = document.getElementById("txtareaQuery").value;

	$.ajax(
	{
		url: urlConstant + "Clients/QuerySubmit",
		type: "Post",
		data:
		{
			FirstName: firstName,
			LastName: lastName,
			EmailId: mail,
			Mobile: phoneNumber,
			Query: querystring,
			QueryParameter: 3, //3 = Query came from the Project Queries page
		},
		success: function(data)
		{
			console.log(data);
			if(data.resposeSubmittedParameter == 1)
			{
				$("#myModal").modal("show");
			}
		}
	})
}