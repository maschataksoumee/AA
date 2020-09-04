<?php
    $EmployeeDetails = json_decode($_REQUEST['EmployeeDetails'],true);
    if(count($EmployeeDetails) > 0)
    {
    	// $data = array();
        session_start();
        $_SESSION['Role'] = $EmployeeDetails[0]['Role'];
        $_SESSION['UserId'] = $EmployeeDetails[0]['UserId'];
        $_SESSION['FirstName'] = $EmployeeDetails[0]['FirstName'];
        $_SESSION['LastName'] = $EmployeeDetails[0]['LastName'];
        $_SESSION['CountryId'] = $EmployeeDetails[0]['CountryId'];
        $_SESSION['User'] = $EmployeeDetails[0]['User'];
        echo $EmployeeDetails[0]['Role'];
    }
?>