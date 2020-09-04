$(document).ready(function()
{
	$.ajax(
	{
		url: urlConstant + "Dropdown/FetchAllCountries",
		type: "Post",
		data:
		{
		},
		success: function(data)
		{
			// console.log(data.ResponseObject);
			var countryList = "";
			countryList += "<option value=''>Select your Country *</option>";

			for(var CountryListcount = 0; CountryListcount < data.ResponseObject.length; CountryListcount++)
			{
				countryList += "<option value='" + data.ResponseObject[CountryListcount].CountryId + "'>" + data.ResponseObject[CountryListcount].CountryName + "</option>";
			}
			$("#ddlCountryE").html(countryList);
			$("#ddlCountry").html(countryList);
		}
	});
})



function AuthorRegistration()
{
	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var password = document.getElementById("txtPasswordA").value;
	var country = document.getElementById("ddlCountry").value;
	var mail = document.getElementById("txtMail").value;
	var phoneNumber = document.getElementById("txtMobile").value;
	var membership = document.getElementById("selMembership").value;
	//var signupdata = "FirstName=" + firstName + "&LastName=" + lastName + "&MailId=" + mail + "&Phone=" + phoneNumber + "&Password=" + password + "&Role=2&CountryId=23&Membership=" + membership;
	//console.log(signupdata);

	$.ajax(
	{
		url: urlConstant + "Clients/SignUp",
		type: "Post",
		data:
		{
			FirstName: firstName,
			LastName: lastName,
			MailId: mail,
			Password: password,
			Membership: membership,
			Phone: phoneNumber,
			Role: 2,
			CountryId: country,
		},
		success: function(data)
		{
			//console.log(data);
			if(data.IsOk == true)
				{
					swal
					({
						title: "Registration Successfull!!",
						text: data.Message,
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
						text: data.Message,
						type: "error",
						showCancelButton: true,
						confirmButtonClass: "btn-danger",
						confirmButtonText: "OK",
						cancelButtonText: "Cancel",
					});
				}
		}
	})
}

function EditorRegistration()
{
	var firstName = document.getElementById("txtFirstNameE").value;
	var lastName = document.getElementById("txtLastNameE").value;
	var password = document.getElementById("txtPasswordE").value;
	var country = document.getElementById("ddlCountryE").value;
	var mail = document.getElementById("txtMailE").value;
	var phoneNumber = document.getElementById("txtMobileE").value;
	//var membership = " ";
	var signupdata = "FirstName=" + firstName + "&LastName=" + lastName + "&MailId=" + mail + "&Phone=" + phoneNumber + "&Password=" + password + "&Role=3&CountryId=23&Membership=NA";
	console.log(signupdata);

	$.ajax(
	{
		url: urlConstant + "Clients/SignUp",
		type: "Post",
		data:
		{
			FirstName: firstName,
			LastName: lastName,
			MailId: mail,
			Password: password,
			Membership: "NA",
			Phone: phoneNumber,
			Role: 3,
			CountryId: country,
		},
		success: function(data)
		{
			//console.log(data);
			if(data.IsOk == true)
				{
					swal
					({
						title: "Registration Successfull!!",
						text: data.Message,
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
						text: data.Message,
						type: "error",
						showCancelButton: true,
						confirmButtonClass: "btn-danger",
						confirmButtonText: "OK",
						cancelButtonText: "Cancel",
					});
				}
		}
	})
}

// function divLoadCountry()
// {
// 	alert('Hi');
// 	$.ajax(
// 	{
// 		url: urlConstant + "Dropdown/FetchAllCountries",
// 		type: "Post",
// 		data:
// 		{
// 		},
// 		success: function(data)
// 		{
// 			// console.log(data.ResponseObject);
// 			var countryListE = "";
// 			countryListE += "<option value=''>Select your Country *</option>";

// 			for(var CountryListcountE = 0; CountryListcountE < data.ResponseObject.length; CountryListcountE++)
// 			{
// 				countryListE += "<option value='" + data.ResponseObject[CountryListcountE].CountryId + "'>" + data.ResponseObject[CountryListcount].CountryName + "</option>";
// 			}
// 			$("#ddlCountryE").html(countryListE);
// 			// $("#ddlCountry").html(countryList);
// 		}
// 	});
// }