// 获取元素
let customimg = document.getElementById('customimg');
// let fileNames = document.getElementById('fileNames');
let fileInput = document.getElementById('myFile');

// 创建空数组来保存文件路径
//let filePaths = [];

// 当点击自定义按钮时，触发原生文件输入元素的点击事件
customimg.addEventListener('click', function() {
    fileInput.click();
});

// 当选择文件后，更新显示的文件名
// fileInput.addEventListener('change', function() {
//     let selectedFiles = fileInput.files;
//     let numberOfFilesSelected = selectedFiles.length; // 获取选择的文件数量
//     // 将选中的每个文件路径添加到数组中
//     const files = fileInput.files;
//     const img = document.createElement('img');
//     for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             img.src = e.target.result;
//         }
  
//         reader.readAsDataURL(file);
//     }

//     // for (let i = 0; i < selectedFiles.length; i++) {
//     //     // let fileURL = URL.createObjectURL(selectedFiles[i]);
//     //     // filePaths.push(fileURL); // 保存 Blob URL
//     //     // console.log(fileURL); // 打印 Blob URL 到控制台
//     //     // console.log(selectedFiles[0].filePaths)
//     // }
//     // // 更新显示的文件名
//     // let fileNamesText = '';
//     // for (let i = 0; i < selectedFiles.length; i++) {
//     //     fileNamesText += selectedFiles[i].name + '<br>'; // 显示文件名
//     // }
//     // fileNames.innerHTML = fileNamesText;
//     localStorage.setItem('numberOfFilesSelected', numberOfFilesSelected);
//     // 如果文件路径数组长度达到了设定的数量，执行页面跳转
//     if (numberOfFilesSelected >= 5) {
//         console.log(111111);
//         window.location.href = 'test.html'; // 替换成你要跳转的页面
//         //saveFilePathsAndRedirect();
//     }
// });
fileInput.addEventListener('change', function() {
    let selectedFiles = fileInput.files;
    let numberOfFilesSelected = selectedFiles.length; // 获取选择的文件数量
    let fileDataURLs = []; // 用于保存Base64编码的文件数据

    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const reader = new FileReader();
        reader.onload = function(e) {
            fileDataURLs.push(e.target.result); // 将Base64编码的数据添加到数组中
            if (fileDataURLs.length === numberOfFilesSelected) {
                // 当所有文件都被转换后，保存到localStorage
                localStorage.setItem('fileDataURLs', JSON.stringify(fileDataURLs));
            }
        };
        reader.readAsDataURL(file); // 开始读取文件内容
    }
        if (numberOfFilesSelected >= 5) {
        console.log(111111);
        window.location.href = 'test.html'; // 替换成你要跳转的页面
        //saveFilePathsAndRedirect();
    }
});
// 将文件路径保存到 localStorage 中并跳转到另一个页面
function saveFilePathsAndRedirect() {
    localStorage.setItem('filePaths', JSON.stringify(filePaths));
    window.location.href = 'test.html'; // 替换成你要跳转的页面
}
