/**
 * @author
 */


/* This is an array of all our images in order. */

var images = ["drain_0m.png", "drain_1km.png", "drain_2km.png", "drain_3km.png",
 "drain_5km.png", "drain_50m.png", "drain_100m.png",
 "drain_200m.png", "drain_500m.png", "drain_ed.png", "drain_nl.png"];


/* index of the curent image in our images array. */


var index = 0;

/* set button events here */
function setNav() {
	console.log("setNav");

	$(".button").on("click", function() {
		
		var isNext = $(this).hasClass("next");
		
		if (isNext == true && index != (images.length - 1)) {
			index = index + 1;
		} else if (isNext == false && index > 0) {
			index = index - 1;
		}
		
		
	
		if ( index == 0) {
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length - 1)) {
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		}


		updateImage();
		});

}

/* change the image here */
function updateImage() {
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");

}

/* load the first image into our iamge holder. */

$(document).ready(function() {
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");
	$(".button.prev").addClass("disabled");
	setNav();
});

console.log(images);

