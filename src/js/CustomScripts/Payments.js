var userId = UserIDClient;

$(document).ready(function()
{
	$("#btnPayments").addClass("active");
	var data_all = "Mail=" + userId;
	// alert(data_all);
	$.ajax(
	{
		url: urlConstant + "Clients/DisplayPayments",
		type: "POST",
		data: data_all,
		success: function(data)
		{
			// console.log(data.ResponseObject.length);

			if(data.IsOk == true)
			{
				var paymentListCount = 0;
				var paymentList = "";
				for(paymentListCount = 0; paymentListCount < data.ResponseObject.length; paymentListCount++)
				{
					paymentList += "<tr>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].ProjectCode + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].AmountPaid + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].PaymentStatus + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].StatusMessage + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].ReferenceId + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].TransactionId + "</td>";
					paymentList += "<td>" + data.ResponseObject[paymentListCount].PaymentDate + "</td>";
					paymentList += "</tr>";
					// paymentList += "<td><button class='btn btn-primary' id='btnRequest'>Request</button>";
				}
				$("#tblPaymentDetails").html(paymentList);
			}
			else
			{
				$("#tblPayment").html(data.ResponseObject.Message);

			}
		}
	});
})