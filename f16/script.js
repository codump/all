/* localStorage */
set_font_size = function(size) {
	localStorage.getItem("font_size");
  data = localStorage.setItem('font_size', size);
}
set_all_extra_info = function(extraInfoVal) {
	localStorage.getItem("all_extra_info");
  data = localStorage.setItem('all_extra_info', extraInfoVal);
}
// Retrieve
var fontSize = localStorage.getItem('font_size');
var allExtraInfo = localStorage.getItem('all_extra_info');
if(fontSize == null) {
  set_font_size(16);
} else {
  $("#textSlider").val(fontSize);
  $('body').css("font-size", fontSize + "px");
  $('#fontSize').text(fontSize);
}
if(allExtraInfo == null) {
  set_all_extra_info(true);
  $('#info-all').prop('checked', true);
} else {
  if(allExtraInfo == 'true') {
    $('#info-all').prop('checked', true);
  } else {
    $('#info-all').trigger('change');
    $('.all-others').prop('checked', false);
    $('.fullinfo').css({"display": "none"});
  }
}
/*alert(allExtraInfo);
document.getElementById("test").innerHTML = 
localStorage.getItem("all_extra_info");*/
/* localStorage */

/* Settings */
/* Fullscreen */
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
/* Fullscreen */
$("#textSlider").on("input",function () {
	$('body').css("font-size", $(this).val() + "px");
	$('#fontSize').text($(this).val());
  set_font_size($(this).val());
});
/* Settings */

/* Checkboxes */
$('.startlist').change(function() {
    var $this = $(this);
  	if ($this.prop('checked')) {
    	$("label[for='"+$this.attr("id")+"']").addClass("startlabelGreen");
  	} else {
		$("label[for='"+$this.attr("id")+"']").removeClass("startlabelGreen");
	}
});
$("#uncheckstart").on("click", function() {
	$('.startlist').prop('checked', false);
	$('.startlabel').removeClass("startlabelGreen");
});
$('#info-all').change(function() {
    var $this = $(this);
  	if ($this.prop('checked')) {
    	$('.all-others').prop('checked', true);
      set_all_extra_info(true);
		$('.fullinfo').css({"display": "block"});
  	} else {
		  $('.all-others').prop('checked', false);
		  $('.fullinfo').css({"display": "none"});
      set_all_extra_info(false);
	  }
});
$('.all-others').change(function() {
  var getId = $(this).attr('id'); 
	$('#'+getId+'div').toggle();
});
/* Checkboxes */
