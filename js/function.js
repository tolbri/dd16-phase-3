
gsap.registerPlugin(ScrollTrigger)
let debug = true;

let container = document.getElementById("horizontal-scroll");

if (container) {
  gsap.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",

    scrollTrigger: {
      markers: debug, // Easaly remove markers for production
      start: "center center",
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: true,
      anticipatePin: 1, // can help avoid flash
      end: () => "+=" + container.offsetWidth
    }
  })
}


let yellowStar = document.getElementById("yellowZoom");
if (yellowStar) {
  const yellowTimeline = gsap.timeline({
    scrollTrigger: {
      markers: debug,
      trigger: yellowStar, // What element triggers the scroll
      scrub: true, // Add a small delay of scrolling and animation. `true` is direct
      start: "center center", // Start at top of Trigger and at the top of the viewport
      pin: true, // Pin the element true or false
      end: () => "+=" + yellowStar.offsetWidth
    }
  });

  yellowTimeline
    .to("#yellowZoomImg", {
      scale: 5
    })
}

let blueStar = document.getElementById("blueZoom");
if (blueStar) {
  const blueTimeline = gsap.timeline({
    scrollTrigger: {
      markers: debug,
      trigger: blueStar, // What element triggers the scroll
      scrub: true, // Add a small delay of scrolling and animation. `true` is direct
      start: "center center", // Start at top of Trigger and at the top of the viewport
      pin: true, // Pin the element true or false
      end: () => "+=" + blueStar.offsetWidth
    }
  });

  blueTimeline
    .to("#blueZoomImg", {
      scale: 5
    })
}


let greenStar = document.getElementById("greenZoom");
if (greenStar) {
  const greenTimeline = gsap.timeline({
    scrollTrigger: {
      markers: debug,
      trigger: greenStar, // What element triggers the scroll
      scrub: true, // Add a small delay of scrolling and animation. `true` is direct
      start: "center center", // Start at top of Trigger and at the top of the viewport
      pin: true, // Pin the element true or false
      end: () => "+=" + greenStar.offsetWidth
    }
  });

  greenTimeline
    .to("#greenZoomImg", {
      scale: 5
    })
}

// const ending = document.getElementById("end");
// if (ending) {
gsap.utils.toArray(".panel").forEach((panel, i) => {
  const id = panel.getAttribute('data-ending');
  const ending = document.getElementById(id);
  const pinTimeline = gsap.timeline({
    scrollTrigger: {
      markers: debug,
      trigger: panel, // What element triggers the scroll
      scrub: true, // Add a small delay of scrolling and animation. `true` is direct
      start: "center center", // Start at top of Trigger and at the top of the viewport
      pin: true, // Pin the element true or false
      pinSpacing: false,
      endTrigger: ending,
      end: "top bottom"
    }
  });
});
// }



gsap.utils.toArray(".colorChange").forEach(function(elem) {

  let defaultBgColor = elem.getAttribute('data-default-bg-color');
  let defaultTextColor = elem.getAttribute('data-default-text-color');
  let bgColor = elem.getAttribute('data-bg-color');
  let textColor = elem.getAttribute('data-text-color');

  ScrollTrigger.create({
    trigger: elem,
    start: 'top top',
    end: 'bottom -100',
    onEnter: () => gsap.to(elem, {
      backgroundColor: bgColor,
      color: textColor
    }),
    onLeave: () => gsap.to(elem, {
      backgroundColor: defaultBgColor,
      color: defaultTextColor
    }),
    onLeaveBack: () => gsap.to(elem, {
      backgroundColor: defaultBgColor,
      color: defaultTextColor
    }),
    onEnterBack: () => gsap.to(elem, {
      backgroundColor: bgColor,
      color: textColor
    }),
    markers: debug
  });

});

var block_flag2 = false;


$.fn.followTo = function (pos) {
    var $this = this;

    $this.scroll(function (e) {
      /*  console.log("SCROLLHEIGHT: "+$("#intro2").prop('scrollHeight'));
        console.log("SCROLLTOP: "+$("#intro2").scrollTop());
        console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop()));
        console.log("HEIGHT: "+Math.round($("#intro2").innerHeight())); */
        if ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop() == Math.round($("#intro2").innerHeight()) ) {
          block_flag2=true;
          $('#intro2').css("overflow-y", "hidden");
            $('#intro2').css("position", "absolute");
            $("body").css("overflow-y", "scroll");
            block_flag.destroy();
          }
    });
};


$('#intro2').followTo(0);

var intro_waypoints = $('.intro_waypoint').waypoint({
  handler: function(direction) {
        if (block_flag2==false) {
          console.log("intro");
          $("body").css("overflow", "hidden");
          $('#intro2').css("overflow-y", "scroll");
        }

  }
})



// const modal = document.querySelector('.modal');
//
// const showModal = document.querySelector('.show-modal');
// const closeModal = document.querySelectorAll('.close-modal');
//
// showModal.addEventListener('click', function() {
//   modal.classList.remove('hidden')
// });
//
// closeModal.forEach(close => {
//   close.addEventListener('click', function() {
//     modal.classList.add('hidden')
//   });
// });

//other floating animation version//

/*function RandomObjectMover(obj, container) {
	this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 250;
  this.current_position = { x: 0, y: 0 };
  this.is_running = false;
}

// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
	this.pixels_per_second = pxPerSec;
}

RandomObjectMover.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
}

RandomObjectMover.prototype._generateNewPosition = function() {

	// Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
	var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;

  // Pick a random place in the space
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);

  return { x: x, y: y };
}

RandomObjectMover.prototype._calcDelta = function(a, b) {
	var dx   = a.x - b.x;
  var dy   = a.y - b.y;
  var dist = Math.sqrt( dx*dx + dy*dy );
  return dist;
}

RandomObjectMover.prototype._moveOnce = function() {
		// Pick a new spot on the page
    var next = this._generateNewPosition();

    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);

		// Speed of this transition, rounded to 2DP
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;

    //console.log(this.current_position, next, delta, speed);

    this.$object.style.transition='transform '+speed+'s linear';
    this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';

    // Save this new position ready for the next call.
    this.current_position = next;

};

RandomObjectMover.prototype.start = function() {

	if (this.is_running) {
  	return;
  }

	// Make sure our object has the right css set
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';

  this.boundEvent = this._moveOnce.bind(this)

  // Bind callback to keep things moving
  this.$object.addEventListener('transitionend', this.boundEvent);

  // Start it moving
  this._moveOnce();

  this.is_running = true;
}

RandomObjectMover.prototype.stop = function() {

	if (!this.is_running) {
  	return;
  }

  this.$object.removeEventListener('transitionend', this.boundEvent);

	this.is_running = false;
}


// Init it
var x = new RandomObjectMover(document.getElementById('a'), window);



x.start();
$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] },3000,  function(){
      animateDiv(myclass);
    });

};

function collision($a, $b) {
    var x1 = $a.offset().left;
    var y1 = $a.offset().top;
    var x2 = $b.offset().left;
    var y2 = $b.offset().top;
    if ((y1 + $a.outerHeight(true)) < y2 ||
        y1 > (y2 + $b.outerHeight(true)) ||
        (x1 + $a.outerWidth(true)) < x2  ||
        x1 > (x2 + $b.outerWidth(true)))
        return false;
    return true;
}






// OLD CODE BELOW

// var block_flag2 = false;
//
//
// $.fn.followTo = function (pos) {
//     var $this = this;
//
//     $this.scroll(function (e) {
//       /*  console.log("SCROLLHEIGHT: "+$("#intro2").prop('scrollHeight'));
//         console.log("SCROLLTOP: "+$("#intro2").scrollTop());
//         console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop()));
//         console.log("HEIGHT: "+Math.round($("#intro2").innerHeight())); */
//         if ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop() == Math.round($("#intro2").innerHeight()) ) {
//           block_flag2=true;
//           $('#intro2').css("overflow", "hidden");
//             $('#intro2').css("position", "absolute");
//             $("body").css("overflow", "scroll");
//             block_flag.destroy();
//           }
//     });
// };
//
//
// $('#intro2').followTo(0);
//
// var intro_waypoints = $('.intro_waypoint').waypoint({
//   handler: function(direction) {
//         if (block_flag2==false) {
//           console.log("intro");
//           $("body").css("overflow", "hidden");
//           $('#intro2').css("overflow", "scroll");
//         }
//
//   }
// })
//
// var block_flag = false;
//
//
// $.fn.followTo = function (pos) {
//     var $this = this;
//
//     $this.scroll(function (e) {
//         console.log(block_flag);
//         console.log("SCROLLHEIGHT: "+$("#toolbox").prop('scrollHeight'));
//         console.log("SCROLLTOP: "+$("#toolbox").scrollTop());
//         console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop()));
//         console.log("HEIGHT: "+Math.round($("#toolbox").innerHeight()));
//         if ($("#toolbox").prop('scrollHeight') - $("#toolbox").scrollTop() == Math.round($("#toolbox").innerHeight()) ) {
//           block_flag=true;
//           $('#toolbox').css("overflow", "hidden");
//             $('#toolbox').css("position", "absolute");
//             $("body").css("overflow", "scroll");
//             block_flag2.destroy();
//           }
//     });
// };
//
//
// $('#toolbox').followTo(0);
//
// var testo_waypoints = $('.testo-waypoint').waypoint({
//   handler: function(direction) {
//         if (block_flag==false) {
//           console.log(block_flag);
//           console.log("testo");
//           $("body").css("overflow", "hidden");
//           $('#toolbox').css("overflow", "scroll");
//         }
//
//   }
// })
//
// // Detects when element with class .video-waypoint
// // reaches the top of the browser.
// var waypoints = $('.video-waypoint').waypoint({
//   handler: function(direction) {
// 				// $("body").css("overflow", "hidden");  //comment or uncomment to enable scroll stop
// 			//	startVideo(this.element.id.toString());
// 				this.destroy()
//   }
// })
//
// // Starts to play a video with the given ID
// function startVideo(video_id) {
// 	// $("#" + video_id).trigger("play");
// 	console.log("Video ID: " + video_id + " is playing");
// 	};
//
// // Adds event listeners to all videos to
// // detect when they have finsihed to play.
// $("video").each(function(index) {
// 	$(this).on("ended", function(e) {
// 		modal = $(this).next();
// 		// $(this).toggleClass("hidden");
//     //comment this to make the video stay
// 	//	modal.toggleClass("hidden");
// 		$("body").css("overflow", "scroll");
// 	});
// });
//
//
// console.log("question 1 script is running!")
// Promise.all([d3.html("./index.html"), d3.html("./assets/svg/infographic.svg")])
//   .then(function([html, svgDocument]) {
//
//     let svgNode = svgDocument.querySelector("svg");
//     let container = document.querySelector("#infographic");
//     container.appendChild(svgNode);
//
//     let squares = d3.selectAll("svg > #squares > g")
//
//     squares.on("mouseover", function() {
//       // check if the user is on the left or right
//       // side of the screen. Then put the image
//       // on the opposite site.
//         if (event.pageX > d3.select("body").node().getBoundingClientRect().width / 2) {
//           d3.select("#gif")
//             .classed("left-1/4", true)
//             .classed("right-1/4", false);
//         } else {
//           d3.select("#gif")
//             .classed("right-1/4", true)
//             .classed("left-1/4", false);
//         }
//
//       // get the ID of each square = name of conspiracy
//       let id = d3.select(this).attr("id");
//       // insert the ID into the image path
//       let path = "./assets/img/gifs/" + id + ".gif";
//       d3.select("#gif > img").attr("src", path);
//       console.log("Image loads from: " + path);
//       // make the image visible
//       d3.select("#gif").classed("hidden", false);
//
//       // lower the opacity of all squares except of the
//       // one in use. Then apply a colore fill
//       d3.selectAll("svg > #squares > g")
//         .style("opacity", "0.3");
//       d3.select(this).style("opacity", "1");
//       d3.select(this).select("path")
//         .style("fill", "#FD3C3E");
//     })
//
//     squares.on("mouseleave", function() {
//       // reset changes when mouse leaves
//       d3.select("#gif").classed("hidden", true);
//       d3.selectAll("svg > #squares > g")
//         .style("opacity", "1");
//       d3.select(this).select("path")
//         .style("opacity", "1")
//         .style("fill", "#bdbdbd");
//     })
// })
