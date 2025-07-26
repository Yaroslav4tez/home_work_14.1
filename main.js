/*Пишемо свій слайдер зображень, який повинен:

1. Відображати зображення та кнопки Next, Prev з боків від зображення.
2. При кліку на Next - показуємо наступне зображення.
3. При кліку на Prev - попереднє
4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
5. Кількість слайдів може бути будь-якою
6. Додати можливість навігації через точки під слайдами*/
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prevButton');
    prevButton.style.display = 'none';
});


const myArrayFoto = ['Foto/Ancient-History-Roman-Rome-Caligula-Little-Boots.jpg', 
    'Foto/Caligula-2.jpg', 'Foto/Clockwork-Orange-34.webp', 'Foto/Humans-contakt.jpg',
     'Foto/orangutan-002.jpg', 'Foto/spaceOdyssey.jpg'];



const nextButton = document.getElementById('nextButton');

const dots = document.querySelectorAll('#dotsNav span');
const imgSrc = document.querySelector('img');


let count = 0;


function imgChange() {
    if (count === 0 || count < 0) {
        count = 0;
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline';
    }

    if (count >= myArrayFoto.length - 1) {
        count = myArrayFoto.length - 1;
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline';
    }
    
    
    imgSrc.src = myArrayFoto[count];
    
}



prevButton.addEventListener('click', function () {
    count--;
    imgChange();
    updateDots();
});


nextButton.addEventListener('click', function () {
    count++;
    imgChange();
    updateDots();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        count = index;
        imgChange();
        updateDots();
    });
});

function updateDots() {
    dots.forEach(dot => dot.classList.remove('dotActive'));
    dots[count].classList.add('dotActive');
}

