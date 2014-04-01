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

	$(".button.next").on("click", function() {

		index = index + 1;

		updateImage();

		console.log("click!!");
	});
}

/* change the image here */
function updateIamge() {
	
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");

}

/* load the first image into our iamge holder. */

$(document).ready(function() {
	$(".image-holder").html("<img src='images/" + images[index] + "'/>");

	setNav();
});

console.log(images);

