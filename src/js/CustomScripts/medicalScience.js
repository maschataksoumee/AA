$( document ).ready(function() 
{
	// All divs will be hidden at the beginning
	//Only the option selected will display the options under it
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
});

function medicineShow()
{
	$("#divAlternativeMedicine").show();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function DentistryShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").show();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function HealthManagementShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").show();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function MedicineShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").show();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function gynocologyShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").show();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function pathologyShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").show();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function pharmacologyShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").show();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function radiologyShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").show();
	$("#divRehabilitation").hide();
	$("#divSurgery").hide();
}

function rehabilitationShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").show();
	$("#divSurgery").hide();
}

function surgeryShow()
{
	$("#divAlternativeMedicine").hide();
	$("#divDentistry").hide();
	$("#divHealthManagement").hide();
	$("#divMedicine").hide();
	$("#divGynocology").hide();
	$("#divPathology").hide();
	$("#divPharmacology").hide();
	$("#divRadiology").hide();
	$("#divRehabilitation").hide();
	$("#divSurgery").show();
}