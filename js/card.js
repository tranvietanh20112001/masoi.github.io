// werewolf-cards.js

// Định nghĩa đối tượng lá bài
function WerewolfCard(role, description, imageSrc) {
    this.role = role;
    this.description = description;
    this.imageSrc = "assets/img/" +imageSrc;
    this.display = function () {
        return this.role;
    }
}


function createWerewolfDeck() {
    var werewolfDeck = [
        new WerewolfCard("Dân Làng", "Bạn là một dân làng bình thường.", "danlang.jpg"),
        new WerewolfCard("Sói", "Bạn là sói. Nhiệm vụ của bạn là loại bỏ dân làng.", "soi.jpg"),
        new WerewolfCard("Tiên tri", "Bạn có khả năng nhận biết Ma sói.", "tientri.jpg"),
        new WerewolfCard("Phù thủy", "Bạn có thể cứu hoặc giết.", "phuthuy.jpg"),
        new WerewolfCard("Thợ săn", "Bạn có khả năng bắn chết một người chơi vào buổi tối.", "thosan.jpg"),
        new WerewolfCard("Cupid", "Cupid làm hai người chơi khác nhau trở thành đôi mà chỉ còn sống sót nếu cả hai.", "cupid.jpg"),
        new WerewolfCard("Già làng", "Người già làng có hai mạng sống khi bị sói cắn.", "gialang.jpg"),
        new WerewolfCard("Cô Bé", "Cô bé có thể nhìn mở mắt từ đêm thứ 2 khi sói được gọi.", "cobe.jpg"),
        new WerewolfCard("Nửa người Nửa sói", "Nửa người nửa sói có khả năng chọn lựa giữa tham gia phần sói hay phần dân làng.", "nuanguoinuasoi.jpg"),
        new WerewolfCard("Sói trắng", "Sói trắng có khả năng nhìn mở mắt vào đêm để xác định sói.", "soitrang.jpg"),
        new WerewolfCard("Bảo vệ", "Nhiệm vụ của Bảo vệ là lựa chọn 1 người để cứu", "baove.jpg"),

        new WerewolfCard("Thiên sứ", "Thiên sứ chiến thắng khi bị sói cắn trong đêm đầu tiên hoặc bị cả làng treo cổ trong đêm đầu tiên.", "thiensu.jpg"),
        new WerewolfCard("Người dạy gấu", "Người dạy gấu có khả năng nhận biết Sói đang ở gần.", "nguoidaygau.jpg"),
        new WerewolfCard("Ăn trộm", "Ăn trộm có khả năng đánh cắp vai trò của một người chơi khác.", "antrom.jpg"),
        new WerewolfCard("Hai chị em", "Đêm đầu tiên khi quản trò gọi, cả hai cùng thức dậy và nhận nhau. Hai người này không có khả năng đặc biệt khác.", "haichiem.jpg"),
        new WerewolfCard("Ba anh em", "Đêm đầu tiên khi quản trò gọi, cả ba cùng thức dậy và nhận ra nhau. Ba người này không có khả năng đặc biệt khác.", "baanhem.jpg"),
        new WerewolfCard("Sói trùm", "Sói trùm có khả năng cắn thêm một người khác trong đêm", "soitrum.jpg"),
        new WerewolfCard("Đứa trẻ hoang", "Đứa trẻ hoang nhận một nhân vật là mẹ. Nếu mẹ còn sống, đứa trẻ theo phe dân làng, nếu không, đứa trẻ theo sói", "duatrehoang.jpg"),
    ];

    return werewolfDeck;
}
