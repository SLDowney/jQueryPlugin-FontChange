"use strict";

// Function to change Header Font
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

// Function to change Paragraph Font
const changeParagraph = () => {
	let paragraphOptions = $("#paragraph").val();

	if ( paragraphOptions == "1" ) {
		$("p").css("font-family", "'Kunstler Script', Helvetica, sans-serif");
        $("p").css("font-size", "225%");
    }
	if ( paragraphOptions == "2" ) {
		$("p").css("font-family", "'Bookman Old Style', Times, serif");
        $("p").css("font-size", "100%");
	}
	if ( paragraphOptions == "3" ) {
		$("p").css("font-family", "'Bookshelf Symbol 7', Times, serif");
        $("p").css("font-size", "125%");
	}
} // end of change paragraph font function

// Function to reset back to default settings
const reset = () => {
    $("#header").val("");
    $("#paragraph").val("");
    
    $("p").css("font-family", "Arial, Helvetica, sans-serif");
	$("p").css("font-size", "100%");

    $("h1").css("font-family", "'Arial', Helvetica, sans-serif");
	$("h1").css("font-size", "200%");
} // end of Reset function

$(document).ready(function() {
    $("#header").click( () => {
		changeHeader();
	}); 

	$("#paragraph").click( () => {
        changeParagraph();
	});

    $("#reset").click( () => {
        reset();
    })

});