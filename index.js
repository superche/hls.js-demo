// Import stylesheets
import './style.css';

// Write Javascript code!
import Hls from 'hls.js';
import plyr from 'plyr';
var video = document.querySelector('#player');

if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource('https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
}

plyr.setup(video);
