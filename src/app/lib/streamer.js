(function (App) {
    'use strict';

    App.vent.on('stream:start', streamer.start.bind(streamer));
    App.vent.on('stream:stop', streamer.stop.bind(streamer));
    App.vent.on('stream:serve_subtitles', streamer.serveSubtitles.bind(streamer));

})(window.App);
