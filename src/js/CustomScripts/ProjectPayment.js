var localUserMail = UserIDClient;

//+The on load function is used for fetching the amount from the previous page and display it
$( document ).ready(function()
{
	const urlParams = new URLSearchParams(window.location.search);
	var amount = urlParams.get("Amount");
	// document.getElementById("spnAmount").value = "$" + amount;
	$("#spnAmount").html("Total Amount: $"+amount);

	$.ajax(
	{
		url: urlConstant + "Clients/FetchCardDetails",
		type: "Post",
		data:
		{
			Mail: localUserMail
		},
		success: function(response)
		{
			console.log(response);
			var cardDetails = "";

			for(var cardCount = 0; cardCount < response.ResponseObject.length; cardCount++)
			{
				cardDetails += "<tr>";
				cardDetails += "<td id='card_no_"+cardCount+"'>"+response.ResponseObject[cardCount].CardNumber+"</td>";
				cardDetails += "<td id='card_exp_"+cardCount+"'>"+response.ResponseObject[cardCount].CardExpiryDate+"</td>";
				cardDetails += "<td><input type='radio' id='"+cardCount+"' name='check' class='check'></td>";
				cardDetails += "</tr>";
			}
			$("#tbodyCardDetails").html(cardDetails);
		}
	});
});
//-The on load function is used for fetching the amount from the previous page and display it

//+This function is used to direct the client to the payment gateway
function btnPaymentPayNow()
{
	const urlParams = new URLSearchParams(window.location.search);
	var projectId = localStorage.getItem("ProjectCode");
	var cardNumber = document.getElementById("txtCardNumber").value;
	var expiryDate = document.getElementById("txtExpiryDate").value;
	var cvv = document.getElementById("txtCvv").value;
	var amount = document.getElementById("spnAmount").value;
	var cardOwnerName = document.getElementById("txtCardOwnerName").value;

	$.ajax(
	{
		url: urlConstant + "Clients/PaymentStatus",
		type: "Post",
		data:
		{
			ProjectId: projectId,
			CardNumber: cardNumber,
			ExpiryDate: expiryDate,
			Cvv: cvv,
			Amount: amount
		},
		success: function(data)
		{
			console.log(data);
			if(data.IsOk == true)
			{
				//swal("Payment Successful!", "Your project is being processed", "success");
				swal
				({
					title: "Payment Successful",
					text: data.Message + "Transaction Id:" + data.ResponseObject.TransactionId + "Reference Id:" + data.ResponseObject.ReferenceId,
					type: "success",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "No, cancel plx!",
				});
			}
			else
			{
				//swal("Oops", "Unable to process your payment", "error");
				swal
				({
					title: "Payment Unsuccessful",
					text: data.Message + "   Transaction Id:" + data.ResponseObject.TransactionId + "    Reference Id:" + data.ResponseObject.ReferenceId,
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
//-This function is used to direct the client to the payment gateway

function btnsubmitCard()
{
	var id = "";
	$(".check").each(function(){
		if($(this).is(":checked") == true)
		{
			id = $(this).attr("id");
		}
	});
	$("#txtCardNumber").val($("#card_no_"+id).html());
	$("#txtExpiryDate").val($("#card_exp_"+id).html());
}
