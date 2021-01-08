





// var waypoint = new Waypoint({
//   element: document.getElementByIdClassName("video_1"),
//   handler: function() {
// 		$("body").css("overflow", "hidden");
// 		startVideo(this.element.id.toString());
// 		this.destroy()
//   }
// })

var waypoints = $('.video-waypoint').waypoint({
  handler: function(direction) {
				$("body").css("overflow", "hidden");
				startVideo(this.element.id.toString());
				this.destroy()
  }
})




function startVideo(video_id) {
	$("#" + video_id).trigger("play");
	console.log("Video: " + video_id + " is playing");
	};


$("video").each(function(index) {
	$(this).on("ended", function(e) {
		modal = $(this).next();
		$(this).toggleClass("hidden");
		modal.toggleClass("hidden");
		$("body").css("overflow", "auto");
	});
});
