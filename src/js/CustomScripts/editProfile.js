var localUserId = userId;
var localUserMail = UserIDClient;
$(document).ready(function()
{
	$("#btnAccounts").addClass("active");

	$.ajax
	({
		type: "POST",
		url: urlConstant + "Clients/FetchProfileDetails",
		data: 
		{
			UserMail: localUserMail,
		},
		
		success: function (response) 
		{
			 console.log(response);
			
			$("#FirstName").val(response.ResponseObject[0].FirstName);
			$("#LastName").val(response.ResponseObject[0].LastName);
			$("#Mail").val(response.ResponseObject[0].Email);
			$("#Designation").val(response.ResponseObject[0].Designation);
			$("#Qualification").val(response.ResponseObject[0].Qualification);
			$("#Username").val(response.ResponseObject[0].Username);
			$("#Mobile").val(response.ResponseObject[0].Mobile);
			$("#Zipcode").val(response.ResponseObject[0].Zipcode);
			$("#Notes").val(response.ResponseObject[0].Notes);
			$("#Bio").val(response.ResponseObject[0].Bio);
			$("#Profession").val(response.ResponseObject[0].Profession);
			$("#Experience").val(response.ResponseObject[0].Experience);
			$("#TotalProjects").val(response.ResponseObject[0].TotalProjects);
		}
	});
	$("#frm_edit_profile").submit(function(event){
		event.preventDefault();
		var isValid = true;

		$(".new-validation-form").each(function()
		{
			if($(this).val() == "")
			{
				$(this).addClass("is-invalid");
				isValid = false;
			}
			else
			{
				$(this).removeClass("is-invalid");
			}
		});
		alert(isValid);
		if(isValid == true)
		{
			var data_all = $(this).serialize();
			// console.log(data_all);
			$.ajax
			({
				type: "POST",
				url: urlConstant + "Clients/EditProfile",
				data: data_all,
				success: function (response) 
				{
					if(response.IsOk == true)
					{
						alert('Done');
					}
					else
					{
						alert('Not done');
					}
				}			
			});
		}
	});
});
