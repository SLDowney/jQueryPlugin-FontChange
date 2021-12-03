(function($) {
    $.fn.fontChanger = function(options) {
        let settings = $.extend({
            fontFamilyHeader: "'Bookshelf Symbol 7', Times, serif",
            fontFamilyPara: "'Arial', Helvetica, sans-serif",
            fontSize: "100%"
        }, options);
        
        // Iterating through each image Gallery 
        return this.each(function() {

            // Function to change Header Font
            const changeHeader = () => {
                console.log("change Header")

                if ( $("#header").val() == "" ) {
                    $("h1").css("font-family", settings.fontFamilyHeader);
                }
                if ( $("#header").val() == "1" ) {
                    $("h1").css("font-family", "'Brush Script MT', Helvetica, sans-serif");
                }
                if ( $("#header").val() == "2" ) {
                    $("h1").css("font-family", "'Times New Roman', Times, serif");
                }
                if ( $("#header").val() == "3" ) {
                    $("h1").css("font-family", "'Curlz MT', Helvetica, sans-serif");
                }
            } // end of change header font function
            
            // Function to change Paragraph Font
            const changeParagraph = () => {
                console.log("change Paragraph");
                if ( $("#paragraph").val() == "" ) {
                    console.log("value default");
                    $("p").css("font-family", settings.fontFamilyPara);
                    $("p").css("font-size", settings.fontSize)
                }
                if ( $("#paragraph").val() == "1" ) {
                    console.log("paragraph option 1");
                    $("p").css("font-family", "'Kunstler Script', Helvetica, sans-serif");
                    $("p").css("font-size", "225%");
                }
                if ( $("#paragraph").val() == "2" ) {
                    $("p").css("font-family", "'Bookman Old Style', Times, serif");
                    $("p").css("font-size", "100%");
                }
                if ( $("#paragraph").val() == "3" ) {
                    $("p").css("font-family", "'Bookshelf Symbol 7', Times, serif");
                    $("p").css("font-size", "125%");
                }
            } // end of change paragraph font function

            const reset = () => {
                console.log("reset");
                $(".options").val("");
                
                $("p").css("font-family", "Arial, Helvetica, sans-serif");
                $("p").css("font-size", "100%");
            
                $("h1").css("font-family", "'Arial', Helvetica, sans-serif");
                $("h1").css("font-size", "200%");
            } // end of Reset function

            const addHTML = () => {
                console.log("addHTML");
                $(".flex-container").append(
                    `<label id="options">Header Options:</label>
                    <select name="header_options" id="header" class="options">
                        <option value="" selected disabled hidden>Pick Me!</option>
                        <option value="1">Fancy!</option>
                        <option value="2">Serious (A.K.A. the "No Fun Zone")</option>
                        <option value="3">Child at Heart!</option>       		        		        		
                    </select><br>
                    <label id="options">Paragraph Options:</label>
                    <select name="paragraph_options" id="paragraph" class="options">
                        <option value="" selected disabled hidden>Choose Wisely!</option>
                        <option value="1">Handwritten Journal from the 1800s.</option>
                        <option value="2">Bland, but readable.</option>
                        <option value="3">Why? Because we can!</option>        		        		        		
                    </select><br></br>`
                );
            }

            const addCSS = () => {
                console.log("addCSS");
                $(".flex-container").css({
                    "display": "flex",
                    "justify-content": "center",
                    "font-family": "Arial, Helvetica, sans-serif",
                    "font-size": "100%",
                    "margin-top": "15px",
                    "margin-left": "20px",
                    "padding": "10px"
                });
                
                $("#options").css({
                    "padding": "0px 10px 0px 10px"
                });

                // $(".options").css({
                //     "padding": "10px 10px 0 10px"
                // });
                
                $("p").css({
                    "text-align": "justify",
                    "text-indent": "50px",
                    "font-family": settings.fontFamilyPara,
                    "width": "75%",
                    "margin": "25px 0 30px 10%"
                });

                $("h1").css({
                    "text-align": "center",
                    "font-family": settings.fontFamilyHeader,
                    "font-size": "200%",
                    "margin-top": "20px",
                    "padding": "10px"
                });
            }

            addHTML();
            addCSS();
            changeHeader();
            changeParagraph();
            reset();

            $("#header").click( () => {
                console.log("header click");
                changeHeader();
            }); 
        
            $("#paragraph").click( () => {
                console.log("paragraph click");
                changeParagraph();
            });
        
            $("#reset").click( () => {
                console.log("reset click");
                reset();
            })
        })
    }
} (jQuery));