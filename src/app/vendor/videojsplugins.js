var Button = videojs.getComponent('Button');
videojs.BiggerSubtitleButton = videojs.extend(Button, {
    /** @constructor */
    constructor: function (player, options) {
        Button.call(this, player, options);
        this.on('click', this.onClick);
    }
});

videojs.BiggerSubtitleButton.prototype.onClick = function () {
    var $subs = $('#video_player.video-js .vjs-text-track-display');
    var font_size = parseInt($subs.css('font-size'));
    font_size = font_size + 2;
    $subs.css('font-size', font_size + 'px');
};

var createBiggerSubtitleButton = function () {
    var props = {
        className: 'vjs_biggersub_button vjs-control',
        innerHTML: '<button class="vjs-control-content">A+</button>',
        tabIndex: 0
    };
    return videojs.dom.createEl(null, props);
};

var biggerSubtitle;
videojs.registerPlugin('biggerSubtitle', function () {
    this.on('loadeddata', function () {
        var options = {
            'el': createBiggerSubtitleButton()
        };
        biggerSubtitle = new videojs.BiggerSubtitleButton(this, options);
        this.controlBar.el().appendChild(biggerSubtitle.el());
    });
});

videojs.SmallerSubtitleButton = videojs.extend(Button, {
    /** @constructor */
    constructor: function (player, options) {
        Button.call(this, player, options);
        this.on('click', this.onClick);
    }
});

videojs.SmallerSubtitleButton.prototype.onClick = function () {
    var $subs = $('#video_player.video-js .vjs-text-track-display');
    var font_size = parseInt($subs.css('font-size'));
    font_size = font_size - 2;
    $subs.css('font-size', font_size + 'px');
};

var createSmallerSubtitleButton = function () {
    var props = {
        className: 'vjs_smallersub_button vjs-control',
        innerHTML: '<button class="vjs-control-content">A-</button>',
        tabIndex: 0
    };
    return videojs.dom.createEl(null, props);
};

var smallerSubtitle;
videojs.registerPlugin('smallerSubtitle', function () {
    this.on('loadeddata', function () {
        var options = {
            'el': createSmallerSubtitleButton()
        };
        smallerSubtitle = new videojs.SmallerSubtitleButton(this, options);
        this.controlBar.el().appendChild(smallerSubtitle.el());
    });
});


// Custom Subtitles Button/Menu
videojs.registerPlugin('customSubtitles', function () {
    this.on('loadeddata', function() {
      // Find subtitlesButton
      var subtitlesButton;
      this.controlBar.children().forEach(function (el) {
          if (el.name() === 'SubsCapsButton') {
              subtitlesButton = el;
          }
      });

      let track = null;
      let player_ = this.player_;
      var TextTrackMenuItem = videojs.getComponent('TextTrackMenuItem');
      var CustomTrackMenuItem = videojs.extend(TextTrackMenuItem, {
          /*@ Constructor */
          constructor: function (player, options) {
              options = options || {};
              // fake 'empty' track
              options['track'] = {
                  kind: function () {
                      return 'subtitles';
                  },
                  player: player,
                  label: function () {
                      return 'Custom';
                  },
                  dflt: function () {
                      return false;
                  },
                  mode: function () {
                      return false;
                  }
              };

              this.fileInput_ = $('<input type="file" accept=".vtt, .srt" style="display: none;">');
              $(this.el()).append(this.fileInput_);
              var that = this;

              App.vent.on('videojs:drop_sub', function () {
                  var subname = Settings.droppedSub;
                  var subpath = path.join(App.settings.tmpLocation, subname);
                  win.info('Subtitles dropped:', subname);
                  that.loadSubtitle(subpath);
              });

              this.fileInput_.on('change', function () {
                  that.player_.play();
                  if (this.value === '') {
                      return;
                  }
                  that.loadSubtitle(this.value);
                  this.value = null; //reset
              });

              TextTrackMenuItem.call(this, player, options);
          }
      });

      CustomTrackMenuItem.prototype.onClick = function () {
          this.player_.pause();
          this.fileInput_.trigger('click'); // redirect to fileInput click
      };

      CustomTrackMenuItem.prototype.handleClick = function (event) {
        this.player_.pause();
        this.fileInput_.trigger('click'); // redirect to fileInput click
      };

      CustomTrackMenuItem.prototype.loadSubtitle = function (filePath) {
        App.SubtitlesServer.start({
            vtt: filePath,
            srt: filePath,
            encoding: 'utf8'
        });
        track ? player_.removeRemoteTextTrack(track) : '';
        track = player_.addRemoteTextTrack({
          mode: 'showing',
          kind: 'subtitles',
          label : 'Custom',
          src: 'http://127.0.0.1:9999/subtitle.vtt'
        });
      };

      videojs.registerComponent('CustomTrackMenuItem', CustomTrackMenuItem);
      subtitlesButton.menu.addItem(new CustomTrackMenuItem(this));
      subtitlesButton.show(); // Always show subtitles button
    });
});
