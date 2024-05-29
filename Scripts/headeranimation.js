

const thirdHeader = document.querySelector('.third-header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    if (thirdHeader) { // Check if thirdHeader is not null
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            thirdHeader.classList.add('hidden'); // Hide the third header
        } else {
            // Scrolling up
            thirdHeader.classList.remove('hidden'); // Show the third header
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Store the previous scroll position
    }
});

// SECOND
const secondMain = document.querySelector('.second-main');

// Check and update state of secondMain on page load
function updateSecondMainOnLoad() {
    if (secondMain) { // Check if secondMain is not null
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            secondMain.classList.add('hidden'); // Hide the element
        }
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateSecondMainOnLoad);

// Update state of secondMain on page scroll
function updateSecondMainOnScroll() {
    if (secondMain) { // Check if secondMain is not null
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            secondMain.classList.add('hidden'); // Hide the element
        } else {
            secondMain.classList.remove('hidden'); // Show the element
        }
    }
}
// Add scroll event listener
window.addEventListener('scroll', updateSecondMainOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-sidebar-btn');
  const sidebar = document.getElementById('sidebar-catalog');
  const thirdHeader = document.querySelector('.third-header'); // Захват элемента третьей шапки
  let isOpen = false; // Отслеживание состояния панели

  // Функция для открытия боковой панели
  const openSidebar = () => {
    
    gsap.to(sidebar, {
      duration: 0.5,
      left: '0%', // Плавное выдвижение боковой панели
      borderRadius: '0%', // Скругление убирается
      ease: 'power2.out'
    });
    toggleButton.innerHTML = '<img src="/img/burger.svg" alt="Кнопка каталога опалубки" class="burger"> ЗАКРЫТЬ';
    isOpen = true;

    // Скрыть третий заголовок, если он существует
    if (thirdHeader) {
      thirdHeader.classList.add('hidden');
    }
  };

  // Функция для закрытия боковой панели
  const closeSidebar = () => {
    gsap.to(sidebar, {
      duration: 1,
      left: '-100%',
      borderRadius: '50%', // Скругление при закрытии
      ease: 'power2.in'
    });
    toggleButton.innerHTML = '<img src="/img/burger.svg" alt="Кнопка каталога опалубки" class="burger"> КАТАЛОГ';
    isOpen = false;

    // Показать третий заголовок, если он существует
    if (thirdHeader) {
      thirdHeader.classList.remove('hidden');
    }
  };

  // Обработчик кликов на кнопку для открытия/закрытия боковой панели
  toggleButton.addEventListener('click', () => {
    if (isOpen) {
      closeSidebar(); // Если открыто, закрываем
    } else {
      openSidebar(); // Если закрыто, открываем
    }
  });

  // Закрытие боковой панели при клике за пределы, если она открыта
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== toggleButton && isOpen) {
      closeSidebar(); // Закрываем панель, если клик за пределами
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Получаем текущий путь страницы
  var currentPath = window.location.pathname;

  // Получаем список элементов списка
  var headerList = document.querySelectorAll('.header-list a');

  // Перебираем элементы списка
  headerList.forEach(function(item) {
      // Получаем корень ссылки и путь из ссылки
      var linkPath = item.getAttribute('href');
      var rootPath = linkPath.substring(0, linkPath.lastIndexOf('/') + 1);
      // Проверяем, совпадает ли текущий путь страницы с корнем ссылки
      if (currentPath.startsWith(rootPath)) {
          // Добавляем класс со стилями фона к элементу списка
          item.querySelector('li').classList.add('active1');
      }
  });
});

