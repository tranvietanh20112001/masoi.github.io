// Gọi hàm tạo bộ lá bài Ma sói từ file werewolf-cards.js
var werewolfDeck = createWerewolfDeck();

// Hiển thị các lá bài lên trang HTML dưới dạng khối
var cardContainer = document.getElementById('card-container');
for (let k = 0; k < werewolfDeck.length; k++) {
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    var cardTitle = document.createElement('h3');
    cardTitle.textContent = werewolfDeck[k].display();

    var cardDescription = document.createElement('p');
    cardDescription.textContent = werewolfDeck[k].description;

    var cardImage = document.createElement('img');
    cardImage.src = werewolfDeck[k].imageSrc;
    cardImage.alt = werewolfDeck[k].role + ' Image';
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardDescription);

    // Thêm sự kiện click để mở trang HTML khác
    cardDiv.addEventListener('click', function () {
        // Lưu thông tin vào localStorage
        localStorage.setItem('selectedCardRole', werewolfDeck[k].role);
        localStorage.setItem('selectedCardDescription', werewolfDeck[k].description);
        // Chuyển hướng đến trang hiển thị đầy đủ thông tin của lá bài
        window.location.href = 'card-detail.html';
    });

    cardContainer.appendChild(cardDiv);
}