<?php

    date_default_timezone_set('Asia/Kolkata');
    $data = array();
    if(!empty($_FILES["EditedFile"]["name"]))
    {
        $allowed_ext = array("csv","doc","docx","xlsx", "pdf");
        $extension_temp = explode(".", $_FILES["EditedFile"]["name"]);
        $extension = end($extension_temp);
        if(in_array($extension, $allowed_ext))
        {
            $FilePath = "../".$_REQUEST['FilePath'];
            $ProjectId = $_REQUEST['ProjectId'];
            $target_file_temp = $_FILES["EditedFile"]["tmp_name"];
            $target_file = "Edited__".$_FILES["EditedFile"]["name"];
            $final_file = $FilePath."".$target_file;
            if(file_exists($final_file))
			{
                $data['IsOK'] = false;
                $data['Message'] = "File Already exist";
            }
            else
            {
                if(move_uploaded_file($target_file_temp, $final_file))
				{
                    $data['IsOK'] = true;
                    $data['ResponseObjectFolder'] = str_replace("../","",$FilePath);
                    $data['ResponseObjectMainFile'] = $target_file;
                    $data['ProjectId'] = $ProjectId;
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