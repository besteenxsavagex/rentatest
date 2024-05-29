const headerHTML = `
<header id="myHeader">
    <!-- Самая верхняя часть шапки -->
    <nav class="first-header">
        <!-- Левая часть -->
        <ul class="first-left">
            <a href="/index.html"><li>О компании</li></a>
            <a href="#"><li>Доставка и оплата</li></a>
            <a href="/News/news.html"><li>Новости</li></a>
            <a href="#"><li>Карьера</li></a>
            <a href="/new-application.html"><li>Контакты</li></a>
        </ul>
        <!-- Правая часть -->
        <ul class="first-right">
            <li><a href="/callme.html">Позвоните мне</a></li>
            <li><a href="#"><img src="/img/Phone.svg" alt="phone" class="phone-svg"><div class="phone-number">+7(495)120-77-12</div></a></li>
        </ul>
    </nav>
    <!-- Боковая панель каталога -->
    <!-- Кнопка для открытия/закрытия каталога -->
    
    
    
    
    <!-- Часть шапки по середине -->
    <div class="second-header">
        <!-- Самая левая часть -->
        <div class="logo-section">
        <a href="/index.html"><img src="/img/logo.svg" alt="Company Logo"></a>
        <!-- Правильная структура кнопки -->
        <button class="gray-button" id="toggle-sidebar-btn">
            <img src="/img/burger.svg" alt="Кнопка каталога опалубки" class="burger">
            КАТАЛОГ
        </button>

        </div>
        <!-- Часть с поиском по середине -->
        <div class="search-section">
            <div class="search-container">
                <img src="/img/search.svg" alt="Поиск опалубки" class="lupa">
                <input type="text" placeholder="Поиск по наименованию" class="search-bar">
            </div>
        </div>
        <!-- Самая правая часть -->
        <a href="/new-application.html"><div class="request-section">
            <button class="gray-button-green magnetic">
            ОТПРАВИТЬ ЗАЯВКУ
        </div>
        </a>
    </div>

    <!-- Самая нижняя часть шапки -->
    <div class="third-header">
        <!-- Оранжевый прямоугольник -->
        <ul class="header-list">
            <a href="/Catalog/Wall-formwork/wall-formwork.html" data-barba-prevent="self"><li>Опалубка стен</li></a>
            <a href="/Catalog/Floor-Formwork/floor-Formwork.html" data-barba-prevent="self"><li>Опалубка Перекрытий</li></a>
            <a href="/Catalog/Columns-Formwork/columns-Formwork.html"><li>Опалубка Колонн</li></a>
            <a href="/Catalog/Accessories-Formwork/accessories-formwork.html"><li>Комплектующие Для Опалубки</li></a>
            <a href="/Catalog/Bridge-Formwork/bridge-formwork.html"><li>Мостовые Опорные Подмости</li></a>
            <a href="/Catalog/Auto-rent/auto-rent.html"><li>Аренда техники</li></a>
        </ul>
        
    </div>
</header>


    <!-- Боковая панель каталога -->
    <div class="sidebar" id="sidebar-catalog">
    <!-- Категории -->
    <ul>
        <a href="/Catalog/Wall-formwork/wall-formwork.html"><li class="category">Опалубка стен</li></a>
        <a href="/Catalog/Floor-formwork/floor-formwork.html"><li class="category">Опалубка Перекрытий</li></a>
        <a href="/Catalog/Column-formwork/column-formwork.html"><li class="category">Опалубка Под Колонны</li></a>
        <a href="/Catalog/Accessories-formwork/accessories-formwork.html"><li class="category">Комплектующие Для Опалубки</li></a>
        <a href="/Catalog/Bridge-formwork/bridge-formwork.html"><li class="category">Мостовые Опорные Подмости</li></a>
        <a href="/Catalog/Auto-rent/auto-rent.html"><li class="category">Аренда техники</li></a>
        <a href="/Catalog/Accessories-formwork.html"><li class="category">О компании</li></a>
        <a href="/Catalog/accessories-formwork.html"><li class="category">Новости</li></a>
        <a href="/Catalog/bridge-support.html"><li class="category">Доставка и оплата</li></a>
        <a href="/Catalog/equipment-rental.html"><li class="category">Карьера</li></a>
    </ul>
    </div>
`;

document.write(headerHTML);

