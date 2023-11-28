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
