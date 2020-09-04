jQuery(document).ready(function() {
	$('#classic').click(function() {
	    $('.form-wizard').addClass("form-header-classic").removeClass("form-header-stylist form-header-modarn");
	});

	$('#modarn').click(function() {
	    $('.form-wizard').addClass("form-header-modarn").removeClass("form-header-classic form-header-stylist");
	});

	$('#stylist').click(function() {
	    $('.form-wizard').addClass("form-header-stylist").removeClass("form-header-classic form-header-modarn");
	});
});

jQuery(document).ready(function() {		
	$('#classic-body').click(function() {
	    $('.form-wizard').addClass("form-body-classic").removeClass("form-body-stylist form-body-material");
	});

	$('#material-body').click(function() {
	    $('.form-wizard').addClass("form-body-material").removeClass("form-body-classic form-body-stylist");
	});

	$('#stylist-body').click(function() {
	    $('.form-wizard').addClass("form-body-stylist").removeClass("form-body-classic form-body-material");
	});
});


"use strict";
(function( $ ) {
	
	function scroll_to_class(element_class, removed_height) {
		var scroll_to = $(element_class).offset().top - removed_height;
		if($(window).scrollTop() != scroll_to) {
			$('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
		}
	}

	function bar_progress(progress_line_object, direction) {
		var number_of_steps = progress_line_object.data('number-of-steps');
		var now_value = progress_line_object.data('now-value');
		var new_value = 0;
		if(direction == 'right') {
			new_value = now_value + ( 100 / number_of_steps );
		}
		else if(direction == 'left') {
			new_value = now_value - ( 100 / number_of_steps );
		}
		progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
	}

	jQuery(document).ready(function() {
		
		/*
			Form
		*/
		$('.form-wizard fieldset:first').fadeIn('slow');
		
		$('.form-wizard .required').on('focus', function() {
			$(this).removeClass('input-error');
		});
		
		// next step
		$('.form-wizard .btn-next').on('click', function() {
			var parent_fieldset = $(this).parents('fieldset');
			var next_step = true;
			// navigation steps / progress steps
			var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
			var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
			
			// fields validation
			parent_fieldset.find('.required').each(function() {
				if( $(this).val() == "" ) {
					$(this).addClass('input-error');
					next_step = false;
				}
				else {
					$(this).removeClass('input-error');
				}


				// USE : Custome validatin check /

				// Formate email 
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				
				// Validate email primary email
				var email = $('#primary_email').val();
				if( $('#primary_email').val() == "" ) {
					$('#primary_email').addClass('input-error');
					next_step = false;
				}else if($('#primary_email').val()!= ''){ 
					if (re.test(String(email).toLowerCase())){
						$('#primary_email').removeClass('input-error');
					}else{
						$('#primary_email').addClass('input-error');
						next_step = false;
					}
				}else{
					$('#primary_email').removeClass('input-error');
				}


				
				// Mobile number validation
				var mobileno = $('#ncfPhone1').val();
				var pattern = /^\(\d{3}\)\s*\d{3}(?:-|\s*)\d{4}$/;
				if( $('#ncfPhone1').val() == "" ) {
					$('#ncfPhone1').addClass('input-error');
					next_step = false;
				}else if($('#ncfPhone1').val()!= ''){ 
					if(/^\d{10}$/.test(mobileno)){
						$('#ncfPhone1').removeClass('input-error');
					}else{
						$('#ncfPhone1').addClass('input-error');
						next_step = true; //soumee-todo
					}
				}else{
					$('#ncfPhone1').removeClass('input-error');
				}
				/* END custome validation*/
			});
			// fields validation
			
			if( next_step ) {
				parent_fieldset.fadeOut(400, function() {
					// change icons
					current_active_step.removeClass('active').addClass('activated').next().addClass('active');
					// progress bar
					bar_progress(progress_line, 'right');
					// show next step
					$(this).next().fadeIn();
					// scroll window to beginning of the form
					scroll_to_class( $('.form-wizard'), 20 );
				});
			}
			
		});
		
		// previous step
		$('.form-wizard .btn-previous').on('click', function() {
			// navigation steps / progress steps
			var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
			var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
			
			$(this).parents('fieldset').fadeOut(400, function() {
				// change icons
				current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
				// progress bar
				bar_progress(progress_line, 'left');
				// show previous step
				$(this).prev().fadeIn();
				// scroll window to beginning of the form
				scroll_to_class( $('.form-wizard'), 20 );
			});
		});
		
		// submit
		$('.form-wizard').on('submit', function(e) {
			
			// fields validation
			$(this).find('.required').each(function() {
				if( $(this).val() == "" ) {
					e.preventDefault();
					$(this).addClass('input-error');
				}
				else {
					$(this).removeClass('input-error');
				}
			});
			// fields validation

		    // Validate email for secondary email
			var FileUploadToServer = $('#FileUploadToServer').val();
			if ($('#FileUploadToServer').val() == "") {
			    $('#ddlLevelOfEdit').addClass('input-error');
			    next_step = false;
			} else if ($('#FileUploadToServer').val() != '') {
			    if (re.test(String(FileUploadToServer).toLowerCase())) {
			        $('#FileUploadToServer').removeClass('input-error');
			    } else {
			        $('#FileUploadToServer').addClass('input-error');
			        next_step = false;
			    }
			} else {
			    $('#FileUploadToServer').removeClass('input-error');
			}
		});
		
		
	});
	


	// image uploader scripts 

	var $dropzone = $('.image_picker'),
		$droptarget = $('.drop_target'),
		$dropinput = $('#inputFile'),
		$dropimg = $('.image_preview'),
		$remover = $('[data-action="remove_current_image"]');

	$dropzone.on('dragover', function() {
	  $droptarget.addClass('dropping');
	  return false;
	});

	$dropzone.on('dragend dragleave', function() {
	  $droptarget.removeClass('dropping');
	  return false;
	});

	$dropzone.on('drop', function(e) {
	  $droptarget.removeClass('dropping');
	  $droptarget.addClass('dropped');
	  $remover.removeClass('disabled');
	  e.preventDefault();
	  
	  var file = e.originalEvent.dataTransfer.files[0],
		  reader = new FileReader();

	  reader.onload = function(event) {
		$dropimg.css('background-image', 'url(' + event.target.result + ')');
	  };
	  
	  console.log(file);
	  reader.readAsDataURL(file);

	  return false;
	});

	$dropinput.change(function(e) {
	  $droptarget.addClass('dropped');
	  $remover.removeClass('disabled');
	  $('.image_title input').val('');
	  
	  var file = $dropinput.get(0).files[0],
		  reader = new FileReader();
	  
	  reader.onload = function(event) {
		$dropimg.css('background-image', 'url(' + event.target.result + ')');
	  }
	  
	  reader.readAsDataURL(file);
	});

	$remover.on('click', function() {
	  $dropimg.css('background-image', '');
	  $droptarget.removeClass('dropped');
	  $remover.addClass('disabled');
	  $('.image_title input').val('');
	});

	$('.image_title input').blur(function() {
	  if ($(this).val() != '') {
		$droptarget.removeClass('dropped');
	  }

	});

	// image uploader scripts

}( jQuery ));



jQuery(function() {
	jQuery('#upldresum').change(function() {
	  var i = jQuery(this).prev('label').clone();
	  var file = jQuery('#upldresum')[0].files[0].name;
	  //$(this).prev('label').text(file);
	  console.log(file);
	  jQuery('#FileUpload1').val(file);
	});



	jQuery('#upldfile').change(function() {
	  var i = jQuery(this).prev('label').clone();
	  var file = jQuery('#upldfile')[0].files[0].name;
	  //$(this).prev('label').text(file);
	  console.log(file);
	  jQuery('#FileUploadToServer').val(file);
	});



	// jQuery(document).ready(function() {
	//   jQuery('#frmgetquote').find('input:text').val('');    
	// });
 


	function validateEmail(txtEmail) {
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(txtEmail.value) == false)
		{
			alert('Invalid Email Address');
			return false;
		}
		return true;
	}

});


 jQuery(document).ready(function() { 
      var transcountry = jQuery('#ncfCountry');
      var input = document.querySelector('#ncfPhone');
       window.intlTelInput(input, {
       separateDialCode: true,
       customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        // return "e.g. +"+ selectedCountryData.dialCode +' '+ selectedCountryPlaceholder;
            return " e.g. "+ selectedCountryPlaceholder;
      },
         utilsScript: "build/js/utils.js",
       });
      var iti = window.intlTelInputGlobals.getInstance(input);
      iti.setCountry("us");
      transcountry.change(function() {
         var c_code = jQuery(this).find(':selected').val();
         iti.setCountry(c_code);

      });

      input.addEventListener("countrychange", function() {
  // do something with iti.getSelectedCountryData()
      var change_val = iti.getSelectedCountryData();
      var selected_country = change_val.iso2;

         transcountry.val(selected_country);
      });
    }); 
