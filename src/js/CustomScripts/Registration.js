//+The on load function is used to fetch a list of all the countries and populate the ddl
$( document ).ready(function()
{
	var userId = localStorage.getItem("UserId");

	if(userId == null)
	{
		//document.getElementById('hrefLogout').style.display = 'none';
		$("#hrefLogout").hide();
	}
	else
	{
		$("#hrefLogout").show();
	}

	$.ajax(
	{
		url: urlConstant + "Dropdown/FetchAllCountries",
		type: "Post",
		data:
		{
			
		},
		success: function(data)
		{
			console.log(data.ResponseObject[1].CountryName);
			var populateCountryListDdl = "<option value='-1'>--Select your Country--</option>";

			for(var countryCount = 0; countryCount < data.ResponseObject.length; countryCount++)
			{
				var CountryDataArray = data.ResponseObject[countryCount];
				populateCountryListDdl += "<option value = '" + countryCount + "'>" + data.ResponseObject[countryCount].CountryName +"</option>";
			}
			$("#ddlCountry").html(populateCountryListDdl);
		}
	});
});
//-The on load function is used to fetch a list of all the countries and populate the ddl

//+This function is used to open modal based on the value of the membership selected
function OpenModal()
{
	var membership = document.getElementById("ddlMembership");
	var membershipValue = membership.options[membership.selectedIndex].value;

	if(membershipValue == 1)
	{
		$("#ModalBasicMembership").modal("show");
	}
	else if(membershipValue == 2)
	{
		$("#ModalSilverMembership").modal("show");
	}
	else if(membershipValue == 3)
	{
		$("#ModalGoldMembership").modal("show");
	}
	else
	{
		$("#ModalPlatinumMembership").modal("show");
	}
}
//-This function is used to open modal based on the value of the membership selected

//+This function is used to register a client
//If the mail id is already registered, the client is not allowed to register again
function btnRegistration()
{
	document.getElementById("btnRegistrationSubmit").disabled = true; 

	var selectedDesignation = document.getElementById("ddlDesignation");
	var designation = selectedDesignation.options[selectedDesignation.selectedIndex].text;

	var selectedQualification = document.getElementById("ddlQualification");
	var qualification = selectedQualification.options[selectedQualification.selectedIndex].text;

	var selectedSource = document.getElementById("ddlHear");
	var source = selectedSource.options[selectedSource.selectedIndex].text;

	var selectedCountry = document.getElementById("ddlCountry");
	var country = selectedCountry.options[selectedCountry.selectedIndex].value;

	var selectedMembership = document.getElementById("ddlMembership");
	var membership = selectedMembership.options[selectedMembership.selectedIndex].text;

	var firstName = document.getElementById("txtFirstName").value;
	var lastName = document.getElementById("txtLastName").value;
	var emailID = document.getElementById("txtEmail").value;
	var mobile = document.getElementById("txtMobile").value;
	var password = document.getElementById("txtPassword").value;
	var confirmPassword = document.getElementById("txtConfirmPassword").value;
	var zipCode = document.getElementById("txtZipCode").value;
	var notes = document.getElementById("txtNotes").value;

	if(firstName == "")
	{
		alert("Please enter your First Name");
	}

	else if(lastName == "")
	{
		alert("Please enter your Last Name");
	}

	else if(emailID == "")
	{
		alert("Please enter your mail id");
	}

	else if(mobile == "")
	{
		alert("Please enter your mobile number");
	}

	else if(password == "")
	{
		alert("Please enter the password");
	}

	else if(password != confirmPassword)
	{
		alert("The password and the given password doesnot match");
	}
	else if(country == "")
	{
		alert("Please select your country");
	}
	else
	{
		$.ajax(
		{
			url: urlConstant + "Clients/Registration",
			type: "Post",
			data:
			{
				FirstName: firstName,
				LastName: lastName,
				Mail: emailID,
				Mobile: mobile,
				Password: password,
				Designation: designation,
				Qualification: qualification,
				Source: source,
				Zipcode: zipCode,
				Notes: notes,
				Country: country +1,
				Membership: membership
			},
			success: function(data)
			{
				console.log(data);

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
		});
	}

	
}
//-This function is used to register a client

//+These 2 functions are used to ensure that the Register button is enabled only after agreeing to the
//terms and conditions of the service and that of membership
function chkTermsClick()
{
	if(document.getElementById("chkTerms").checked)
	{
		if(document.getElementById("chkMembership").checked)
		{
			document.getElementById("btnRegistrationSubmit").disabled = false; 
		}
		else
		{
			document.getElementById("btnRegistrationSubmit").disabled = true;
		}
	}
	else
	{
		document.getElementById("btnRegistrationSubmit").disabled = true;
	}
}

function chkMembershipClick()
{
	if(document.getElementById("chkMembership").checked)
	{
		if(document.getElementById("chkTerms").checked)
		{
			document.getElementById("btnRegistrationSubmit").disabled = false; 
		}
		else
		{
			document.getElementById("btnRegistrationSubmit").disabled = true;
		}
	}
	else
	{
		document.getElementById("btnRegistrationSubmit").disabled = true;
	}
}