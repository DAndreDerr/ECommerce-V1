let i = 0;
const images = [];
const time = 2000;

images[0] = 'catches/catch1.webp';
images[1] = 'catches/catch2.webp';
images[2] = 'catches/catch3.webp';
images[3] = 'catches/catch4.webp';
images[4] = 'catches/catch5.webp';
images[5] = 'catches/catch6.webp';
images[6] = 'catches/catch7.webp';
images[7] = 'catches/catch8.webp';

function changeImg(){
    document.slide.src = images[i]

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;