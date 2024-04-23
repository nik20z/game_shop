document.addEventListener('DOMContentLoaded', function() {
    var dirImages = 'img/';  // Путь до папки с картинками

    // Массив данных о Новостях
    var news = [
        { 
            title: 'Вышла «Смута» — самая громкая российская игра за последние месяцы. Что о ней стоит знать?', 
            excerpt: 'Геннадий Воробьев', 
            date: '4 апреля, 18:30',
            image: '1.webp' 
        },
        { 
            title: 'Тодд Говард прояснил несостыковку с Шейди-Сэндс в сериале «Фоллаут»', 
            excerpt: 'Геннадий Воробьев', 
            date: '17 апреля, 20:55',
            image: '2.webp' 
        },
    ];

    // Массив данных игр в Карусели
    var gamesCarousel = [
        { 
            title: 'DayZ', 
            description: 'Как долго вы сможете выжить в пост-апокалипсисе? Мир пал под натиском зараженных. Боритесь против других выживших за ограниченные ресурсы. Сможете ли вы работать сообща с незнакомцами? Или станете волком-одиночкой? Это ваша история, это DayZ.', 
            genre: 'Выживание', 
            price: '1 499', 
            img: 'dayz.jpg'
        },
        { 
            title: "Baldur's Gate 3", 
            description: 'Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти.', 
            genre: 'Ролевая игра', 
            price: '1 999', 
            img: 'baldurs_gate.jpg'
        },
        { 
            title: 'Калибр', 
            description: '«Калибр» — бесплатный командный тактический онлайн-шутер с видом от первого и третьего лица, посвящённый специальным подразделениям со всего мира. Четыре класса, более 70 бойцов с уникальными способностями и вооружением, а также разнообразные режимы: PvE, PvP и PvPvE.', 
            genre: 'Онлайн-шутер', 
            price: '499', 
            img: 'caliber.jpg'
        },
        { 
            title: 'Hunt: Showdown', 
            description: 'Hunt: Showdown — это захватывающий PvPvE-шутер от первого лица, в котором побеждают те, кто готов рисковать. Откройте охоту на чудовищ американских болот и получите заслуженную награду — славу, снаряжение и золото.', 
            genre: 'Шутер от первого лица', 
            price: '399', 
            img: 'hunt.jpg'
        },
        { 
            title: 'Dota 2', 
            description: 'Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти.', 
            genre: 'MOBA', 
            price: '449', 
            img: 'dota_2.jpg'
        },
        { 
            title: 'Project Zomboid', 
            description: 'Project Zomboid — это вершина выживания среди зомби. В одиночку или в сетевой игре: вы грабите, строите, создаете, сражаетесь, занимаетесь фермерством и ловите рыбу, пытаясь выжить. Неосторожных ждут хардкорный набор навыков ролевой игры, обширная карта, настраиваемая песочница и милый обучающий енот.', 
            genre: 'Выживание', 
            price: '799', 
            img: 'project_zomboid.jpg'
        },
        
    ];

    // Массив данных Игр
    var games = [
        { 
            title: 'ELDEN RING', 
            genre: 'Action/RPG', 
            price: '3 599', 
            image: 'elden_ring.jpg' 
        },
        { 
            title: 'Ready or Not', 
            genre: 'Тактический шутер', 
            price: '1 600', 
            image: 'ready_or_not.jpg'
        },
        { 
            title: 'Rust', 
            genre: 'Шутер от первого лица', 
            price: '1 100', 
            image: 'rust.jpg'
        },
        { 
            title: 'Dota 2', 
            genre: 'MOBA', 
            price: '299', 
            image: 'dota_2.jpg' 
        },
        { 
            title: 'Arma 3', 
            genre: 'Тактический шутер', 
            price: '499', 
            image: 'arma_3.jpg' 
        },
        { 
            title: 'Squad', 
            genre: 'Тактический шутер', 
            price: '499', 
            image: 'squad.jpg' 
        },
        { 
            title: "Garry's mod", 
            genre: 'Шутер от первого лица', 
            price: '750', 
            image: 'garrys_mod.jpg' 
        }
    ];

    // Колонка с Новостями
    var newsColumn = document.querySelector('.news-column');

    // Переменные Карусели
    var gameCard = document.getElementById('game-card');
    var currentIndex = 0;
    var intervalId;

    // Колонка с Играми
    var gamesListColumn = document.querySelector('.games-list-column');

    // --- Новости ---
    // Создать HTML-объект Новости 
    function createNewsHTML(newsItem) {
        var newsHTML = '<div class="news-item">';
        if (newsItem.image) {
            newsHTML += '<img src="' + dirImages + 'news/' + newsItem.image + '" alt="' + newsItem.title + '">';
        }
        newsHTML += '<h3 class="news-title">' + newsItem.title + '</h3>';
        newsHTML += '<p class="news-excerpt">' + newsItem.excerpt + '</p>';
        newsHTML += '<p class="news-date">' + newsItem.date + '</p>';
        newsHTML += '</div>';
        return newsHTML;
    }

    // Заполнить колонку Новостями
    function fillNewsColumn() {
        var newsHTML = '';
        news.forEach(function(newsItem) {
            newsHTML += createNewsHTML(newsItem);
        });
        newsColumn.insertAdjacentHTML('beforeend', newsHTML);
    }

    // --- Карусель ---
    // Заполнить карточки (слайды) в Карусели 
    function updateCard() {
        var game = gamesCarousel[currentIndex];
        gameCard.style.animation = 'none';
        setTimeout(function() {
            gameCard.innerHTML = '<img class="game-img" src="' + dirImages + 'gamesCarousel/' + game.img + '"><h2 class="game-title">' + game.title + '</h2><p>' + game.description + '</p><p>' + game.genre + '</p><p class="game-price">' + game.price + ' ₽' +'</p>';
            gameCard.style.animation = 'slideIn 0.5s ease';
        }, 50);

        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000);
    }

    // Перелистывание слайдов с играми
    function nextSlide() {
        currentIndex = (currentIndex < gamesCarousel.length - 1) ? currentIndex + 1 : 0;
        updateCard();
    }

    // Обработка нажатия кнопки "Назад"
    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : gamesCarousel.length - 1;
        updateCard();
    });

    // Обработка нажатия кнопки "Вперед"
    document.getElementById('next').addEventListener('click', function() {
        nextSlide();
    });

    // --- Игры ---
    // Создать HTML-объект Игры 
    function createGameHTML(gameItem) {
        var gameHTML = '<div class="game-item">';
        gameHTML += '<div class="game-image"><img src="' + dirImages + 'games/' + gameItem.image + '" alt="' + gameItem.title + '"></div>';
        gameHTML += '<div class="game-info">';
        gameHTML += '<h3 class="game-title">' + gameItem.title + '</h3>';
        gameHTML += '<p class="game-genre">' + gameItem.genre + '</p>';
        gameHTML += '</div>';
        gameHTML += '<div class="game-price">' + gameItem.price + ' ₽' + '</div>';
        gameHTML += '</div>';
        return gameHTML;
    }

    // Заполнить колонку Играми
    function fillGamesListColumn() {
        var gamesHTML = '';
        games.forEach(function(gameItem) {
            gamesHTML += createGameHTML(gameItem);
        });
        gamesListColumn.insertAdjacentHTML('beforeend', gamesHTML);
    }

    // Настройка автоперелистывания Карусели
    intervalId = setInterval(nextSlide, 5000);

    // Заполнение страницы контентом
    fillNewsColumn();
    updateCard();
    fillGamesListColumn();
});
