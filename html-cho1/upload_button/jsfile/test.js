//初始按钮设置
// 获取 add_part 元素
var addPart = document.getElementById("add_part");

// 创建动态字符元素
var dynamicChar = document.querySelector("#add_part span");

// 监听 add_part 元素大小变化
var observer = new ResizeObserver(function (entries) {
  for (var entry of entries) {
    var height = entry.contentRect.height;
    // 根据阀值控制字符的显示和隐藏
    if (height < 30) {
      dynamicChar.style.display = "none"; // 小于阀值隐藏字符
    } else {
      dynamicChar.style.display = "block"; // 大于等于阀值显示字符
    }
  }
});
// 开始监听 add_part 元素
observer.observe(addPart);

// 图片数量设置
let max_num_img = 5;
let num_img = 0;

//选择图片和图片上传设置
function triggerFileInput() {
  document.getElementById('choose_img').click();
}

document.getElementById('choose_img').addEventListener('change', function() {
  uploadImage();
  // updateAddButton();
  // clearFileInput();
  // showSlides(slideIndex);
});

function uploadImage() {
  const fileInput = document.getElementById('choose_img');
  const files = fileInput.files;
  console.log(files);
  
  num_img += files.length;
  const ul = document.getElementById('imglists');
  ul.style.width = num_img * 600 + 'px';
  for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = function(e) {
          const li = document.createElement('li');
          const img = document.createElement('img');
          const back = document.createElement('div');
          const front = document.createElement('div');
          back.classList.add('back');
          let back_html = `
            <div id="background-image">
            </div>
            <div id="text-input">
              <input type="text" placeholder="输入文字" onclick="inputClick(event)">
            </div>
          `;
          back.innerHTML = back_html;
          front.classList.add('front');
          li.classList.add('list');
          li.classList.add('flip');
          li.addEventListener('click', function(){
            makeFlip(this);
          })
          img.src = e.target.result;
          // 让图片适配
          img.style.width = "100%";
          img.style.height = "auto";
          img.onload = function() {
            // 图片加载完成后再获取尺寸
            if(img.clientHeight > li.clientHeight){
              img.style.width = "auto";
              img.style.height = "100%";
            }
          }
          img.classList.add('list_img');
          front.appendChild(img);
          li.appendChild(front);
          li.appendChild(back);
          ul.appendChild(li);
          updateAddButton();
          updateLists();
          clearFileInput();
      }

      reader.readAsDataURL(file);
  }
}

function updateAddButton(){
  const add_button = document.getElementById('add_img_btn');
  const ratio = num_img / max_num_img;
  img_part.style.height = ratio * add_button.offsetHeight + 'px';
  // img_part.classList.add(animate);
  
}

function clearFileInput() {
  fileInput = document.getElementById('choose_img'); // 清空文件输入框中的内容
  fileInput.value = '';
}


//展示框设置
let left = 0;
let min_marginleft;
let max_marginleft;


function preList() {
  let imglist = document.getElementById('imglists');
  left += 600;
  if(left > 0){
    left = min_marginleft;
  }
  imglist.style.marginLeft = left + 'px';
}

function nextList() {
  let imglist = document.getElementById('imglists');
  left -= 600;
  if(left < min_marginleft){
    left = 0;
  }
  imglist.style.marginLeft = left + 'px';
}

function deleteList(){
  let lists_index = -left / 600;
  const ul = document.getElementById('imglists');
  const lists = document.getElementsByClassName("list");
  num_img--;
  if(num_img != 0) {
    //判断是中间一张还是末尾一张
    if(lists_index == num_img){
      lists[lists_index].remove();
      left += 600;
      ul.style.marginLeft = left + 'px';
    } else {
      lists[lists_index].remove();
    }
  } else {
    lists[lists_index].remove();
    toggleDisplay();
  }
  updateAddButton();
  updateLists();
}

function updateLists() {
  if(num_img != 0) {
    min_marginleft = (num_img - 1) * (-600); 
  } else {
    min_marginleft = 0;
  }
}


function makeFlip(element) {
  element.classList.toggle('flipped');
}

function inputClick(event){
  event.stopPropagation();
}

function toggleDisplay() {
    var displayBox = document.getElementById("display_box");
    var button = document.querySelector(".btn.add");
    
    displayBox.classList.toggle("show");
    button.classList.toggle("move");
}
