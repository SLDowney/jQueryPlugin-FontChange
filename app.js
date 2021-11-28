"use strict";

const changeHeader = () => {
	let headerOption = $("#header").val();

	if ( headerOption == "1" ) {
		$("h1").css("font-family", "'Brush Script MT', Helvetica, sans-serif");
	}
	if ( headerOption == "2" ) {
		$("h1").css("font-family", "'Times New Roman', Times, serif");
	}
	if ( headerOption == "3" ) {
		$("h1").css("font-family", "'Curlz MT', Helvetica, sans-serif");
	}
} // end of change header font function

const changeParagraph = () => {
	let paragraphOptions = $("#paragraph").val();

	if ( paragraphOptions == "1" ) {
		$("p").css("font-family", "'Kunstler Script', Helvetica, sans-serif");
	}
	if ( paragraphOptions == "2" ) {
		$("p").css("font-family", "'Bookman Old Style', Times, serif");
	}
	if ( paragraphOptions == "3" ) {
		$("p").css("font-family", "'Bookshelf Symbol 7', Times, serif");
	}
} // end of change paragraph font function

$(document).ready(function() {
    $("#header").click( () => {
		changeHeader();
	}); 

	$("#paragraph").click( () => {
        changeParagraph();
	});

});