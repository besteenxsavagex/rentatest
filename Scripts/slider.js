document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        // Плавно уменьшаем размер и уменьшаем радиус предыдущего слайда
        gsap.to(slides[currentIndex], { duration: 1, scale: 0.1, borderRadius: '100px' });

        // Скрываем предыдущий слайд
        slides[currentIndex].style.display = 'none';

        // Показываем новый слайд
        slides[index].style.display = 'block';

        // Плавно увеличиваем размер и уменьшаем радиус нового слайда
        gsap.fromTo(slides[index], { scale: 1, borderRadius: '100px', opacity: 0.95 }, { duration: 40, scale: 1.1, borderRadius: '100px', opacity: 1 });

        currentIndex = index;
    }

    // Обработчик события для кнопки "Вперед"
    document.querySelector('.next-btn').addEventListener('click', function() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    });

    // Обработчик события для кнопки "Назад"
    document.querySelector('.prev-btn').addEventListener('click', function() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    });

    // Показываем первый слайд при загрузке страницы
    showSlide(currentIndex);
});
