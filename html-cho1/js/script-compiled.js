
let selectedItem,
  itemTL,
  overlayTL,
  scrollTL,
  isExpanded = false;
let originalPhotoSrc;


let select_img;//被mouseover选择的图片
let select_content;//被mouseover选择的图片所对应的文字描述


const timeline = document.querySelector(".timeline");
const items = document.querySelectorAll(".timeline-item");
const itemImages = document.querySelectorAll(".timeline-item > .timeline-photo");
const itemHeadlines = document.querySelectorAll(".timeline-item > .timeline-headline");
const overlay = document.querySelector(".timeline-overlay");
const backButton = document.querySelector(".timeline-back");

for (item of items) {
  const randomId = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
  item.setAttribute("data-timeline", randomId);

  const imageSrcs = [];
  var imgpath;
  item.addEventListener("click", e => {
    // 获取事件路径
    const path = e.composedPath();
    // 遍历事件路径
    for (let i = 0; i < path.length; i++) {
      // 检查当前元素是否是 img 元素
      const str = path[i].src;
      if (path[i].tagName === 'IMG') {
        // 打印被点击的图片的 src 属性
        console.log(path[i].src);
        imgpath = path[i].src;
        break;
      }
    }
  });

  item.addEventListener("click", e => {
    handleItemClick(randomId);
  });

  // item.addEventListener("mouseover", e => {
  //   if (!isExpanded && e.target.tagName === "IMG") {
  //     e.target.parentNode.children.length > 1 && TweenMax.fromTo(e.target.parentNode.children[1], 1, { opacity: 0, scaleX: 0.5, scaleY: 0.1, y: -70 }, { opacity: 1, scaleX: 1, scaleY: 1, y: -5, ease: Back.easeOut });
  //     TweenMax.to(e.target, 30, { scale: 1.5 });
  //     TweenMax.to(e.target.parentNode, 2.5, {
  //       boxShadow: "0 30px 70px rgba(0,0,0,.45)"
  //     });
  //   }
  // });

  // item.addEventListener("mouseout", e => {
  //   if (!isExpanded && e.target.tagName === "IMG") {
  //     e.target.parentNode.children.length > 1 && TweenMax.to(e.target.parentNode.children[1], 1, { opacity: 0, scaleX: 1, scaleY: 1, y: 100 });
  //     TweenMax.to(e.target, 1, { scale: 1 });
  //     TweenMax.to(e.target.parentNode, 1, {
  //       boxShadow: "0 10px 30px rgba(0,0,0,.2)"
  //     });
  //   }
  // });
  item.addEventListener("mouseover", e => {
    if (!isExpanded && e.target.tagName === "IMG") {
      TweenMax.to(e.target, 3, { scale: 1.2 });
      TweenMax.to(e.target.parentNode, 2.5, {
        boxShadow: "0 30px 70px rgba(0,0,0,.45)"
      });
    }
  });

  item.addEventListener("mouseout", e => {
    if (!isExpanded && e.target.tagName === "IMG") {
      TweenMax.to(e.target, 3, { scale: 1 });
      TweenMax.to(e.target.parentNode, 1, {
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      });
    }
  });
  item.addEventListener("mouseover", e => {
    if (!isExpanded && e.target.tagName === "IMG") {
      // 获取当前div中的所有图片
      const images = e.target.parentNode.querySelectorAll('img');
      select_img = e.target;//TODO真的能直接赋值吗


      // 遍历所有图片
      for (let img of images) {
        // 如果当前图片不是鼠标悬停的图片，将其透明度设置为0.5
        if (img !== e.target) {
          TweenMax.to(img, 0.08, { opacity: 0.08 });
        }
      }
      TweenMax.to(e.target, 3, { scale: 1.2 });
      TweenMax.to(e.target.parentNode, 2.5, {
        boxShadow: "0 30px 70px rgba(0,0,0,.45)"
      });
    }
  });

  item.addEventListener("mouseout", e => {
    if (!isExpanded && e.target.tagName === "IMG") {
      // 获取当前div中的所有图片
      const images = e.target.parentNode.querySelectorAll('img');
      // 遍历所有图片
      for (let img of images) {
        // 将所有图片的透明度恢复为1
        TweenMax.to(img, 0.5, { opacity: 1 });
      }
      TweenMax.to(e.target, 3, { scale: 1 });
      TweenMax.to(e.target.parentNode, 1, {
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"
      });
    }
  });

}


function handleItemClick(id, imgpath) {
  if (overlayTL !== undefined) {
    overlayTL.progress(0);
    overlayTL.pause();
  }
  if (!isExpanded) {
    isExpanded = true;
    const item = document.querySelector(`[data-timeline=${id}]`);
    const itemHeadline = item.querySelector(".timeline-headline");
    const itemSubTitle = item.querySelector(".timeline-subtitle");
    const itemContent = item.querySelector(".timeline-content");
    const itemPhoto = item.querySelector(".timeline-photo");
    const itemCTA = item.querySelector(".timeline-cta");
    const itemExcerpt = item.querySelector(".timeline-excerpt");
    const itemChildContents = document.querySelectorAll(`[data-timeline=${id}] .timeline-content > *`);
    const itemPhotoImg = itemPhoto.querySelector("img"); //document.querySelector('img[src="' + imgpath + '"]');
    const unSelectedItems = document.querySelectorAll(`[data-timeline]:not([data-timeline=${id}])`);
    const unSelectedChildItems = document.querySelectorAll(`[data-timeline]:not([data-timeline=${id}]) > *:not(.timeline-photo)`);
    const itemOffsetTop = item.getBoundingClientRect().y * -1;
    const prevButtons = item.querySelector(".timeline-prev");
    const nextButtons = item.querySelector(".timeline-next");
    selectedItem = item;

    const img = itemContent.querySelector('img');
    img.src = select_img.src; ////TODO

    //TweenMax.to(itemPhotoImg, 1, { scale: 1 });
    // 在handleItemClick函数开始时保存原始图片的src
    //originalPhotoSrc = itemPhoto.querySelector('img').src;
    TweenMax.to(itemCTA, .5, { opacity: 0 });
    TweenMax.to(itemPhotoImg, 1, { boxShadow: "0 10px 30px rgba(0,0,0, .2)" });


    for (_i of items) {
      _i.classList.remove("is-active");
    }

    timeline.classList.add("is-expanded");
    item.classList.add("is-active");
    backButton.classList.add("is-active");

    itemTL = new TimelineMax({ paused: false });

    itemTL.set(timeline, { maxWidth: 760 }).set(items, { clearProps: "all" }).set(itemSubTitle, { clearProps: "all" }).set(itemPhoto, { clearProps: "all" }).set(itemHeadline, { clearProps: "all" }).to(unSelectedChildItems, 0.3, { y: 40, opacity: 0 }).to(itemHeadline, 0.5, {
      opacity: 0,
      left: 0,
      top: "30vh",
      width: "100%",
      textAlign: "center"
    }, "-=.35").set(itemExcerpt, { display: "none" }).to(unSelectedItems, 0.2, { opacity: 0 }, "-=.35").add("itemExpand").to(timeline, 0.5, { maxWidth: "100%" }, "itemExpand").to(item, 0.8, { y: itemOffsetTop, width: "100%", height: "60vh" }, "itemExpand").to(itemHeadline, 1, { top: 0, height: "100vh", padding: 0 }, "-=.3").to(itemPhoto, 1, { borderRadius: 0, height: "100vh" }, "itemExpand").add("resize").to(itemHeadline, 1, {
      height: 100,
      opacity: 1,
      fontSize: "calc(.4vw + 10px)",
      backgroundColor: "rgba(45, 45, 45, 0.8)"
    }, "resize").to(itemPhoto, 1, { height: 100 }, "resize").set(itemPhoto, { height: 100, position: "fixed", top: 0 }).set(itemHeadline, { position: "fixed", top: 0 }).set(item, {
      y: 0,
      height: "100%",
      marginTop: 0,
      clearProps: "transform"
    }).set(unSelectedItems, { display: "none" }).set(timeline, { paddingBottom: 0 }).set(itemContent, { display: "block", top: 100 }).set(window, { scrollTo: { y: 0 } }).fromTo(itemContent, 0.4, { opacity: 0, y: 70 }, { opacity: 1, y: 0 }).staggerFromTo(itemChildContents, 0.7, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0.1, "-=.3");

    itemTL.set(window,{scrollTo:{y:200}});
    // // 左右按钮
    //  nextButtons.addEventListener('click', () => {
    //   console.log(111111)
    //   const newImageSrc = 'img/2.8.jpg'; // 新图片的路径
    //   itemPhotoImg.src = newImageSrc; // 更改图片的src属性
    // });
    // prevButtons.addEventListener('click', () => {
    //   console.log(111111)
    //   const newImageSrc = 'img/2.8.jpg'; // 新图片的路径
    //   itemPhotoImg.src = newImageSrc; // 更改图片的src属性
    // }); 
  }
}




backButton.addEventListener("click", () => {
  if (isExpanded) {
    timeline.classList.remove("is-expanded");
    selectedItem.classList.remove("is-active");
    backButton.classList.remove("is-active");
    overlayTL = new TimelineMax({
      paused: false,
      onComplete: () => {
        itemTL.progress(0);
        itemTL.pause();
        TweenMax.staggerFromTo(items, 0.9, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.04, () => {
          isExpanded = false;
        });
        TweenMax.set(itemHeadlines, { clearProps: "all" });
      }
    });
    if (originalPhotoSrc) {
      const itemPhoto = selectedItem.querySelector('.timeline-photo img');
      itemPhoto.src = originalPhotoSrc;
    }

    overlayTL.to(selectedItem, 0.3, { opacity: 0 }).to(overlay, 0.6, { height: "110vh", ease: Expo.easeOut }, "+=.2").to(overlay, 0.6, { height: 0, top: "100%", ease: Expo.easeOut });
  }
});

function cycleImages(item) {
  const images = item.querySelectorAll('.stacked-photo');
  let currentImageIndex = 0;

  // 确保所有图片最初都是可见的
  images.forEach(img => img.style.display = 'block');

  const photoInterval = setInterval(() => {
    // 隐藏当前显示的图片
    images.forEach(img => img.style.display = 'none');
    // 显示下一张图片
    images[currentImageIndex].style.display = 'block';
    // 计算下一张图片的索引
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 500); // 每0.5秒切换一次图片

  // 存储定时器，以便稍后清除
  item.photoInterval = photoInterval;
}


