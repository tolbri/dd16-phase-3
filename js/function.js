$.fn.followTo = function (pos) {
    var $this = this;
    var  $scrollHeight = $("#toolbox").prop("scrollHeight");
    var $scrollBottom = $("#toolbox").scrollTop() + $("#toolbox").height();
    $this.scroll(function (e) {
      console.log($("#toolbox").prop("scrollHeight") + " = " + $("#toolbox").scrollTop());
        if (562 == $("#toolbox").scrollTop()) {
            $("body").css({
                overflow:'scroll'
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#toolbox').followTo(0);

var testo_waypoints = $('.testo-waypoint').waypoint({
  handler: function(direction) {
				$("body").css("overflow", "hidden");
  }
})

var enablescrolling = $('#immagine').waypoint({
  handler: function(direction) {
    console.log("vai");
				$("body").css("overflow", "scroll");
  }
})

// Detects when element with class .video-waypoint
// reaches the top of the browser.
var waypoints = $('.video-waypoint').waypoint({
  handler: function(direction) {
				$("body").css("overflow", "hidden");
				startVideo(this.element.id.toString());
				this.destroy()
  }
})

// Starts to play a video with the given ID
function startVideo(video_id) {
	$("#" + video_id).trigger("play");
	console.log("Video ID: " + video_id + " is playing");
	};

// Adds event listeners to all videos to
// detect when they have finsihed to play.
$("video").each(function(index) {
	$(this).on("ended", function(e) {
		modal = $(this).next();
		$(this).toggleClass("hidden");
		modal.toggleClass("hidden");
		$("body").css("overflow", "auto");
	});
});

/* var stopscrolling = $('.stopscrolling').waypoint({
  handler: function(direction) {
    console.log("fermo");
				$(".container_diverso").css("overflow", "hidden");
  }
}) */
