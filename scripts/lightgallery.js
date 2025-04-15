import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

function galleryRender(whereRenderId, {
  linkImgId,
  title,
  namePhoto,
  pathFolder,
  nameMinFolder,
  numberPhotos
}) {
  const whereRenderSelector = document.getElementById(whereRenderId);
  
  whereRenderSelector.insertAdjacentHTML('beforeend',`
  <h2 class="title title-gallery lng-${linkImgId}">${title}</h2>
  <div id="${linkImgId}" class="gallery__folder-box">
  
  </div>
  `)

  const linkImgSelector = document.getElementById(linkImgId);
  for (let i = 1; i <= numberPhotos; i++) {
    linkImgSelector.insertAdjacentHTML('beforeend',`
    <a href="${pathFolder}/${namePhoto}-${i}.jpg" class="gallery__img-box" itemscope itemtype="http://schema.org/ImageObject">
      <img src="${pathFolder}/${nameMinFolder}/${namePhoto}-${i}_scale.jpg" alt="${namePhoto}-${i}.jpg" itemprop="thumbnail" />
      <meta itemprop="contentUrl" content="${pathFolder}/${namePhoto}-${i}.jpg">
    </a>
    `)
  }

  lightGallery(linkImgSelector, {
    plugins: [lgZoom, lgThumbnail],
    speed: 300,
    mousewheel: true,
    hideScrollbar: true,
    loop: false,
    sub: false,
    swipeToClose: true,
    showCloseIcon: true,
    escKey: true,
    mobileSettings: {
      controls: false,
    },
  });
  
}

galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder1', 
  title: 'Приватний будинок, с. Козин',
  namePhoto: 'kosin',
  pathFolder: '/img/gallery/Kosin-1',
  nameMinFolder: 'min',
  numberPhotos: 4
})
galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder2', 
  title: 'Ресторан "Козачок", с. Щасливе',
  pathFolder: '/img/gallery/Shchaslyve-2',
  namePhoto: 'shchaslyve',
  nameMinFolder: 'min',
  numberPhotos: 6
})
galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder3', 
  title: 'Приватний будинок. Київ, острів Водників',
  pathFolder: '/img/gallery/Vodnykiv-3',
  namePhoto: 'vodnykiv',
  nameMinFolder: 'min',
  numberPhotos: 6
})
galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder4', 
  title: 'Приватний будинок. Київська обл, Хлепча',
  pathFolder: '/img/gallery/Khlepcha-4',
  namePhoto: 'khlepcha',
  nameMinFolder: 'min',
  numberPhotos: 6
})
galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder5', 
  title: 'Готель в Яремче, 2700 м²',
  pathFolder: '/img/gallery/Yaremche-5',
  namePhoto: 'yaremche',
  nameMinFolder: 'min',
  numberPhotos: 6
})
galleryRender('galleryFolders', {
  linkImgId: 'galleryFolder6', 
  title: '«Клубний будинок», р-н. Голосієво, Київ',
  pathFolder: '/img/gallery/Klubnyy-budynok-6',
  namePhoto: 'klubnyy-budynok',
  nameMinFolder: 'min',
  numberPhotos: 6
})