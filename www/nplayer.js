var exec = require('cordova/exec');

var cordovaVideoPlayernPlayer = function () {
    this.openPlayerForStreamURL = function (successCallback, errorCallBack, playerSeed, streamURL, subtitleURL, videoTitle) {
		exec(successCallback, errorCallBack, "MediaPlayerNplayer", "openPlayerForStreamURL", [playerSeed, streamURL, subtitleURL, videoTitle]);
	};

	this.didPlayfinished = function(data) {
		var playFinishEvent = new CustomEvent('nPlayerDidPlayFinished', { 'playerSeed': data.playerSeed, 'lastPos': data.duration });
		document.dispatchEvent(playFinishEvent);
	};
};

module.exports = new cordovaVideoPlayernPlayer();