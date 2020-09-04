var userMailLocal = UserIDClient;
var userid = 0;

$(document).ready(function()
{
	$("#btnAccounts").addClass("active");
	// alert(userMailLocal);
	var data_all = "UserMail=" + userMailLocal;
	// alert(data_all);

	$.ajax(
	{
		url: urlConstant + "Clients/FetchProfileDetails",
		type: "POST",
		data: data_all,
		success: function(response)
		{
			console.log(response);
			userid = response.ResponseObject[0].UserId;
			var profilePic = "<img src='"+response.ResponseObject[0].ProfilePic+"' alt='Profile Pic'/>"+
								"<div class='file btn btn-lg btn-primary'>"+
                                "Change Photo"+
                                "<input type='file' name='file'/>";
                            "</div>";
			$("#divProfilePic").html(profilePic);
			$("#hName").html(response.ResponseObject[0].FirstName + " " + response.ResponseObject[0].LastName);
			$("#hDesignation").html(response.ResponseObject[0].Designation);
			$("#spnQualification").html(response.ResponseObject[0].Qualification);
			$("#pUsername").html(response.ResponseObject[0].Username);
			$("#pName").html(response.ResponseObject[0].FirstName + " " + response.ResponseObject[0].LastName);
			$("#pMail").html(response.ResponseObject[0].Email);
			$("#pMobile").html(response.ResponseObject[0].Mobile);
			$("#pDesignation").html(response.ResponseObject[0].Profession);
			$("#pExperience").html(response.ResponseObject[0].Experience);
			$("#pTotalProjects").html(response.ResponseObject[0].TotalProjects);
			$("#pMembership").html(response.ResponseObject[0].Membership);
			$("#pBio").html(response.ResponseObject[0].Bio);
			$("#pNotes").html(response.ResponseObject[0].Notes);
			$("#pInformationSource").html(response.ResponseObject[0].InformationSource);
		}

	});
});


function EditProfile()
{
	window.location = "EditProfile.php?UserId="+ userid;
}