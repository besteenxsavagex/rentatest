document.addEventListener("DOMContentLoaded", function() {
    const rentalButton = document.querySelector('.product-actions1 .white-border-btn:nth-child(1)');
    const purchaseButton = document.querySelector('.product-actions1 .white-border-btn:nth-child(2)');
    const blocks = document.querySelectorAll('.block');

    // Проверка наличия всех элементов перед выполнением логики
    if (!rentalButton || !purchaseButton || blocks.length === 0) {
        console.error("Ошибка: Кнопки или блоки не найдены");
        return; // Прекращаем выполнение, чтобы избежать ошибок
    }

    const filterBlocks = () => {
        const rentalActive = rentalButton.classList.contains("active");
        const purchaseActive = purchaseButton.classList.contains("active");

        blocks.forEach(block => {
            const options = Array.from(block.querySelectorAll('.option')).map(opt => opt.textContent);

            const hasRentalOption = options.includes("Аренда");
            const hasPurchaseOption = options.includes("Покупка");

            if ((rentalActive && !hasRentalOption) || (purchaseActive && !hasPurchaseOption)) {
                block.classList.add("hidden1"); // Скрываем блок
            } else {
                block.classList.remove("hidden1"); // Показываем блок
            }
        });
    };

    const toggleActiveClass = (event) => {
        const target = event.target;

        if (target.classList.contains("active")) {
            target.classList.remove("active"); // Убираем active при повторном нажатии
        } else {
            rentalButton.classList.remove("active");
            purchaseButton.classList.remove("active");
            target.classList.add("active"); // Добавляем active к выбранной кнопке
        }

        filterBlocks(); // Обновляем фильтрацию после переключения
    };

    rentalButton.addEventListener('click', toggleActiveClass);
    purchaseButton.addEventListener('click', toggleActiveClass);

    filterBlocks(); // Применяем фильтрацию при первой загрузке страницы
});
