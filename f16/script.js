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
		$('.fullinfo').css({"display": "block"});
  	} else {
		$('.all-others').prop('checked', false);
		$('.fullinfo').css({"display": "none"});
	}
});
$('.all-others').change(function() {
    var getId = $(this).attr('id'); 
	$('#'+getId+'div').toggle();
});
/* Checkboxes */

/* localStorage */
var data = localStorage.getItem('my_data');
set_data = function() {
	localStorage.getItem("my_data");
  data = localStorage.setItem('my_data', 'whatever');
  // for testing
  alert(localStorage.getItem('my_data'));
}
delete_data = function() {
	data = localStorage.clear();
  // for testing
  alert(localStorage.getItem('my_data'));
}
// Retrieve
document.getElementById("demo").innerHTML = 
localStorage.getItem("my_data");
/* localStorage */
