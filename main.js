/*Пишемо свій слайдер зображень, який повинен:

1. Відображати зображення та кнопки Next, Prev з боків від зображення.
2. При кліку на Next - показуємо наступне зображення.
3. При кліку на Prev - попереднє
4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
5. Кількість слайдів може бути будь-якою
6. Додати можливість навігації через точки під слайдами*/

document.addEventListener('DOMContentLoaded', () => {
  prevButton.style.display = 'none';
});

const myArrayFoto = ['Foto/Ancient-History-Roman-Rome-Caligula-Little-Boots.jpg', 
    'Foto/Caligula-2.jpg', 'Foto/Clockwork-Orange-34.webp', 'Foto/Humans-contakt.jpg',
     'Foto/orangutan-002.jpg', 'Foto/spaceOdyssey.jpg'];



const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


const parentPrev = prevButton.parentNode;
const parentNext = nextButton.parentNode;

const fotoNaviDot = document.getElementById('fotoNaviDot');


const imgSrc = document.querySelector('img');

let count = 0;


function imgChange() {
    if (count === 0 || count < 0) {
        count = 0;
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline';
    }

    if (count >= myArrayFoto.length) {
        count = 5;
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline';
    }



    switch (count) {
        case 0:
            imgSrc.src = myArrayFoto[0];
            break;
        case 1:
            imgSrc.src = myArrayFoto[1];
            break;
        case 2:
            imgSrc.src = myArrayFoto[2];
            break;
        case 3:
            imgSrc.src = myArrayFoto[3];
            break;
        case 4:
            imgSrc.src = myArrayFoto[4];
            break;
        case 5:
            imgSrc.src = myArrayFoto[5];
            break;                        
        default:
            break;
    }
}

prevButton.addEventListener('click', function () {
    count--;
    imgChange();
});

nextButton.addEventListener('click', function () {
    count++;
    imgChange();
});