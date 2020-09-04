<?php

    date_default_timezone_set('Asia/Kolkata');
    $data = array();
    if(!empty($_FILES["fileMain"]["name"]))
    {
        $allowed_ext = array("csv","doc","docx","xlsx", "pdf");
        $extension_temp = explode(".", $_FILES["fileMain"]["name"]);
        $extension = end($extension_temp);
        if(in_array($extension, $allowed_ext))
        {
            $target_file_temp = $_FILES["fileMain"]["tmp_name"];
            $target_file_temp_fileReference = $_FILES["fileReference"]["tmp_name"];
            $target_file = $_FILES["fileMain"]["name"];
            $target_file_fileReference = "Ref__".$_FILES["fileReference"]["name"];
            $email = $_REQUEST['txtEmail'];
            $year = date("Y");
            $monthYear = date("M-Y");
            $currentDate = date("d-M-Y");
            $folder = "../upload/".$year."/".$monthYear."/".$currentDate."/".$email."/";
            $final_file = $folder."".$target_file;
            $final_file_fileReference = $folder."".$target_file_fileReference;
            if(!is_dir($folder) )
            {
                if (!mkdir($folder, 0777, true))
                {
                    $data['IsOK'] = false;
                    $data['Message'] = "Failed to create folders...";
                }
            }
            if(file_exists($final_file))
			{
                $data['IsOK'] = false;
                $data['Message'] = "File Already exist";
            }
            else
            {
                if(move_uploaded_file($target_file_temp, $final_file))
				{
                    move_uploaded_file($target_file_temp_fileReference, $final_file_fileReference);
                    $data['IsOK'] = true;
                    $data['ResponseObjectFolder'] = str_replace("../","",$folder);
                    $data['ResponseObjectMainFile'] = $target_file;
                    if(!empty($_FILES["fileReference"]["name"]))
                    {
                        $data['ResponseObjectreferenceFile'] = $target_file_fileReference;
                    }
                    else
                    {
                        $data['ResponseObjectreferenceFile'] = NULL;
                    }
                    $data['Message'] = "Done";
                }
                else
                {
                    $data['IsOK'] = false;
                    $data['Message'] = "File upload error";
                }
            }
        }
        else
        {
            $data['IsOK'] = false;
            $data['Message'] = "File Extension Error";
        }
    }
    else
    {
        $data['IsOK'] = false;
        $data['Message'] = "No_File_Select";
    }
    echo json_encode($data,true);
?>