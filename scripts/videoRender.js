import { Modal } from '@/scripts/modal.js';

import lightGallery from 'lightgallery';
// import 'lightgallery.css'
// import 'lightgallery/css/lightgallery.css'
// import 'lightgallery/css/lg-thumbnail.css'
// import 'lightgallery/css/lg-zoom.css'

import 'lightgallery/css/lg-video.css'
import lgVideo from "lightgallery/plugins/video";

// import lgThumbnail from 'lightgallery/plugins/thumbnail'
// import lgZoom from 'lightgallery/plugins/zoom'


function videoRender2(whereRenderVideoId, {
  previewFolder,
  nameImg,
  namePoster,
  videoLink,
  videoTitle
}) {

const whereRenderVideo = document.querySelector(whereRenderVideoId)
const numberPhotos = videoLink.length

for (let i = 1; i <= numberPhotos; i++) {
  if (!videoLink[i - 1]) {
    return
  }
  
  whereRenderVideo.insertAdjacentHTML('beforeend',`
  <a class="icon-play" href="${videoLink[i - 1]}" class="lg-video" data-poster="/img/video/data-poster/${namePoster}-${i}.jpg" data-lg-size="1280-720" itemscope itemtype="https://schema.org/VideoObject">
    <img src="${previewFolder}/${nameImg}-${i}.jpg" alt="${videoTitle[i - 1]}" itemprop="thumbnail">
    <meta itemprop="url" content="${videoLink[i - 1]}">
  </a>

  `)
  }
}

videoRender2('.how-build__video-box', {
  previewFolder: '/img/video',
  nameImg: 'video',
  posterFolder: '/img/video/data-poster',
  namePoster: 'poster',
  videoLink: [
    'https://www.youtube.com/watch?v=v3d8LVhqnzs',
    'https://youtu.be/PbQ5FtTT6uw?si=BxnHl7vaM30iRKgF',
    'https://youtu.be/DWnswAyVH_c',
    'https://youtu.be/mw9qqNgXLvQ',
    'https://youtu.be/tq5kgHJ9AJQ',
    'https://youtu.be/f6BSKwYkalA',
  ],
  videoTitle: [
    'Будівництво будинку - технологія ТЕРМОДІМ',
    'Будівництво будинку - технологія ТЕРМОДІМ',
    'Будуємо термодім - 1 частина',
    'Будуємо термодім - 2 частина',
    'Будуємо термодім - 3 частина',
    'Будуємо термодім - 4 частина',
  ]
})

document.addEventListener('DOMContentLoaded', function () {
  lightGallery(document.getElementById('lightgalleryVideo'), {
    plugins: [lgVideo],
    speed: 300,
    mousewheel: true,
    hideScrollbar: true,
    loop: false,
    sub: false,
    swipeToClose: true,
    showCloseIcon: true,
    escKey: true,
    download: false,
    mobileSettings: {
      controls: false,
    },
  });
});



