document.addEventListener('DOMContentLoaded', function() {
    const rentButton = document.querySelector('.yellow-border-btn:nth-child(1)');
    const catButton = document.querySelector('.hero');
    const buyButton = document.querySelector('.yellow-border-btn:nth-child(2)');
    const categoryPopup = document.querySelector('.category-popup');
    const categoryPopupS = document.querySelector('.category-popup-sell');

    // Обработчик события для кнопки аренды
    rentButton.addEventListener('click', function() {
        if (!rentButton.classList.contains('active')) {
            rentButton.classList.add('active');
            catButton.classList.add('active');
            buyButton.classList.remove('active');
            gsap.to(categoryPopup, { duration: 0.3, opacity: 1, display: 'block' });
        } else {
            rentButton.classList.remove('active');
            catButton.classList.remove('active');
            gsap.to(categoryPopup, { duration: 0.3, opacity: 0, display: 'none' });
        }
    });

    // Обработчик события для кнопки покупки
    buyButton.addEventListener('click', function() {
        if (!buyButton.classList.contains('active')) {
            buyButton.classList.add('active');
            catButton.classList.add('active');
            rentButton.classList.remove('active');
            gsap.to(categoryPopup, { duration: 0.3, opacity: 0, display: 'none' }); // Плавное исчезновение списка аренды
            gsap.to(categoryPopupS, { duration: 0.3, opacity: 1, display: 'block' }); // Плавное появление списка покупки
        } else {
            buyButton.classList.remove('active');
            catButton.classList.remove('active');
            gsap.to(categoryPopupS, { duration: 0.3, opacity: 0, display: 'none' }); // Плавное исчезновение списка покупки
        }
    });

    // Закрытие модального окна при клике вне его области или при клике на крестик
    document.addEventListener('click', function(event) {
        if (!categoryPopup.contains(event.target) && event.target !== rentButton) {
            gsap.to(categoryPopup, { duration: 0.3, opacity: 0, display: 'none' }); // Плавное исчезновение модального окна
        }
    });

    document.addEventListener('click', function(event) {
        if (!categoryPopupS.contains(event.target) && event.target !== buyButton) {
            gsap.to(categoryPopupS, { duration: 0.3, opacity: 0, display: 'none' }); // Плавное исчезновение модального окна списка покупки
        }
    });
});

