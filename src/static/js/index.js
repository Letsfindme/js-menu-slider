console.log('Js is ready');

let navBtn = document.querySelector('.slider-button');

navBtn.addEventListener('click', (evt) =>{
    console.log("looooooog");
    document.querySelector('.slider-me').classList.toggle('hideme');
} );

let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');
let slide = document.querySelectorAll('.slider-item');
document.querySelector('.app').classList.add('active');
console.log(prevBtn);
console.log(nextBtn);
console.log(slide);

var sliderLength = slide.length;
let counter = 0;
slide[counter].classList.add('active');

prevBtn.addEventListener('click', (evt) =>{
    f(counter - 1);
});

nextBtn.addEventListener('click',(evt) => {
    f(counter+1);
});
function f(n) {
    if (slide[counter].classList.contains('active')){
        slide[counter].classList.remove('active');
    }
    if (n < 0){
        n = 2;
    }
    if(n >= 3 ){
        n = 0;
    }
    counter = n;
    slide[counter].classList.add('active');
}