var exec = require('cordova/exec');

var cordovaVideoPlayernPlayer = function () {
    this.openPlayerForStreamURL = function (successCallback, errorCallBack, playerSeed, streamURL, subtitleURL, videoTitle) {
		exec(successCallback, errorCallBack, "MediaPlayerNplayer", "openPlayerForStreamURL", [playerSeed, streamURL, subtitleURL, videoTitle]);
	};

	this.didPlayfinished = function(data) {
		var playFinishEvent = new CustomEvent('nPlayerDidPlayFinished');
		playFinishEvent.playerData = { 'playerSeed': data.playerSeed, 'duration': data.duration, 'currentTime': data.lastPos, 'fileHash': data.fileHash };
		document.dispatchEvent(playFinishEvent);
	};
};

module.exports = new cordovaVideoPlayernPlayer();