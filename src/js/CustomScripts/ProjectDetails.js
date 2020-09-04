//This is a list of global variables which will b eused throughout the page
var subjectSelected;
var serviceSelected;
var serviceTypeSelected;
var ProjectStatusSelected;
var PaymentStatusSelected;


$( document ).ready(function()
{
	$("#btnDashboard").addClass("active");
	//the dropdowns are hidden during page load and it is enabled only when the data needs to be changed
	$("#ddlSubject").hide();
	$("#ddlService").hide();
	$("#ddlEditingType").hide();
	$("#ddlProjectStatus").hide();
	$("#ddlPayStatus").hide();
	var localStorageProjectCode = localStorage.getItem("ProjectCode");
	// alert(localStorageProjectCode);

	$.ajax(
	{
		url: urlConstant + "Admin/FetchProjectDetailsByProjectCode",
		type: "Post",
		data:
		{
			ProjectCode: localStorageProjectCode,
		},
		success: function(data)
		{
			console.log(data);
			var responseData = data.ResponseObject[0];

			//While assigning values, we shd assign values in the dropdowns also
			//This is required as we will be setting the project value after fetching from the dropdown list
			document.getElementById("txtProjectCode").value = responseData.ProjectCode;
			document.getElementById("txtProjectName").value = responseData.ProjectName;
			document.getElementById("txtWordCount").value = responseData.WordCount;
			document.getElementById("txtSubject").value = responseData.Subject;
			document.getElementById("ddlSubject").value = responseData.Subject; //Setting the value for the dropdown
			document.getElementById("txtService").value = responseData.Service;
			document.getElementById("ddlService").value = responseData.Service; //Setting the value for the dropdown
			document.getElementById("txtServicetypes").value = responseData.TypeOfService;
			document.getElementById("ddlEditingType").value = responseData.TypeOfService; //Setting the value for the dropdown
			document.getElementById("txtSubmissionDate").value = responseData.SubmitDate;
			document.getElementById("txtTurnAroundTime").value = responseData.TurnAroundTime;
			document.getElementById("txtDeliveryDate").value = responseData.DeliveryDate;
			document.getElementById("txtStatus").value = responseData.ProjectStatus;
			document.getElementById("ddlProjectStatus").value = responseData.ProjectStatus; //Setting the value for the dropdown
			document.getElementById("txtCouponCode").value = responseData.CouponCode;
			document.getElementById("txtDiscountPercent").value = responseData.DiscountPercentage;
			document.getElementById("txtDiscountAmount").value = responseData.DiscountAmount;
			document.getElementById("txtTotalAmount").value = responseData.TotalAmount;
			document.getElementById("txtPaymentStatus").value = responseData.PaymentStatus;
			document.getElementById("ddlPayStatus").value = responseData.PaymentStatus; //Setting the value for the dropdown
			document.getElementById("txtDiscountPercent").value = responseData.DiscountPercentage;

			//Assigning values to the global variables
			subjectSelected = document.getElementById("txtSubject").value;
			serviceSelected = document.getElementById("txtService").value;
			serviceTypeSelected = document.getElementById("txtServicetypes").value;
			ProjectStatusSelected = document.getElementById("txtStatus").value;
			PaymentStatusSelected = document.getElementById("txtPaymentStatus").value;

			if(responseData.PaymentStatus == "Payment Done")
			{
				$("#btnAssignToEditors").show();
			}
		}
	});	
});

//When the tat is 5+ days, the admin is allowed to set the due date by selecting the day from the calender
function openCalender()
{
    $( "#txtDeliveryDate" ).datepicker();
};

//+This function is called to fetch all the subjects for the dropdown
function fetchAllSubjects()
{
	$.ajax(
	{
		url: urlConstant + "DropDown/FetchAllSubjects",
		type: "Post",
		data:
		{
		},
		success: function(data)
		{
			//console.log(data['ResponseObject'].length);
			var ddlSubjectData = "";
			for(var i = 0; i < data['ResponseObject'].length; i++)
			{
				ddlSubjectData += "<option value='" + data['ResponseObject'][i]['SubjectName'] +"'>"+data['ResponseObject'][i]['SubjectName']+"</option>";
			}
			$("#ddlSubject").html(ddlSubjectData);
		}
	})
}
//-This function is called to fetch all the subjects for the dropdown

//+This function is called for fetching a list of all the services for the dropdown
function fetchAllServices()
{
	$.ajax(
	{
		url: urlConstant + "DropDown/FetchAllServices",
		type: "Post",
		data:
		{
		},
		success: function(data)
		{
			var serviceDataObject = data['ResponseObject'];
			
			var ddlServiceData = "";
			for(var i = 0; i < data['ResponseObject'].length; i++)
			{
				var serviceId = parseInt(i+1);
				ddlServiceData += "<option value='" + serviceId +"'>"+serviceDataObject[i].ServiceName+"</option>";
			}
			$("#ddlService").html(ddlServiceData);
		}
	})
}
//-This function is called for fetching a list of all the services for the dropdown

//+This function is called for fetching a list of all the services types for the dropdown based on the services
function fetchServiceTypes()
{
	var selectedService = document.getElementById("ddlService").value;
	//alert(selectedService);

	$.ajax(
	{
		url: urlConstant + "DropDown/FetchServiceTypesByServiceId",
		type: "Post",
		data:
		{
			ServiceId: selectedService
		},
		success: function(data)
		{
			// console.log(data);
			var ddlServiceTypeData = "<option value=''>Select</option>";
			for(var i = 0;i<data.ResponseObject.length; i++)
			{
				ddlServiceTypeData += "<option value='"+data.ResponseObject[i].ServiceTypeId+"'>"+data.ResponseObject[i].ServiceTypeName+"</option>";
			}
			$("#ddlEditingType").html(ddlServiceTypeData);
		}
	});
}
//-This function is called for fetching a list of all the services types for the dropdown based on the services

//+This function is used to set the delivery date in a specific format
function SetDeliveryDate()
{
	var tat = document.getElementById("txtTurnAroundTime").value;

	if(tat == 0)
	{
		
		document.getElementById("txtDeliveryDate").disabled = false;
		document.getElementById("txtDeliveryDate").value = "";
		openCalender();
	}
	else if(tat == 5)
	{
		let current_datetime = new Date();
		let formatted_date = (current_datetime.getMonth() + 1) + "/" + (current_datetime.getDate() + 5) + "/" +  current_datetime.getFullYear();
		document.getElementById("txtDeliveryDate").value=formatted_date;
	}
	else if(tat == 3)
	{
		let current_datetime = new Date();
		let formatted_date = (current_datetime.getMonth() + 1) + "/" + (current_datetime.getDate() + 3) + "/" +  current_datetime.getFullYear();
		document.getElementById("txtDeliveryDate").value=formatted_date;
	}
	else if(tat == 2)
	{
		let current_datetime = new Date();
		let formatted_date = (current_datetime.getMonth() + 1) + "/" + (current_datetime.getDate() + 2) + "/" + current_datetime.getFullYear();
		document.getElementById("txtDeliveryDate").value=formatted_date;
	}
}
//-This function is used to set the delivery date in a specific format

//+This function is used to set the price based on the tat and the word count
function setPrice()
{
	var Name = serviceTypeSelected;
	var tat = document.getElementById("txtTurnAroundTime").value;
	var rate = 0;
	if (tat == "5" || tat == "0")
	{
		if (Name == "Standard Editing")
		{
	    	rate = 0.035;
		}
		else if (Name == "Advanced Editing")
		{
	    	rate = 0.06;
		}
		else if (Name == "Substantive Editing")
		{
	    	rate = 0.08;
		}
	}

	else if (tat == "3")
	{
		if (Name == "Standard Editing")
		{
			rate = 0.04;
		}
		else if (Name == "Advanced Editing")
		{
			rate = 0.07;
		}
		else if (Name == "Substantive Editing")
		{
			rate = 0.09;
		}
	}

	else if (tat == "2")
	{
		if (Name == "Standard Editing")
		{
			rate = 0.05;
		}
		else if (Name == "Advanced Editing")
		{
			rate = 0.08;
		}
		else if (Name == "Substantive Editing")
		{
			rate = 0.12;
		}
	}

	var wordCount = document.getElementById("txtWordCount").value;
	var totalPrice = 0;
	totalPrice = wordCount * rate;

	var discountPercent = document.getElementById("txtDiscountPercent").value;
	if(discountPercent != "0")
	{
		discountPrice = (discountPercent/100)* totalPrice;
		totalPrice -= discountPrice;
	}

	var discountAmount = document.getElementById("txtDiscountAmount").value;
	if (discountAmount != "0")
	{
		totalPrice -= discountAmount;
	}
	document.getElementById("txtTotalAmount").value = totalPrice;
}
//-This function is used to set the price based on the tat and the word count

//+This function is used to update the project details
function submitProjectDetails()
{
	var projectCode = document.getElementById("txtProjectCode").value;
	var projectName = document.getElementById("txtProjectName").value;
	var wordCount = document.getElementById("txtWordCount").value;
	var tat = document.getElementById("txtTurnAroundTime").value;
	var deliveryDate = document.getElementById("txtDeliveryDate").value;
	var enquiryStatus = document.getElementById("ddlProjectStatus").value;
	var couponCode = document.getElementById("txtCouponCode").value;
	var discountPercent = document.getElementById("txtDiscountPercent").value;
	var discountAmount = document.getElementById("txtDiscountAmount").value;
	var totalAmount = document.getElementById("txtTotalAmount").value;
	var paymentStatus = document.getElementById("ddlPayStatus").value;
	//alert(paymentStatus);

	if(tat == 0)
	{
		tat = "5+";
	}

	if(couponCode == "")
	{
		couponCode = "0";
	}

	if(discountPercent == "")
	{
		discountPercent = "0";
	}

	if(discountAmount == "")
	{
		discountAmount = "0";
	}

	if(enquiryStatus == "Pending")
	{
		enquiryStatus = 0;
	}
	else
	{
		enquiryStatus = 1;
	}

	if(totalAmount > 0)
	{
		projectStatus = 1;
	}
	else
	{
		projectStatus = 0;
	}
	  
	$.ajax(
	{
		url: urlConstant + "Admin/SetProjectData",
		type: "Post",
		data:
		{
			ProjectCode: projectCode,
			ProjectName: projectName,
			WordCount: wordCount,
			Subject: subjectSelected,
			ServiceName: serviceSelected,
			ServiceType: serviceTypeSelected,
			TurnAroundTime: tat + " Days",
			DeliveryDate: deliveryDate,
			EnquiryStatus: enquiryStatus,
			ProjectStatus: projectStatus,
			CouponCode: couponCode,
			DiscountPercent: discountPercent,
			DiscountAmount: discountAmount,
			TotalAmount: totalAmount,
			PaymentStatus: paymentStatus
		},
		success: function(data)
		{
			if(data.IsOk == true)
			{
				swal
				({
					title: "Yayy!!",
					text: data.Message,
					type: "success",
					//showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "OK",
					cancelButtonText: "Cancel",
				}).then(function(){
					window.location = "LoginAdmin.php";
				});				
			}
			else 
			{
				//alert(data.Message);
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
//-This function is used to update the project details

//+This function is used to enable the ddl of Services
function enableService()
{
	$("#ddlService").show();
	$("#txtService").hide();
	fetchAllServices();
}
//-This function is used to enable the ddl of Services		

//+Fetch the value of the service selected and assign it to the global variable
function serviceChangeValues()
{
	var service = document.getElementById("ddlService");
	selectedService = service.options[service.selectedIndex].text;
}
//-Fetch the value of the service selected and assign it to the global variable

//+This function is used to enable the ddl of subjects
function enableSubject()
{
	$("#ddlSubject").show();
	$("#txtSubject").hide();
	fetchAllSubjects();	
}
//-This function is used to enable the ddl of subjects

//+fetching the value selected for the subject and assigning it to the global variable
function SubjectChangeValues()
{
	var subject = document.getElementById("ddlSubject");
	subjectSelected = subject.options[subject.selectedIndex].text;
}
//-fetching the value selected for the subject and assigning it to the global variable

//+This function is used to enable the ddl of service types
function enableServiceTypes()
{
	$("#ddlEditingType").show();
	$("#txtServicetypes").hide();
	fetchServiceTypes();	
}
//-This function is used to enable the ddl of service types

//+Fetch the value of the service type selected and assign it to the global variable
function serviceTypeValue()
{
	var serviceType = document.getElementById("ddlEditingType");
	serviceTypeSelected = serviceType.options[serviceType.selectedIndex].text;
}
//-Fetch the value of the service type selected and assign it to the global variable

//+This function is used to enable the ddl of Project status
function enableProjectStatus()
{
	$("#txtStatus").hide();
	$("#ddlProjectStatus").show();
}
//-This function is used to enable the ddl of Project status

//+This function is used to enable the ddl of the payment status
function enablePaymentStatus()
{
	$("#txtPaymentStatus").hide();
	$("#ddlPayStatus").show();
}
//-This function is used to enable the ddl of the payment status

// function OpenDivAssignEditors()
// {
// 	$("#divEditorAssign").show();
// }

// function AssignEditors()
// {
// 	var editor = document.getElementById("ddlEditorsList").value;
// 	var pages = document.getElementById("txtPages").value;
// 	var comments = document.getElementById("txtComments").value;
// 	var projectId = document.getElementById("txtProjectCode").value;

// 	$.ajax(
// 	{
// 		url: urlConstant + "Admin/EditorAssignment",
// 		type: "Post",
// 		data:
// 		{
// 			AssignedEditor: editor,
// 			Pages: pages,
// 			Comments: comments,
// 			ProjectId: projectId
// 		},
// 		success: function(data)
// 		{
// 			if(data.IsOk == true)
// 			{
// 				swal
// 				({
// 					title: data.Message,
// 					text: data.Message,
// 					type: "success",
// 					showCancelButton: true,
// 					confirmButtonClass: "btn-danger",
// 					confirmButtonText: "OK",
// 				});
// 			}
// 			else
// 			{
// 				swal
// 				({
// 					title: data.Message,
// 					text: data.Message,
// 					type: "error",
// 					showCancelButton: true,
// 					confirmButtonClass: "btn-danger",
// 					confirmButtonText: "OK",
// 				});
// 			}
// 		}
// 	});
// }