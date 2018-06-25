var exec = require('cordova/exec');

var cordovaVideoPlayernPlayer = function () {
    this.openPlayerForStreamURL = function (successCallback, errorCallBack, playerSeed, streamURL, subtitleURL, videoTitle) {
		exec(successCallback, errorCallBack, "MediaPlayerNplayer", "openPlayerForStreamURL", [playerSeed, streamURL, subtitleURL, videoTitle]);
	};

	this.didPlayfinished = function(data) {
		console.log(data);

		console.log('playerSeed - ' + data.playerSeed);
		console.log('duration - ' + data.duration);

		var myevent = document.createEvent("HTMLEvents");
		myevent.initEvent("nPlayerDidPlayFinished", true, true);
		myevent.detail = 'hello!';
		document.dispatchEvent(myevent);
	};
};

module.exports = new cordovaVideoPlayernPlayer();