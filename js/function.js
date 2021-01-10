var block_flag = false;


$.fn.followTo = function (pos) {
    var $this = this;

    $this.scroll(function (e) {
        console.log("SCROLLHEIGHT: "+$("#toolbox").prop('scrollHeight'));
        console.log("SCROLLTOP: "+$("#toolbox").scrollTop());
        console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop()));
        console.log("HEIGHT: "+Math.round($("#toolbox").innerHeight()));
        if ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop() == Math.round($("#toolbox").innerHeight()) ) {
          block_flag=true
          $('#toolbox').css("overflow", "hidden");
            $('#toolbox').css("position", "static");
            $("body").css({
                overflow:'scroll'
            });
          }
    });
};


$('#toolbox').followTo(0);

var testo_waypoints = $('.testo-waypoint').waypoint({
  handler: function(direction) {
        if (block_flag==false) {
          $("body").css("overflow", "hidden");
          $('#toolbox').css("overflow", "scroll");
        }

  }
})

/*
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
		$(this).toggleClass("hidden");  //comment this to make the video stay
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
