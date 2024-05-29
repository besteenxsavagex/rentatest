// Функция для отправки данных из страницы "Перезвоните мне" в Telegram
async function sendToTelegram() {
    const form = document.getElementById('callbackForm');

    // Извлечение значений из формы
    const tel = form.querySelector('input[name="tel"]').value.trim();

    // Проверка, что согласие на политику конфиденциальности принято
    const privacyChecked = form.querySelector('input[id="privacy"]').checked;
    if (!privacyChecked) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Необходимо согласиться с политикой конфиденциальности.',
        });
        return;
    }

    if (!tel) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Укажите номер телефона.',
        });
        return;
    }

    // Подготовка текста сообщения для Telegram
    const text = `"Перезвоните мне"\n\nКонтактный телефон: ${tel}`;

    try {
        // Отправка POST-запроса к Telegram API
        const response = await fetch('https://api.telegram.org/bot7146174331:AAFJguCYxrO6_56DILaPGZ3Nu1PW6g2iRJY/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: -1002009364210, // Замените на ваш chat_id
                text: text,
            }),
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Успех',
                text: 'Запрос отправлен! Мы скоро свяжемся с вами.',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Ошибка при отправке запроса.',
            });
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Не удалось отправить запрос.',
        });
    }
}

// Привязываем обработчик к кнопке отправки
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.yellow-button-b.magnetic');
    sendButton.addEventListener('click', sendToTelegram);
});
