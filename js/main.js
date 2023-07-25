var cards = document.querySelectorAll('.card');
var imgs = [
    [
        'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg',
        'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg'
    ],
    [
        'img/img11.jpg', 'img/img22.jpg', 'img/img33.webp', 'img/img44.jpg', 'img/img55.jpg', 'img/img66.jpg',
        'img/img11.jpg', 'img/img22.jpg', 'img/img33.webp', 'img/img44.jpg', 'img/img55.jpg', 'img/img66.jpg'
    ],
    [
        'img/img111.webp', 'img/img222.webp', 'img/img333.jpg', 'img/img444.jpg', 'img/img555.jpg', 'img/img666.jpg',
        'img/img111.webp', 'img/img222.webp', 'img/img333.jpg', 'img/img444.jpg', 'img/img555.jpg', 'img/img666.jpg',
    ],
    [
        'img/img1111.jpg', 'img/img2222.webp', 'img/img3333.webp', 'img/img4444.jpg', 'img/img5555.webp', 'img/img6666.webp',
        'img/img1111.jpg', 'img/img2222.webp', 'img/img3333.webp', 'img/img4444.jpg', 'img/img5555.webp', 'img/img6666.webp',
    ],
]
var randcol = Math.floor(Math.random() * 4);
cards.forEach((card, i) => {
    card.children[0].src = imgs[randcol][i];
});
cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * 12);
    card.classList.add('flip')
});

setTimeout(() => {
    cards.forEach((card) => {
        card.classList.remove('flip')
    })
}, 2000)
cards.forEach((card) => {
    card.addEventListener('click', flipcard);

})

var img1 = '',
    img2 = '';
var click = true;
var counter = 0;
var done = document.getElementById('done');

function flipcard() {
    if (this.classList.contains('flip') || !click) return;
    this.classList.add('flip');
    if (img1 === '') img1 = this;
    else if (img2 === '') img2 = this;
    var img11 = img1 ? img1.children[0].src : '';
    var img22 = img2 ? img2.children[0].src : '';
    // 
    if (img22 === img11) {
        ++counter;
        img1 = '', img2 = '';
    }
    // 
    else if (img22 !== '' && img11 !== '') {
        click = false;
        setTimeout(() => {
            img1.classList.remove('flip');
            img2.classList.remove('flip');
            img1 = '';
            img2 = '';
            click = true;
        }, 1000)
    }
    if (counter == 6) {
        done.style.display = 'flex';
    }
}


function cancel() {
    done.style.display = 'none';
}

function ok() {
    location.reload();
}