// Функция для отправки данных формы в Telegram с валидацией
async function sendToTelegram() {
    const form = document.getElementById('contactForm');

    // Извлечение значений из формы
    const name = form.querySelector('input[name="name"]').value.trim();
    const tel = form.querySelector('input[name="tel"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const details = form.querySelector('textarea[name="details"]').value.trim();

    // Регулярное выражение для проверки электронной почты
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Регулярное выражение для проверки телефона (разрешены только цифры, "+", "-", "(", ")")
    const telRegex = /^[0-9+\-() ]+$/;

    // Проверка обязательных полей
    if (!name) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Имя является обязательным полем.',
        });
        return;
    }

    if (!tel && !email) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Укажите номер телефона или электронную почту.',
        });
        return;
    }

    // Если телефон указан, проверяем его на корректность
    if (tel && !telRegex.test(tel)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Указан неправильный формат телефона. Разрешены только цифры и специальные символы (+, -, (, )).',
        });
        return;
    }

    // Если email указан, проверяем его на корректность
    if (email && !emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Указан неправильный формат электронной почты.',
        });
        return;
    }

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

    // Подготовка текста сообщения для Telegram
    const text = `"Оставить заявку"\n\nИмя: ${name}\nТелефон: ${tel}\nЭлектронная почта: ${email}\nДетали проекта: ${details}`;

    try {
        // Отправка POST-запроса к Telegram API
        const response = await fetch('https://api.telegram.org/bot7146174331:AAFJguCYxrO6_56DILaPGZ3Nu1PW6g2iRJY/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: -1002009364210, // Используйте ваш chat_id
                text: text,
            }),
        });

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Успех',
                text: 'Сообщение успешно отправлено в Telegram!',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Ошибка при отправке сообщения.',
            });
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Не удалось отправить сообщение.',
        });
    }
}

// Добавление обработчика событий на кнопку "Отправить"
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.yellow-button-b.magnetic');
    sendButton.addEventListener('click', sendToTelegram);
});
