/*This function is used to submit queries regarding pricing.
On query submission, a modal will pop up displaying that the query has been submitted and we will get back to you. */

function btnPricingEnquirySubmit()
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
			QueryParameter: 2, //2 = Query came from the Pricing page
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