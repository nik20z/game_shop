document.addEventListener('DOMContentLoaded', function() {
    var games = [
        { title: 'Игра 1', description: 'Описание 1', genre: 'Жанр 1', price: 'Цена 1', img: 'img/dayz.jpg' },
        { title: 'Игра 2', description: 'Описание 2', genre: 'Жанр 2', price: 'Цена 2', img: 'img/baldurs_gate.jpg' },
        // Добавьте больше игр по мере необходимости
    ];

    var gameCard = document.getElementById('game-card');
    var currentIndex = 0;

    function updateCard() {
        var game = games[currentIndex];
        gameCard.innerHTML = '<img class="game-img" src="' + game.img + '"><h2>' + game.title + '</h2><p>' + game.description + '</p><p>' + game.genre + '</p><p>' + game.price + '</p>';
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : games.length - 1;
        updateCard();
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex < games.length - 1) ? currentIndex + 1 : 0;
        updateCard();
    });

    updateCard();
});
