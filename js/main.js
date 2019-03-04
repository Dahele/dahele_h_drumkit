(() => {
	// hook up the 35 files
	
	console.log("fired! ready to jam out");

	function playDrumSound(e) {
		// e in round brackets is the event object =>
		// gets generated with every event and passes some data through
		//debugger;
		
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		//the returnkeyword stops javascript from runing  (any code below it)
		if(!audio) { return; }

		//paly the audio track
		audio.currentTime = 0;
		audio.play();

		
	}

	window.addEventListener('keydown', playDrumSound);
})();