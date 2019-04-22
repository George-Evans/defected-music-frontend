$(document).ready(function($) {

    // Fading on Artist Images
	$(".shim").mouseenter( function() {
        $(this).children("img").addClass( "hover" );
		$(".artist-name", this).addClass( "visible" );
	}).mouseleave( function() {
        $(this).children("img").removeClass( "hover" );
		$(".artist-name", this).removeClass( "visible" );
	});

});