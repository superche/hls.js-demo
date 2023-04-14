// Import stylesheets
import './style.css';

// Write Javascript code!
import Hls from 'hls.js';
import Plyr from 'plyr';

const VIDEO_SOURCE = 'https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8';

function main() {
  const video = document.querySelector('#player');
  setupPlayer(video);
  setupHls();

  if (Hls.isSupported()) {
    loadHlsVideo(video);
    return;
  } else {
    loadBaseVideo(video);
  }
}

function setupPlayer(video) {
  const player = new Plyr(video, {
    captions: {
      active: true,
      update: true,
      language: 'en',
    },
  });
  window.player = player;
}

function setupHls() {
  window.hls = Hls;
}

function loadBaseVideo(video) {
  video.src = VIDEO_SOURCE;
}
function loadHlsVideo(video) {
  const hls = new Hls();
  hls.loadSource(VIDEO_SOURCE);
  hls.attachMedia(video);

  window?.player?.on('languagechange', () => {
    setTimeout(() => (hls.subtitleTrack = window.player.currentTract), 50);
  });
}

main();
