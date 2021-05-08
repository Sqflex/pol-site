const modal = () => {
    const leftItems = document.querySelector('.left-items');
    const modalBlock = document.querySelector('.modal');
    const bodyBlock = document.querySelector('body');
    const modalSubtitle = document.querySelector('.modal__title');

    leftItems.addEventListener('click', (event) => {
        modalBlock.classList.add('open');
        modalSubtitle.textContent = event.target.textContent;
        console.log(event.target);
    })

    modalBlock.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('modal')) {
            modalBlock.classList.remove('open');
        }
        else if (target.classList.contains('modal__close')) {
            modalBlock.classList.remove('open');
        }
    })

    bodyBlock.addEventListener('keydown', (event) => {
        const target = event.key;
        if (target === "Escape") {
            modalBlock.classList.remove('open');
        }
    })
}

modal();

var mySwiper = new Swiper('.swiper-container', {
    speed: 1200,
    loop: true,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 1000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});