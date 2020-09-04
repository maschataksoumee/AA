var userId = UserIDClient;
var firstName = FirstName;
var lastName = LastName;
var countryId = CountryId;
// console.log("userId"+userId);
// console.log("Firstanem"+firstName);
// console.log("lastName"+lastName);
// console.log("countryId"+countryId);
$( document ).ready(function() 
{
	$("#btnDashboard").addClass("active");
	var ProjectId = 0;
	var Amount = 0;
	// alert(UserIDClient);
	$("#btnPay").hide(); //Pay button will be displayed depending on the payment status
	$("#tblProjectDetails").hide(); //Table will be displayed only after clicking on the project
	$("#paraManuscript").hide(); //Not needed on page load
    var userId = UserIDClient; //Client mail id
    
    data_all = "UserId="+userId;
// alert(data_all);
    // +This function is used to fetch all the manuscript submitted by the client
    $.ajax(
	{
		url: urlConstant + "Clients/FetchClientManuscriptDetails",
		type: "POST",
		data: data_all,
		success: function(data)
		{
			console.log(data);
			var clientManuscriptTable = "";
			for(var clientManuscriptCount = 0; clientManuscriptCount < data.ResponseObject.length; clientManuscriptCount++)
			{
				var btn_id = "#btnFileDownload_"+clientManuscriptCount;	
				if(data.ResponseObject[clientManuscriptCount].PaymentStatus == "Ready for download")	
				{
					var dsbl = "";
				}
				else
				{
					var dsbl = "disabled";
				}
				clientManuscriptTable += "<tr>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].ProjectId+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].SubmissionDate+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].ProjectName+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].ServiceName+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].ServiceType+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].DiscountAmount+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].PaymentStatus+"</td>";
				clientManuscriptTable += "<td>" + "$ " + data.ResponseObject[clientManuscriptCount].Amount+"</td>";
				clientManuscriptTable += "<td>" + data.ResponseObject[clientManuscriptCount].TurnAroundTime+"</td>";
				clientManuscriptTable += "<td>" + "<a href='#' class='btn btn-success' onclick='getManuscriptDetails("+JSON.stringify(data.ResponseObject[clientManuscriptCount])+")'>View</a>"+"</td>";
				clientManuscriptTable += "<td>" + "<a href='#' class='btn btn-warning' onclick='SubmitQuery("+JSON.stringify(data.ResponseObject[clientManuscriptCount])+")'>Query</a>"+"</td>";
				clientManuscriptTable += "<td>" + "<a href = 'src/Constants/Changes.docx' download = 'Changes.docx'>";
				clientManuscriptTable += "<button class='btn btn-primary'id='btnFileDownload_"+clientManuscriptCount+"' "+dsbl+">Download</button></a>";
				clientManuscriptTable += "</tr>";
			}

			$("#tblBodyClientManuscriptDetails").html(clientManuscriptTable);
		}
	});
	// -This function is used to fetch all the manuscript submitted by the client
});

//+On clicking on a particular project, this function is called to fetch the details for that project
function getManuscriptDetails(ProjectDetails)
{

	$("#exampleModal").modal();
	console.log(ProjectDetails);
	$("#div_manuscriptDetails").show();
	$("#tblProjectDetails").show();
	// $("#paraInstruction").hide();
	$("#btnPay").hide();
	$("#paraManuscript").show();
	$("#tdProjectId").html(ProjectDetails.ProjectId);
	$("#tdProjectName").html(ProjectDetails.ProjectName);
	$("#tdWordCount").html(ProjectDetails.WordCount);
	$("#tdSubject").html(ProjectDetails.Subject);
	$("#tdService").html(ProjectDetails.ServiceName);
	$("#tdEditing").html(ProjectDetails.ServiceType);
	$("#tdSubmissionDate").html(ProjectDetails.SubmissionDate);
	if(ProjectDetails.Status == 2)
	{
		$("#tdStatus").html("Processing");
	}
	else
	{
		$("#tdStatus").html("Please confirm the payment to track the Project Status");
	}
	
	$("#tdTAT").html(ProjectDetails.TuenAroundTime);
	$("#tdDeliveryDate").html(ProjectDetails.DeliveryDate);
	$("#tdCouponCode").html(ProjectDetails.CouponCode);
	$("#tdDiscountPercent").html(ProjectDetails.DiscountPercent);
	$("#tdDiscountAmount").html(ProjectDetails.DiscountAmount);
	$("#tdTotalAmount").html(ProjectDetails.Amount);
	$("#tdPaymentStatus").html(ProjectDetails.PaymentStatus);

	if(ProjectDetails.Status != 2)
	{
		$("#btnPay").show();
		localStorage.setItem("ProjectCode", ProjectDetails.ProjectId);
		Amount = ProjectDetails.Amount;
	}
}
//-On clicking on a particular project, this function is called to fetch the details for that project

/*This function is called on Pay now button click. 
On the amount being 0, it will display the alert. Otherwise it will be directed to payment page*/
function btnPayNow()
{
	if(Amount == 0)
	{
		alert("The amount is 0. Please wait for the new amount updation.")
	}
	else
	{
		window.location="ProjectPayment.php?Amount=" + Amount;
	}	
}

// function btnLogoutClick()
// {
// 	window.localStorage.clear();
// }

function InsertManuscriptDetails(folder,mainfile,reffile)
{
	var FirstName = "FirstName="+ firstName;
	var LastName = "LastName="+lastName;
	var MailId = "MailId="+ userId;
	var Services = "Services="+$("#ddlServices").val();
	var Country = "Country="+countryId;
	var folder = "FilePath="+folder;
	var fileMain = "FileName1="+mainfile;
	var fileReference = "FileName2="+reffile;
	var tate = "tate" + $("$ddltat").val();
	data_all = FirstName + "&" + LastName + "&" + MailId + "&" + Services + "&" + Country + "&" + folder + "&" + fileMain + "&" + fileReference + "&" + tate;
	// alert(data_all);
	var url = urlConstant + "Clients/SubmitManuscript";
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
				alert("success");
				// swal("Done!!",response.Message,"success");
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

function SubmitQuery(Object)
{
	console.log(Object);
	var queryProjectId = Object.ProjectId;
	var queryProjectName = Object.ProjectName;
	var queryService = Object.ServiceName;
	var queryTat = Object.TurnAroundTime;

	var launchQuery="queryProjectId="+queryProjectId+"&queryProjectName="+queryProjectName+"&queryService="+queryService+"&queryTat="+queryTat;
// alert(launchQuery);
	window.location.href="testQuery.php?"+launchQuery;
}