
// 获取时间线容器
const timelineContainer = document.querySelector('.timeline');

// 根据文件路径数组动态创建时间线项目
let index = 0;
let position_flag = 0;


let poem = '"即使岁月蹉跎，记忆逐渐模糊,那些我们追逐过的梦，流连过的风景，都细细刻画在每一帧的照片里，那些岁月的点滴，都是最美的诗篇。"';
let poem_author = "&horbar;&horbar;&horbar;&horbar;&horbar;&horbar;&horbar;&horbar; GPT-4";


let image_arr = [
    "img/0.1.jpg",
    "img/0.2.jpg",
    "img/0.3.jpg",
    "img/0.4.jpg",
    "img/0.5.jpg",

    "img/1.1.jpg",
    "img/1.2.jpg",
    "img/1.3.jpg",
    "img/1.4.jpg",
    "img/1.5.jpg",
    "img/1.6.jpg",
    "img/1.7.jpg",
    "img/1.8.jpg",
    "img/2.1.jpg",
    "img/2.2.jpg",
    "img/2.3.jpg",
    "img/2.4.jpg",
    "img/2.5.jpg",
    "img/2.6.jpg",
    "img/2.7.jpg",
    "img/2.8.jpg",
    "img/3.1.jpg",
    "img/3.2.jpg",
    "img/3.3.jpg",
    "img/3.4.jpg",
    "img/3.5.jpg",
    "img/3.6.jpg",
    "img/3.7.jpg",
    "img/3.8.jpg",
    "img/beach.jpg",
];

let storedImageUrls = JSON.parse(localStorage.getItem('imgs_URL'));
let storedImageMsgs = JSON.parse(localStorage.getItem('imgs_msgs'));

if (storedImageUrls != null) {

    //用户自己的图片集合
    const timelineItem = document.createElement('div');

    timelineItem.classList.add('timeline-item');

    let imagesHTML = '';
    let imagelist = "";


    for (let i = 0; i < storedImageUrls.length; i++) {
        var str;
        let txt;

        str = storedImageUrls[i];
        txt = storedImageMsgs[i];

        if (position_flag % 2 === 0) {
            // 通过改变left值和z-index来创建堆叠效果
            imagesHTML += `<img class="stacked-photo" style="bottom: ${i * (13)}px ; left: ${i * (-30)}px; z-index: ${10 - i};" src="${str}"/>`;
        }
        else {
            // 通过改变left值和z-index来创建堆叠效果
            imagesHTML += `<img class="stacked-photo" style="bottom: ${i * (13)}px ; left: ${i * 30}px; z-index: ${10 - i};" src="${str}"/>`;
        }



        // imagesHTML += `<img class="stacked-photo" style="bottom: ${i * (13)}px ; left: ${i * (-30)}px; z-index: ${10 - i};" src="${str}"/>`;
        imagelist +=
            `<li class="imglist">
        <img src="${str}"  class= "detail_small_img"> 
        <p>${txt}</p>
    </li>`;
    }


    let img_date = JSON.parse(localStorage.getItem('img_date'));

    timelineItem.innerHTML = `
            <div class="timeline-photo">
                ${imagesHTML}

                <button class="timeline-cta">READ MORE</button>
            </div>
        <div class="timeline-headline">
            <p class="timeline-subtitle">${img_date}</p>
            <h2 class="timeline-title">Event ${6}</h2>
            <p class="timeline-excerpt"></p>
        </div>
        <div class="timeline-content">
            <p>${poem}</p>
            <p style = "text-align:right;"> ${poem_author}</p>
            <br>
            <br>
            <img/ style="width:100%;">
            <p style = "margin-top:100px; text-align: center;">集合所有图片</p>
        <ul id = "detail_picture_ul">
            ${imagelist}
        </ul>

        </div>
        
    `;

    // 将时间线项目添加到时间线容器中
    timelineContainer.appendChild(timelineItem);
    //更换向左或向右偏移展示标志
    position_flag^=1;
}


//后面5个随机生成的照片集
for (index = 5; index >= 1; index--) {

    const timelineItem = document.createElement('div');

    timelineItem.classList.add('timeline-item');

    let imagesHTML = '';
    let imagelist = '';

    //TODO随机展示图片复杂度有待提升
    let no_repeat_temp_arr = [];
    for (let imgIndex = 0; imgIndex < 5; imgIndex++) {

        let random;//随机数
        let random_img_index;//随机数组下标
        let str;//最终选择的图片
        let repeat_flag = 0;//是否重复标志

        do {
            repeat_flag = 0;
            random = Math.random();
            random_img_index = Math.floor(random * (image_arr.length));
            console.log(random_img_index);
            for (let i = 0; i < no_repeat_temp_arr.length; i++) {
                if (no_repeat_temp_arr[i] == random_img_index) {
                    repeat_flag = 1;
                    break;
                }
            }
        } while (repeat_flag);

        no_repeat_temp_arr.push(random_img_index);
        str = image_arr[random_img_index];


        if (position_flag % 2 === 0) {
            // 通过改变left值和z-index来创建堆叠效果
            imagesHTML += `<img class="stacked-photo" style="bottom: ${imgIndex * (13)}px ; left: ${imgIndex * (-30)}px; z-index: ${10 - imgIndex};" src="${str}"/>`;
        }
        else {
            // 通过改变left值和z-index来创建堆叠效果
            imagesHTML += `<img class="stacked-photo" style="bottom: ${imgIndex * (13)}px ; left: ${imgIndex * 30}px; z-index: ${10 - imgIndex};" src="${str}"/>`;
        }

        imagelist += `<li class="imglist" ><img  class= "detail_small_img" src="${str}" > </li>`

    }

    timelineItem.innerHTML = `
            <div class="timeline-photo">
                ${imagesHTML}
                <button class="timeline-cta">READ MORE</button>
            </div>
        <div class="timeline-headline">
            <p class="timeline-subtitle">${2015 + index}</p>
            <h2 class="timeline-title">Event ${index}</h2>
            <p class="timeline-excerpt"></p>
        </div>
        <div class="timeline-content">
            <p>${poem}</p>
            <p style = "text-align:right;"> ${poem_author}</p>
            <br>
            <br>
            <img/ style="width:100%" >


            <p style = "margin-top:100px; text-align: center;">集合所有图片</p>
            <ul id = "detail_picture_ul">
                ${imagelist}
            </ul>

        </div>
        `;


    // 将时间线项目添加到时间线容器中
    timelineContainer.appendChild(timelineItem);
    //更换向左或向右偏移展示标志
    position_flag ^= 1;
}


