// +This script is used to Display Price List
function _price()
{
    $("#Standard_price_div").show();
    $("#advanced_price_div").show();
	$("#substantive_price_div").show();
	var txtWordCount = $("#txtWordCount").val();
	var ddlTat = $("#ddlTat").val();
	var ddlService = $("#ddlService").val();
	// if(ddlService == "English Editing" || ddlService == "Translation Service" || ddlService == "Book Editing")
	// {
		if(ddlTat == "5 Days") // if dropwown no of days 5
		{
			// for Standard Editing // 
			var rateperunt = 0.035;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#Standard_price_div del h4").text("$"+original_price);
			$("#Standard_price_div h3").text("$"+current_price);
			// for Standard Editing // 

			// for Advanced Editing // 
			var rateperunt = 0.06;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#advanced_price_div del h4").text("$"+original_price);
			$("#advanced_price_div h3").text("$"+current_price);
			// for Advanced Editing // 
			
			// for Substantive Editing // 
			var rateperunt = 0.08;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#substantive_price_div del h4").text("$"+original_price);
			$("#substantive_price_div h3").text("$"+current_price);
			// for Substantive Editing // 
		} // if dropwown no of days 5

		if(ddlTat == "3 Days") // if dropwown no of days 3
		{
			// for Standard Editing // 
			var rateperunt = 0.04;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#Standard_price_div del h4").text("$"+original_price);
			$("#Standard_price_div h3").text("$"+current_price);
			// for Standard Editing // 

			// for Advanced Editing // 
			var rateperunt = 0.07;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#advanced_price_div del h4").text("$"+original_price);
			$("#advanced_price_div h3").text("$"+current_price);
			// for Advanced Editing // 
			
			// for Substantive Editing // 
			var rateperunt = 0.09;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#substantive_price_div del h4").text("$"+original_price);
			$("#substantive_price_div h3").text("$"+current_price);
			// for Substantive Editing // 
		} // if dropwown no of days 3

		if(ddlTat == "2 Days") // if dropwown no of days 2
		{
			// for Standard Editing // 
			var rateperunt = 0.05;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#Standard_price_div del h4").text("$"+original_price);
			$("#Standard_price_div h3").text("$"+current_price);
			// for Standard Editing // 

			// for Advanced Editing // 
			var rateperunt = 0.08;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#advanced_price_div del h4").text("$"+original_price);
			$("#advanced_price_div h3").text("$"+current_price);
			// for Advanced Editing // 
			
			// for Substantive Editing // 
			var rateperunt = 0.12;
			var original_price = (txtWordCount * rateperunt).toFixed(2);
			var current_price = (original_price - (original_price*(25/100))).toFixed(2);
			$("#substantive_price_div del h4").text("$"+original_price);
			$("#substantive_price_div h3").text("$"+current_price);
			// for Substantive Editing // 
		} // if dropwown no of days 2
	}
//}
// -This script is used to Display Price List
// +This script is used to include the header and the footer
	// function includeHTML() 
	// {
	// 	var z, i, elmnt, file, xhttp;
	// 	/* Loop through a collection of all HTML elements: */
	// 	z = document.getElementsByTagName("*");
	// 	for (i = 0; i < z.length; i++) 
	// 	{
	// 		elmnt = z[i];
	// 		/*search for elements with a certain atrribute:*/
	// 		file = elmnt.getAttribute("w3-include-html");
	// 		if (file) 
	// 		{
	// 			/* Make an HTTP request using the attribute value as the file name: */
	// 			xhttp = new XMLHttpRequest();
	// 			xhttp.onreadystatechange = function() 
	// 			{
	// 				if (this.readyState == 4) 
	// 				{
	// 					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
	// 					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
	// 					/* Remove the attribute, and call this function once more: */
	// 					elmnt.removeAttribute("w3-include-html");
	// 					includeHTML();
	// 				}
	// 			}
	// 			xhttp.open("GET", file, true);
	// 			xhttp.send();
	// 			/* Exit the function: */
	// 			return;
	// 		}
	// 	}
	// }
 // -This script is used to include the header and the footer

 // +This script is used to include the header and the footer
	function includeHTML() 
	{
		var z, i, elmnt, file, xhttp;
		/* Loop through a collection of all HTML elements: */
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) 
		{
			elmnt = z[i];
			/*search for elements with a certain atrribute:*/
			file = elmnt.getAttribute("w3-include-html");
			if (file) 
			{
				/* Make an HTTP request using the attribute value as the file name: */
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() 
				{
					if (this.readyState == 4) 
					{
						if (this.status == 200) {elmnt.innerHTML = this.responseText;}
						if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
						/* Remove the attribute, and call this function once more: */
						elmnt.removeAttribute("w3-include-html");
						includeHTML();
					}
				}
				xhttp.open("GET", file, true);
				xhttp.send();
				/* Exit the function: */
				return;
			}
		}
	}
 // -This script is used to include the header and the footer

 var urlConstant = "http://aaweb.authorassists.com/api/";