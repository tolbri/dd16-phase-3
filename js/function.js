var block_flag2 = false;
console.log("HEIGHT: "+Math.round($("#container_diverso").innerHeight()));
      var altezza_padding = Math.round($("#container_diverso").innerHeight()) + "px";
      $('#toolbox').css("padding-top", altezza_padding);

$.fn.followTo = function (pos) {
    var $this = this;

    $this.scroll(function (e) {
        console.log("SCROLLHEIGHT: "+$("#intro2").prop('scrollHeight'));
        console.log("SCROLLTOP: "+$("#intro2").scrollTop());
        console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop()));
        console.log("HEIGHT: "+Math.round($("#intro2").innerHeight()));
        if ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop() == Math.round($("#intro2").innerHeight()) ) {
          block_flag2=true
          $('#intro2').css("overflow", "hidden");
            $('#intro2').css("position", "absolute");
            $("body").css({
                overflow:'scroll'
            });
          }
    });
};


$('#intro2').followTo(0);

var intro_waypoints = $('.intro_waypoint').waypoint({
  handler: function(direction) {
        if (block_flag2==false) {
          console.log("funziona");
          $("body").css("overflow", "hidden");
          $('#intro2').css("overflow", "scroll");
        }

  }
})

var block_flag = false;


$.fn.followTo = function (pos) {
    var $this = this;

    $this.scroll(function (e) {
      /*  console.log("SCROLLHEIGHT: "+$("#toolbox").prop('scrollHeight'));
        console.log("SCROLLTOP: "+$("#toolbox").scrollTop());
        console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop()));
        console.log("HEIGHT: "+Math.round($("#toolbox").innerHeight()));*/
        if ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop() == Math.round($("#toolbox").innerHeight()) ) {
          block_flag=true
          $('#toolbox').css("overflow", "hidden");
            $('#toolbox').css("position", "absolute");

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

// Detects when element with class .video-waypoint
// reaches the top of the browser.
var waypoints = $('.video-waypoint').waypoint({
  handler: function(direction) {
				// $("body").css("overflow", "hidden");  //comment or uncomment to enable scroll stop
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
		// $(this).toggleClass("hidden");
    //comment this to make the video stay
	//	modal.toggleClass("hidden");
		$("body").css("overflow", "auto");
	});
});


console.log("question 1 script is running!")
Promise.all([d3.html("./index.html"), d3.html("./assets/svg/infographic.svg")])
  .then(function([html, svgDocument]) {

    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#infographic");
    container.appendChild(svgNode);

    let squares = d3.selectAll("svg > #squares > g")

    squares.on("mouseover", function() {
      let color = d3.select(this).attr("data-color");
      d3.select(this).select("path").style("fill", color);
    })

    squares.on("mouseleave", function() {
      d3.select(this).select("path").style("fill", "#bdbdbd");
    })



})
