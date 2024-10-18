class leaderBoardPopup extends Phaser.Scene {
    constructor() {
        super('leaderBoardPopup');
        this.scrollY = 270;       // Vị trí cuộn hiện tại
        this.scrollTargetY = 270; // Vị trí mục tiêu để cuộn đến
        this.easeFactor = 0.08; // Hệ số easing để làm cho cuộn mượt hơn
    }

    preload() { }

    create() {
        const { width, height } = this.scale;

        // Overlay để làm nổi bật bảng xếp hạng
        const overlay = this.add.graphics();
        overlay.fillStyle(0x000000, 0.6);
        overlay.fillRect(0, 0, width, height);
        overlay.setInteractive(new Phaser.Geom.Rectangle(0, 0, width, height), Phaser.Geom.Rectangle.Contains);
        overlay.on('pointerdown', () => {
            this.scene.stop(); // Đóng popup khi nhấn vào overlay
        });
        // Add popup background
        const popup_bg = this.add.nineslice(width/2, height/2, 'roosterbattle', 'popup_bg', 650, 980, 50, 50, 50, 50);
        popup_bg.setInteractive();
        popup_bg.on('pointerdown', (event) => event.stopPropagation());

        const tap = this.add.text(width/2, 1190, 'Tap to close', {
            color: '#FFFFFF',
            fontSize: 37,
            fontFamily: 'Arial',
        }).setAlpha(1.5)
        .setOrigin(0.5,0.5);

        // Add pop-up title
        const pu_title = this.add.nineslice(width / 2, 150, 'roosterbattle', 'popup_title_bg', 400, 0, 70, 70);
        const title = this.add.text(width/2, pu_title.y, 'Leaderboard', {
            color: '#FFFFFF',
            fontSize: 37,
            fontFamily: 'Arial'
        }).setOrigin(0.5,0.5);

        // Container chứa các dòng xếp hạng
        this.scrollContainer = this.add.container(0, 120);

        // Tạo mask để giới hạn vùng cuộn
        const maskShape = this.add.graphics();
        maskShape.fillRect(50, 200, 650, 800); // Giới hạn cuộn
        const mask = maskShape.createGeometryMask();
        this.scrollContainer.setMask(mask);

        // Gọi API để lấy dữ liệu
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                this.apiData = data;
                this.populateLeaderboard();  // Hiển thị dữ liệu lên bảng xếp hạng
            })
            .catch(error => console.error('Error:', error));

        // Thiết lập sự kiện cuộn bằng bánh xe chuột
        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            this.scrollTargetY -= deltaY * 0.6;  // Điều chỉnh vị trí mục tiêu để cuộn đến
        });
    }

    populateLeaderboard() {
        if (!this.apiData) return;

        let contentHeight = 0;
        const { width, height } = this.scale;

        // Thêm các dòng vào bảng xếp hạng
        for (let i = 0; i < 25; i++) {
            let row = this.add.nineslice(width/2, i * 115, 'roosterbattle', 'rank_row_bg', 550, 0, 50, 50);
            row.setOrigin(0.5, 0.5);
            this.scrollContainer.add(row);
            contentHeight += row.displayHeight;

            // Thêm huy chương và thông tin người chơi cho 3 thứ hạng đầu
            if (i === 0) {
                const goldMedal = this.add.image(125, i * 70, 'roosterbattle', 'medal_1');
                const playerTitle = this.add.text(width/2+10, i * 60 - 20 , this.apiData.title.toString(), {
                    fontSize: '29px',
                    fill: '#FFFFFF',
                    fontFamily: 'Arial'
                }).setOrigin(0.5, 0.5);
                const ELO = this.add.text(width/2 +10, i * 60 + 20, 'ELO: ' + this.apiData.userId.toString(), {
                    fontSize: '29px',
                    fill: '#fcdf03',
                    fontFamily: 'Arial'
                }).setOrigin(0.5,0.5);
                const rankNumber1 = this.add.text(115, i * 80 - 20, (i + 1).toString(), {
                    fontSize: '29px',
                    fill: '#FFFFFF',
                    fontFamily: 'Arial'
                });
                this.scrollContainer.add([goldMedal, playerTitle, ELO, rankNumber1]);    
            } else if (i === 1) {
                const silverMedal = this.add.image(125, i * 115, 'roosterbattle', 'medal_2');
                const rankNumber2 = this.add.text(115, i * 100 , (i + 1).toString(), {
                    fontSize: '29px',
                    fill: '#FFFFFF',
                    fontFamily: 'Arial'
                });
                this.scrollContainer.add([silverMedal, rankNumber2]);
            } else if (i === 2) {
                const bronzeMedal = this.add.image(125, i * 115, 'roosterbattle', 'medal_3');
                const rankNumber3 = this.add.text(115, i * 105 , (i + 1).toString(), {
                    fontSize: '29px',
                    fill: '#FFFFFF',
                    fontFamily: 'Arial'
                });
                this.scrollContainer.add([bronzeMedal, rankNumber3]);
            }

        // Add player rank row vào cuối cùng của bảng xếp hạng
        const rank_player = this.add.nineslice(width/2, 1065, 'roosterbattle', 'rank_row_player_bg', 550, 0, 50, 50);
        rank_player.setOrigin(0.5, 0.5);

        // Tính toán chiều cao nội dung và giới hạn cuộn
        this.contentHeight = contentHeight;
        this.minScrollY = 120-(this.contentHeight - 750);
    }
}

    update() {
        // Áp dụng easing để di chuyển scrollContainer từ vị trí hiện tại đến vị trí mục tiêu
        this.scrollY += (this.scrollTargetY - this.scrollY) * this.easeFactor;

        // Giới hạn vị trí cuộn
        const maxScrollY = 270;
        if (this.scrollY > maxScrollY) this.scrollY = maxScrollY;
        if (this.scrollY < this.minScrollY) this.scrollY = this.minScrollY;

        // Cập nhật vị trí của container dựa trên scrollY
        this.scrollContainer.y = this.scrollY;
    }
}

export default leaderBoardPopup;
