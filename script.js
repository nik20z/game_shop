document.addEventListener('DOMContentLoaded', function() {
    var games = [
        { 
            title: 'DayZ', 
            description: 'Как долго вы сможете выжить в пост-апокалипсисе? Мир пал под натиском зараженных. Боритесь против других выживших за ограниченные ресурсы. Сможете ли вы работать сообща с незнакомцами? Или станете волком-одиночкой? Это ваша история, это DayZ.', 
            genre: 'Выживание', 
            price: '1 499', 
            img: 'img/dayz.jpg'
        },
        { 
            title: "Baldur's Gate 3", 
            description: 'Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти.', 
            genre: 'Ролевая игра', 
            price: '1 999', 
            img: 'img/baldurs_gate.jpg'
        },
        { 
            title: 'Калибр', 
            description: '«Калибр» — бесплатный командный тактический онлайн-шутер с видом от первого и третьего лица, посвящённый специальным подразделениям со всего мира. Четыре класса, более 70 бойцов с уникальными способностями и вооружением, а также разнообразные режимы: PvE, PvP и PvPvE.', 
            genre: 'Онлайн-шутер', 
            price: '499', 
            img: 'img/caliber.jpg'
        },
        { 
            title: 'Hunt: Showdown', 
            description: 'Hunt: Showdown — это захватывающий PvPvE-шутер от первого лица, в котором побеждают те, кто готов рисковать. Откройте охоту на чудовищ американских болот и получите заслуженную награду — славу, снаряжение и золото.', 
            genre: 'Шутер от первого лица', 
            price: '399', 
            img: 'img/hunt.jpg'
        },
        { 
            title: 'Dota 2', 
            description: 'Соберите отряд и вернитесь в Забытые Королевства. Вас ждет история о дружбе и предательстве, выживании и самопожертвовании, о сладком зове абсолютной власти.', 
            genre: 'MOBA', 
            price: '449', 
            img: 'img/dota_2.jpg'
        },
        { 
            title: 'Project Zomboid', 
            description: 'Project Zomboid — это вершина выживания среди зомби. В одиночку или в сетевой игре: вы грабите, строите, создаете, сражаетесь, занимаетесь фермерством и ловите рыбу, пытаясь выжить. Неосторожных ждут хардкорный набор навыков ролевой игры, обширная карта, настраиваемая песочница и милый обучающий енот.', 
            genre: 'Выживание', 
            price: '799', 
            img: 'img/project_zomboid.jpg'
        },
        
    ];

    var gameCard = document.getElementById('game-card');
    var currentIndex = 0;

    function updateCard() {
        var game = games[currentIndex];
        gameCard.style.animation = 'none';
        setTimeout(function() {
            gameCard.innerHTML = '<img class="game-img" src="' + game.img + '"><h2 class="game-title">' + game.title + '</h2><p>' + game.description + '</p><p>' + game.genre + '</p><p class="game-price">' + game.price + ' ₽' +'</p>';
            gameCard.style.animation = 'slideIn 0.5s ease';
        }, 50);
    }

    function nextSlide() {
        currentIndex = (currentIndex < games.length - 1) ? currentIndex + 1 : 0;
        updateCard();
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : games.length - 1;
        updateCard();
    });

    document.getElementById('next').addEventListener('click', function() {
        nextSlide();
    });

    setInterval(nextSlide, 5000);

    updateCard();
});
