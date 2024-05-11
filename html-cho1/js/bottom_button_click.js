
bottom_button_click = ()=>{
    var body = document.getElementById('mybody');
    if (body.classList.contains('fade-in')){
        body.classList.replace('fade-in', 'fade-out');
    }
    setTimeout(() => {
        window.location.href = './upload_button/htmlfile/myweb.html';
    }, 1000);
    

}
// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.querySelector('.bottom_button');

//     button.addEventListener('click', function () {
//         var body = document.getElementById('mybody');
//         if (body.classList.contains('fade-in')){
//             body.classList.replace('fade-in', 'fade-out');
//         }
//         setTimeout(() => {
//             window.location.href = './upload_button/htmlfile/myweb.html';
//         }, 1000);
        
//     });
// });