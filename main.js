(function(){
  'use strict';

  var INTERVAL = 2000;
  var images=['slides/image1.jpg',
              'slides/image2.jpg',
              'slides/image3.jpg',
              'slides/image4.jpg',
              'slides/image5.jpg'];

  var current=0;
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var page = document.getElementById('page');
  var mainImage=document.getElementById('main_image');
  var parent= document.getElementById('thumbnails');
  var timer;

  // var thumbs = document.querySelectorAll('.thumbnail_image');
  // for (var i = 0; i < thumbs.length; i++){
  //   thumbs[i].addEventListener('click',function(){
  //     mainImage.src='slides/'+ this.dataset.image;// imgタグのsrc属性を書き換える
  //     current= this.dataset.index;//currentを書き換える
  //     displayPageNumber();
  //   })
  // }

　//サムネイルを表示
  function createThumbnails(){
    var li;
    var img;

    for (var i =0; i< images.length; i++){
      li = document.createElement('li');
      li.dataset.index= i;
      li.addEventListener('click',function(){
        parent.children[current].className=''; /*???なんやこれ */
        mainImage.src = this.children[0].src;
        current = this.dataset.index;
        this.className = 'current_image';
        clearTimeout(timer);
        displayPageNumber();
        playSlideshow();
      });

       if(i == 0){
         li.ClassName='current_image';
       }else{
         li.className='';
       }

      img =document.createElement('img');
      img.src= images[i];
      img.className='thumbnail_image';
      li.appendChild(img);
      parent.appendChild(li);



    }
  }

  //自動スライドショー
  function playSlideshow(){
    timer=setTimeout(function(){
      next.click();
    }, INTERVAL)
  }

  //ページ番号の表示
  function displayPageNumber(){
    page.textContent = (Number(current)+1) + '/' + images.length;
  }

  displayPageNumber();
  createThumbnails();
  playSlideshow();

  //戻るボタン
  prev.addEventListener('click',function(){
    parent.children[current].className = '';
    current--;
    if (current<0){
      current= images.length - 1;
    }

    mainImage.src=images[current];
    parent.children[current].className = 'current_image';
    clearTimeout(timer);
    displayPageNumber();
    playSlideshow();
  })

  //次へボタン
  next.addEventListener('click',function(){
    parent.children[current].className = '';
    current++;
    if (current> images.length -1){
      current= 0;
    }

    mainImage.src=images[current];
    parent.children[current].className = 'current_image';
    clearTimeout(timer);
    displayPageNumber();
    playSlideshow();
  })

})();
