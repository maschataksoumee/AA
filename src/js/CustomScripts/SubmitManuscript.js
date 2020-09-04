$(document).ready(function()
{
	$("#formManuscript").submit(function(event){
		event.preventDefault();
		var isValid = true;

		$(".validation-form").each(function()
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
		if(isValid == true)
		{
			var data_all = new FormData(this);

			$.ajax
			({
				type: "POST",
				url: "php_action/UploadFiles.php",
				dataType: "json",
				data: data_all,
				contentType:false,          // The content type used when sending data to the server.
				cache:false,                // To unable request pages to be cached
				processData:false,          // To send DOMDocument or non processed data file it is set to false
				success: function (response) 
				{
					if(response.IsOK == true)
					{
						_insert_data(response.ResponseObjectFolder,response.ResponseObjectMainFile,response.ResponseObjectreferenceFile)
						// console.log(response.ResponseObjectFolder,response.ResponseObjectMainFile,response.ResponseObjectreferenceFile)
					}
					else
					{
						alert(response.Message);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) 
				{
					//console.log(thrownError);
				}
			});
		}
	});
});


function _insert_data(folder,mainfile,reffile)
{
	var FirstName = "FirstName="+$("#txtFirstName").val();
	var LastName = "LastName="+$("#txtLastName").val();
	var MailId = "MailId="+$("#txtEmail").val();
	var Services = "Services="+$("#txtServices").val();
	var Country = "Country="+$("#txtCountry").val();
	var folder = "FilePath="+folder;
	var fileMain = "FileName1="+mainfile;
	var fileReference = "FileName2="+reffile;
	data_all = FirstName + "&" + LastName + "&" + MailId + "&" + Services + "&" + Country + "&" + folder + "&" + fileMain + "&" + fileReference;
	console.log(data_all);
	var url = "http://aaweb.authorassists.com/api/Clients/SubmitManuscript";
	$.ajax
	({
		type: "POST",
		url: url,
		dataType: "json",
		data: data_all  ,
		success: function (response) 
		{
			console.log(response);
			if(response.IsOk == true)
			{
				swal("Done!!",response.Message,"success");
				$(".validation-form").each(function()
				{
					$(this).val("");
				});
				$("#fileReference").val("");
			}
			else
			{
				swal("Sorry",response.Message,"error");
				alert(response.Message);
			}
		},

		error: function (xhr, ajaxOptions, thrownError) 
		{
			console.log(thrownError);
		}
	});
}