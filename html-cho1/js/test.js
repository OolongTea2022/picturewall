// 在另一个页面中获取保存的文件路径数组
// let filePaths = JSON.parse(localStorage.getItem('filePaths'));
//let numberOfFilesSelected = localStorage.getItem('numberOfFilesSelected');

// 获取时间线容器
const timelineContainer = document.querySelector('.timeline');

// 根据文件路径数组动态创建时间线项目
let index = 0;



for (index = 0; index < 5; index++) {
    // 创建时间线项目的 div 元素
    // const timelineItem = document.createElement('div');
    // timelineItem.classList.add('timeline-item');
    // //console.log(path)
    // // 设置时间线项目的内容
    // timelineItem.innerHTML = `
    //     <div class="timeline-photo">
    //         <img style="left: 0px;z-index: 10;" src="img/0.1.jpg"/>
    //         <img style="left: 26px;z-index: 9;" src="img/0.1.jpg"/>
	// 		<img style="left: 52px;z-index: 8;" src="img/0.1.jpg"/>
	// 		<img style="left: 78px;z-index: 7;" src="img/0.1.jpg"/>
	// 		<img style="left: 104px;z-index:6;"src="img/0.1.jpg"/>
    //         <button class="timeline-cta">READ MORE</button>
    //     </div>

    const timelineItem = document.createElement('div');

    timelineItem.classList.add('timeline-item');

        // 根据索引奇偶性为项目添加类
    if (index % 2 === 0) {
        timelineItem.classList.add('timeline-item-left');
    } else {
        timelineItem.classList.add('timeline-item-right');
    }
        let imagesHTML = '';
        let imagelist = '';

        for (let imgIndex = 0; imgIndex < 5; imgIndex++) {
            var str;
            
            if(imgIndex%2===0)
            {
                    str="img/2.3.jpg";
            }
            else if(imgIndex%3===0)
            {
                str="img/1.4.jpg";
            }
            else
            {
                str="img/2.2.jpg"
            }
            if(index%2===0)
                {
                    // 通过改变left值和z-index来创建堆叠效果
                    imagesHTML += `<img class="stacked-photo" style="left: ${imgIndex * (-26)}px; z-index: ${10 - imgIndex};" src="${str}"/>`;
                }
            else{
                // 通过改变left值和z-index来创建堆叠效果
                imagesHTML += `<img class="stacked-photo" style="left: ${imgIndex * 26}px; z-index: ${10 - imgIndex};" src="${str}"/>`;
            }

            imagelist+=`<li class="imglist" ><img style="width: 100%;" src="${str}" > </li>`
            
        }
    

        timelineItem.innerHTML = `
            <div class="timeline-photo">
                ${imagesHTML}
                <button class="timeline-cta">READ MORE</button>
            </div>
        <div class="timeline-headline">
            <p class="timeline-subtitle">2019</p>
            <h2 class="timeline-title">Event ${index + 1}</h2>
            <p class="timeline-excerpt">Description of event ${index + 1}</p>
        </div>
        <div class="timeline-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta officiis culpa dolor fugiat facilis dolorum atque, eum explicabo at iste iure, repellendus distinctio aliquam praesentium consequuntur. In, quaerat doloribus!</p>
            <p>Content of event ${index + 1}</p>
            <img/ style="width:100%;">
            <p style = "text-align: center;">其他图片</p>
            <ul id = "detail_picture_ul">
                ${imagelist}
            </ul>

        </div>
        
    `;

    // <img/ style="width:100%;height:100%">

    // 将时间线项目添加到时间线容器中
    timelineContainer.appendChild(timelineItem);
}

//TODO
//用户自己的图片集合

const timelineItem = document.createElement('div');

timelineItem.classList.add('timeline-item');

timelineItem.classList.add('timeline-item-right');

let imagesHTML = '';
let imagelist = "";

let storedImageUrls = JSON.parse(localStorage.getItem('imgs_URL'));
let storedImageMsgs = JSON.parse(localStorage.getItem('imgs_msgs'));

console.log(storedImageUrls);
console.log(localStorage.length);

for(let i = 0;i<storedImageUrls.length;i++){
    var str;
    let txt;

    str = storedImageUrls[i];
    txt = storedImageMsgs[i];

    imagesHTML += `<img class="stacked-photo" style="left: ${i * 26}px; z-index: ${10 - i};" src="${str}"/>`;
    imagelist += `<li class="imglist">
    
    
    <img src="${str}" style="width:100%;"> 
    <p>${txt}</p>
    </li>`;
}

timelineItem.innerHTML = `
            <div class="timeline-photo">
                ${imagesHTML}

                <button class="timeline-cta">READ MORE</button>
            </div>
        <div class="timeline-headline">
            <p class="timeline-subtitle">2019</p>
            <h2 class="timeline-title">Event ${100}</h2>
            <p class="timeline-excerpt">Description of event ${100}</p>
        </div>
        <div class="timeline-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta officiis culpa dolor fugiat facilis dolorum atque, eum explicabo at iste iure, repellendus distinctio aliquam praesentium consequuntur. In, quaerat doloribus!</p>
            <p>Content of event ${100}</p>
            <img/ style="width:100%;">

        <ul id = "detail_picture_ul">
            ${imagelist}
        </ul>

        </div>
        
    `;

    // 将时间线项目添加到时间线容器中
    timelineContainer.appendChild(timelineItem);



//从localStorage获取Base64编码的图片文件数据
// let fileDataURLs = JSON.parse(localStorage.getItem('fileDataURLs'));

// if (fileDataURLs) {
//     const timelineContainer = document.querySelector('.timeline');

//     fileDataURLs.forEach((dataURL, index) => {
//         // 创建时间线项目的 div 元素
//         const timelineItem = document.createElement('div');
//         timelineItem.classList.add('timeline-item');

//         // 设置时间线项目的内容，使用Base64编码的图片数据作为图片源
//         timelineItem.innerHTML = `
//             <div class="timeline-photo">
//                 <img src="${dataURL}" />
                                
//                 <button class="timeline-cta">READ MORE</button>
//             </div>
//             <div class="timeline-headline">
//                 <p class="timeline-subtitle">Year</p>
//                 <h2 class="timeline-title">Event ${index + 1}</h2>
//                 <p class="timeline-excerpt">Description of event ${index + 1}</p>
//             </div>
//             <div class="timeline-content">
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta officiis culpa dolor fugiat facilis dolorum atque, eum explicabo at iste iure, repellendus distinctio aliquam praesentium consequuntur. In, quaerat doloribus!</p>
//                 <p>Content of event ${index + 1}</p>
//             </div>
//         `;

//         // 将时间线项目添加到时间线容器中
//         timelineContainer.appendChild(timelineItem);
//     });
// }
