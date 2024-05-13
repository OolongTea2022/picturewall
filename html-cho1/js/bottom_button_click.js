
bottom_button_click = ()=>{
    var body = document.getElementById('mybody');
    if (body.classList.contains('fade-in')){
        body.classList.replace('fade-in', 'fade-out');
    }
    setTimeout(() => {
        window.location.href = './upload_button/htmlfile/myweb.html';
    }, 1000);
    

}