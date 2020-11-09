
var togglebutton = document.getElementsByClassName('toggle-button')[0];
var navbarlinks = document.getElementsByClassName('bar-links')[0];
togglebutton=addEventListener('click',() => {
navbarlinks.classList.toggle('active')
})
/*$(document).ready(function(){
    $('next').click(function(){
        $('.page').find('.pagenumber.active').next().addClass('active');
        $('.page').find('.pagenumber.active').prev().removeClass('active');

    })
    $('prev').click(function(){
        $('.page').find('.pagenumber.active').prev().addClass('active');
        $('.page').find('.pagenumber.active').next().removeClass('active');

})
})*/