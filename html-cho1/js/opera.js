// 获取所有图片元素
const images = document.querySelectorAll('.list img');

// 鼠标悬停在图片上的事件处理函数
function handleMouseEnter(event) {
  // 设置当前图片为背景
  document.body.style.backgroundImage = `url('${event.target.src}')`;

  // 为其他图片添加透明度类
  images.forEach(img => {
    if (img !== event.target) {
      img.classList.add('transparent');
    }
  });
}

// 鼠标离开图片的事件处理函数
function handleMouseLeave() {
  // 移除背景图片
  document.body.style.backgroundImage = '';

  // 移除所有图片的透明度类
  images.forEach(img => {
    img.classList.remove('transparent');
  });
}

// 为每张图片添加事件监听器
images.forEach(img => {
  img.addEventListener('mouseenter', handleMouseEnter);
  img.addEventListener('mouseleave', handleMouseLeave);
});
