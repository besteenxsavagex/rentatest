// Получаем все кнопки с классом "magnetic"
const buttons = document.querySelectorAll('.magnetic');

// Коэффициент масштабирования для движения всей кнопки
const scaleFactor = 0.1; // Настройте этот коэффициент по вашему усмотрению

// Функция для обработки движения мыши
function moveButton(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    buttons.forEach(button => {
        if (button.contains(event.target)) {
            const rect = button.getBoundingClientRect();
            const buttonX = rect.left + rect.width / 2;
            const buttonY = rect.top + rect.height / 2;

            const distanceX = mouseX - buttonX;
            const distanceY = mouseY - buttonY;

            // Применяем трансформацию для кнопки
            button.style.transition = 'transform 0.3s ease';
            button.style.transform = `translate(${distanceX}px, ${distanceY}px) scale(${1 - scaleFactor})`;

            // Применяем трансформацию для всех дочерних элементов кнопки с использованием коэффициента масштабирования
            const children = button.querySelectorAll('*');
            children.forEach(child => {
                const childDistanceX = distanceX * scaleFactor;
                const childDistanceY = distanceY * scaleFactor;
                child.style.transition = 'transform 0.3s ease';
                child.style.transform = `translate(${childDistanceX}px, ${childDistanceY}px)`;
            });
        }
    });
}

// Функция для возврата кнопки в исходное положение
function returnButton(button) {
    button.style.transition = 'transform 0.5s ease';
    button.style.transform = 'translate(0, 0) scale(1)';

    const children = button.querySelectorAll('*');
    children.forEach(child => {
        child.style.transition = 'transform 0.5s ease';
        child.style.transform = 'translate(0, 0)';
    });
}

// Добавляем обработчики событий для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.addEventListener('mousemove', moveButton);
    });

    button.addEventListener('mouseleave', () => {
        button.removeEventListener('mousemove', moveButton);
        setTimeout(() => returnButton(button), 100);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const rentLinks = document.querySelectorAll('.category-popup a');
  const buyLinks = document.querySelectorAll('.category-popup-sell a');

  rentLinks.forEach(link => {
      link.addEventListener('click', function() {
          localStorage.setItem('selectedCategory', 'rent');
      });
  });

  buyLinks.forEach(link => {
      link.addEventListener('click', function() {
          localStorage.setItem('selectedCategory', 'buy');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const rentButton = document.querySelector('.white-border-btn.pm:nth-child(1)');
  const buyButton = document.querySelector('.white-border-btn.pm:nth-child(2)');

  const selectedCategory = localStorage.getItem('selectedCategory');

  if (selectedCategory === 'rent') {
      rentButton.classList.add('active');
  } else if (selectedCategory === 'buy') {
      buyButton.classList.add('active');
  }

  // Очистить значение после использования, чтобы избежать конфликтов при повторных посещениях
  localStorage.removeItem('selectedCategory');
});
