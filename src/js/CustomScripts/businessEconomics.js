$( document ).ready(function() 
{
	$("#divBusiness").hide();
	$("#divEconomics").hide();
});

function businessManagementShow()
{
	$("#divBusiness").show();
	$("#divEconomics").hide();
}

function economicsShow()
{
	$("#divBusiness").hide();
	$("#divEconomics").show();
}