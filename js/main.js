/*
Main JS file
*/

$(document).ready(function() {
	"use strict";

	//Hide the jsWarning because they obviously have javascript enabled
	$("#jsWarning").hide();

	// Get the assignment Id from the url (for Amazon Mechanical Turk)
	var assignmentId = gup("assignmentId");
	// Set the assignment Id in the html doc
	$("#assignmentId").val(assignmentId);

	// Get the worker ID from the URL
	var tId = gup("workerId");

	// noAssignmentId is a boolean as to whether or not there is an assignment Id
	var noAssignmentId = (!assignmentId || assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE");

	// If there isn't an assignmentId, we're previewing the HIT
	if (noAssignmentId) {
		// Display a helpful message that says we're previewing the HIT
		$("#warning").show();
	} else {
		// We're doing the HIT for real
		// Enable the submit button, the inputs, and the textarea
		$("#submitButton, input, textarea").prop("disabled",false);

		// Set the value of dataIndex in the HTML doc
		$("#dataIndex").val(gup("dataIndex"));
	}

	// Checks to see if the Sandbox mode flag is active
	if (gup("turkSubmitTo").indexOf("workersandbox") !== -1) {
		// Sandbox mode, change the submit to Sandbox submit
		$("#answerForm").attr("action","https://workersandbox.mturk.com/mturk/externalSubmit");
	}

	// Functionality for the HIDE/SHOW button
	var ashowText= 'SHOW';
	var ahideText = 'HIDE';
	var ais_visible = true;
	$(".instructionsHs").click(function () {
        ais_visible = !ais_visible;
        $(this).html((!ais_visible) ? ashowText : ahideText);
        $(this).closest('div').find('div.innerTopDiv').toggle('fast');
    });

    var bshowText= 'SHOW EXAMPLES';
	var bhideText = 'HIDE EXAMPLES';
	var bis_visible = false;
	$(".examplesHs").click(function () {
        bis_visible = !bis_visible;
        $(this).html((!bis_visible) ? bshowText : bhideText);
        $(this).closest('body').find('div#innerExamplesDiv').toggle('fast');
        $(this).closest('body').find('div#examplesDiv').toggle('fast');
    });
    $("#examplesDiv").click(function() {
    	// Click functionality for examples
    	bis_visible = !bis_visible;
    	$(".examplesHs").html((!bis_visible) ? bshowText : bhideText);
    	$(this).closest('body').find('div#innerExamplesDiv').toggle('fast');
    	$(this).closest('body').find('div#examplesDiv').toggle('fast');
    	// Now scroll to top of the page
		//window.scrollTo(0,0);
		$("html,body").animate({
			scrollTop: $("#0.question").offset().top-900
		},'fast')
    });

    function loadExamples() {
    	cats.forEach(function(cat) {
    		if(examples[cat] !== undefined) {
    			// If there exists an example for this category
    			var exampleLine = $("<div class='example-line'>").appendTo("#innerExamplesDiv").append("<p class='example-cat'>").html(catsText[cat]);
    			var exampleul = $("<ul>").appendTo(exampleLine);
    			examples[cat].forEach(function(example) {
    				$("<li class='example'>").html(example).appendTo(exampleul);
    			});
    		}
    	});
    }

    //Load the examples
    loadExamples();

    callLoadQuestions();

    function callLoadQuestions() {
    	var dataIndex = gup("dataIndex");
    	if(dataIndex !=="") {
    		$.ajax({
    			type: "GET",
    			url: "data/"+dataIndex,
    			dataType: "text"
    		}).done(function(responseData,textStatus,jqXHR) {
    			loadQuestions(responseData);
    		});
    	} else {
    		if (gup("debug") === "true") {
    			loadQuestions(DEBUG_QUESTIONS);
    		} else {
    			$.ajax({
    				type: "GET",
    				url: "data/"+1,
    				dataType: "text"
    			}).done(function(responseData,textStatus,jqXHR) {
    				loadQuestions(responseData);
    			});
    		}
    	}
    }


    function loadQuestions(rawQuestions) {
    	$("#innerQuestionsDiv").empty();
    	var qs = rawQuestions.split("||',");
    	for (var ind = 0; ind<qs.length; ind++) {
    		var query = qs[ind];
    		if(query.indexOf("Question") != -1) {
    			// Is a question
    			var question = $("<div class='question' id='"+ind+"'>")
    				.addClass("odd")
    				.append($("<div class='query'>").html(query))
    				.append($("</div></div>"))
    				.appendTo("#innerQuestionsDiv");

    			var indy = ind/2;


    			var gotoSpan = $("<span class='goto'>").text(indy);
    			gotoSpan.appendTo("#navBarInner"); 
    			gotoSpan.on("click", function() {
    				var val = parseInt($(this).text())*2;
    				var place = $("'#"+val+".question'");
    				$('html,body').animate({
    					scrollTop: place.offset().top-40
    				},'fast');
    			});


    		} else {
    			// Is a comment
    			var radios = createRadioButtons(ind);
    			var comment = $("<div class='question'>")
					.addClass("even") //highlights the comment box blue
					.append($("<div class='query'>").html(query)) //puts in the actual text
					.append($("<p class='pretext'>").text(_T.pretext))
					.append(radios)
					.append($("</div></div>"))
					.appendTo("#innerQuestionsDiv");

					radios.on("change","input[type='radio']",function() {
						//radios.find("p").removeClass("selected");
						$(this).closest(".choices").find("p").each(function(){
							$(this).removeClass("selected");
						});
						$(this).parent().addClass("selected");
						$(this).closest('div.choices').find(".other").hide();
						// Mark question # as completed
						var num = parseInt($(this).closest(".question").prev().attr("id"))/2;
						$("#navBarInner").children().each(function(){
							if($(this).text() == num) {
								$(this).addClass("done");
						}
						});
						$("#incompleteWarning").hide();
					});
    		}
    	}

    }

    function createRadioButtons(questionIndex) {
		var choices = $("<div class='choices'>"), name = "a"+questionIndex;
		cats.forEach(function(cat,catIndex) {
			var id = name + "c" + catIndex;
			choices.append("<label for='"+id+"'><p>" + 
				"<input type='radio' " +
				"name='"+name+"' " +
				"value='"+catIndex+"' "+
				"id='"+id+"' "+
				(noAssignmentId ? "disabled" : "") +
				"> <span class='cat'>" +
				catsText[cat] + "</span></p></label>");
		});
		choices.append($("<p class='other' style='display:none;'>")
			.append("<input type='text' " +
				"name='"+name+"other' >"));

		return choices;
	}



	// Submits form answers to AMT
	$("form").submit(function(e) {
		//Check whether all questions were answered
		var ok = true;
		$(".goto").each(function() {
			if (!$(this).hasClass("done")) {
				ok = false;
			}
		});

		if (!ok) {
			$("#incompleteWarning").show();
			return false;
		}
		$("#navBarInner").empty();
		$("navBarInner").append('Jump to question:');
		return true;
	});

	
});