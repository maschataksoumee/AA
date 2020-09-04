var localUserId = UserID;
var localUserMail = UserIDClient;
$(document).ready(function(){
    // $("#btnQuery").addClass("active");
    var UserId = "UserId="+localUserId;
    $.ajax
	({
		type: "POST",
        url: urlConstant + "Chats/FetchUserSupport",
        dataType: "json",
		data: UserId,
		success: function (response)
		{
            var html = "";
            console.log(response);
            for(var i=0;i<response.ResponseObject.length;i++)
            {
                if(response.ResponseObject[i].Reply == "")
                {
                    var btn_Class = "btn btn-danger";
                    html += '<div class="row">'+
                            '<button type="button" class="'+btn_Class+'" style="width:100%" data-toggle="collapse" data-target="#demoQuery_'+i+'">Query '+(i+1)+
                            ': '+response.ResponseObject[i].Message+'</button>'+
                            '</div>'+
                            '<div class="row">'+
                            '<div id="demoQuery_'+i+'" class="collapse ">'+
                                response.ResponseObject[i].Reply+
                            '</div>'+
                        '</div><br/>';
                }
                else
                {
                    var btn_Class = "btn btn-success";
                    html += '<div class="row">'+
                            '<button type="button" class="'+btn_Class+'" style="width:100%" data-toggle="collapse" data-target="#demoQuery_'+i+'">Query '+(i+1)+
                            ': '+response.ResponseObject[i].Message+'</button>'+
                            '</div>'+
                            '<div class="row">'+
                            '<div id="demoQuery_'+i+'" class="collapse mt-3">'+
                                response.ResponseObject[i].Reply+
                            '</div>'+
                        '</div><br/>';
                }
                
            }
            $("#query_response").show().html(html);
		}
	});
    $("#sendquery").click(function(){
        var UserId = "UserId="+localUserId;
        var txtAuthorQuery = "Message="+encodeURIComponent($("#txtAuthorQuery").val());
        data_all = UserId + "&" + txtAuthorQuery;
        console.log(data_all);
        $.ajax
		({
			type: "POST",
            url: urlConstant + "Chats/NewSupportQuery",
            dataType: "json",
			data: data_all,
			success: function (response)
			{
                console.log(response);
				if(response.IsOk == true)
				{
					swal
                    ({
                        title: "Query Submitted",
                        text: response.Message,
                        type: "success",
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "OK",
                        cancelButtonText: "Cancel",
                    });
				}
				else
				{
					swal
                    ({
                        title: "Query Not Submitted",
                        text: response.Message,
                        type: "danger",
                        showCancelButton: true,
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "OK",
                        cancelButtonText: "Cancel",
                    });
				}
                window.location.href="Support.php";
			}
		});
    });
});