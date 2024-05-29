document.addEventListener('DOMContentLoaded', () => {
    // Создаем футер
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = `
        <footer class="footer">
            <div class="footer-horizontal">
                <!-- Логотип -->
                <div class="footer-logo">
                    <img src="/img/logo.svg" alt="Логотип" class="logo-img">
                </div>
    
                <!-- Контактная информация -->
                <div class="footer-contact">
                    <h3>Контакты</h3>
                    <p>+7(495)120-77-12</p>
                    <p>zakaz@rentasnab.ru</p>
                    <p>Россия, Москва</p>
                </div>
    
                <!-- Навигация -->
                <div class="footer-nav">
                    <h3>Навигация</h3>
                    <ul>
                        <li><a href="/about.html">О нас</a></li>
                        <li><a href="/services.html">Услуги</li>
                        <li><a href="/projects.html">Проекты</li>
                        <li><a href="/contact.html">Контакты</li>
                    </ul>
                </div>
            </div>
            
            <!-- Блок копирайта -->
            <div class="footer-copyright">
                <p>© 2024 ГК Северянин. Все права защищены.</p>
            </div>
        </footer>
    `;
    document.body.appendChild(footerContainer);

});
