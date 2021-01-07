// init controller
var controller = new ScrollMagic.Controller({
  // addIndicators: true
});

// create a scene
new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
	offset: 50 // start this scene after scrolling for 50px
})
	.setPin('#my-sticky-element') // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller

  var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('ended', function(data) {
      console.log("video has ended")
    // data is an object containing properties specific to that event
});
