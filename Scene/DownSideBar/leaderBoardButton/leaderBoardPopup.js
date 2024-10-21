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
        const popup_bg = this.add.nineslice(width / 2, height / 2, 'roosterbattle', 'popup_bg', 650, 980, 50, 50, 50, 50);
        popup_bg.setInteractive();
        popup_bg.on('pointerdown', (event) => event.stopPropagation());

        const tap = this.add.text(width / 2, 1190, 'Tap to close', {
            color: '#FFFFFF',
            fontSize: 37,
            fontFamily: 'Arial',
        }).setAlpha(1)
            .setOrigin(0.5, 0.5);

        // Add pop-up title
        const pu_title = this.add.nineslice(width / 2, 150, 'roosterbattle', 'popup_title_bg', 400, 0, 70, 70);
        const title = this.add.text(width / 2, pu_title.y, 'Leaderboard', {
            color: '#FFFFFF',
            fontSize: 37,
            fontFamily: 'Arial'
        }).setOrigin(0.5, 0.5);

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
            this.scrollTargetY -= deltaY * 1;  // Điều chỉnh vị trí mục tiêu để cuộn đến
        });
        // Thêm sự kiện cho con trỏ chuột
        this.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                // Nếu con trỏ chuột đang nhấn, cập nhật vị trí mục tiêu dựa trên vị trí chuột
                this.scrollTargetY += pointer.velocity.y * 1;  // Tinh chỉnh hệ số để điều chỉnh độ nhạy
            }
        });
    }

    populateLeaderboard() {
        if (!this.apiData) return;

        let contentHeight = 0;
        const { width, height } = this.scale;

        // Thêm các dòng vào bảng xếp hạng
        for (let i = 0; i < 25; i++) {
            let row = this.add.nineslice(width / 2, i * 115, 'roosterbattle', 'rank_row_bg', 550, 0, 50, 50);
            row.setOrigin(0.5, 0.5);
            this.scrollContainer.add(row);
            contentHeight += row.displayHeight;

            // Thêm huy chương cho 3 người chơi có thứ hạng đầu
            if (i === 0) {
                const goldMedal = this.add.image(125, i * 70, 'roosterbattle', 'medal_1');
                this.scrollContainer.add(goldMedal);
            } else if (i === 1) {
                const silverMedal = this.add.image(125, i * 115, 'roosterbattle', 'medal_2');
                this.scrollContainer.add(silverMedal);
            } else if (i === 2) {
                const bronzeMedal = this.add.image(125, i * 115, 'roosterbattle', 'medal_3');
                this.scrollContainer.add(bronzeMedal);
            } 
            
            //Thêm số thứ tự của từng người chơi
            const rankNumber = this.add.text(125, i * 115 - 5, (i + 1).toString(), {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial'
            }).setOrigin(0.5, 0.5);
            this.scrollContainer.add(rankNumber);
            if (i === 0) {
                rankNumber.setStyle({ fill: '#eddf51'})
            } else if (i === 1) {
                rankNumber.setStyle({ fill: '#faf9f5'})
            } else if (i === 2) {
                rankNumber.setStyle({ fill: '#f2b757'})
            } 

            //Thêm tên của từng người chơi
            const playerTittle = this.add.text(width / 2 + 10, i * 115 - 20, this.apiData.title.toString(), {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial'
            }).setOrigin(0.5, 0.5);
            this.scrollContainer.add(playerTittle)

            //Thêm ELO cho người chơi
            const randomNumber = Phaser.Math.Between(1, 1000);
            const ELO = this.add.text(width / 2 + 10, i * 115 + 20, "ELO:" + randomNumber.toString(), {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial',
                fill: '#fcdf03'
            }).setOrigin(0.5, 0.5);
            this.scrollContainer.add(ELO)

            // Add player rank row vào cuối cùng của bảng xếp hạng
            const rank_player = this.add.nineslice(width / 2, 1065, 'roosterbattle', 'rank_row_player_bg', 550, 0, 50, 50);
            rank_player.setOrigin(0.5, 0.5);
            const playerName = this.add.text(width / 2, rank_player.y - 20, "TrungTom", {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial'
            })
                .setOrigin(0.5, 0.5);
            const playerELO = this.add.text(width / 2, playerName.y + 40, "ELO: 1", {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial',
                fill: '#fcdf03',
            })
                .setOrigin(0.5, 0.5);
            const playerID = this.add.text(width / 2 - 235, rank_player.y, "199", {
                fontSize: '29px',
                fill: '#FFFFFF',
                fontFamily: 'Arial',
            })
                .setOrigin(0.5, 0.5);
            // Tính toán chiều cao nội dung và giới hạn cuộn
            this.contentHeight = contentHeight;
            this.minScrollY = 120 - (this.contentHeight - 750);
        }
    }

    update() {
        // Áp dụng easing để di chuyển scrollContainer từ vị trí hiện tại đến vị trí mục tiêu
        this.scrollY += (this.scrollTargetY - this.scrollY) * this.easeFactor;

        // Giới hạn vị trí cuộn
        const maxScrollY = 270;
        this.minScrollY = 120 - (this.contentHeight - 750); // Giới hạn dưới, đảm bảo có nội dung

        // Nếu kéo vượt qua giới hạn trên, đặt lại vị trí mục tiêu về giới hạn trên
        if (this.scrollY > maxScrollY) {
            this.scrollTargetY = maxScrollY;
        }

        // Nếu kéo vượt qua giới hạn dưới, đặt lại vị trí mục tiêu về giới hạn dưới
        if (this.scrollY < this.minScrollY) {
            this.scrollTargetY = this.minScrollY;
        }

        // Cập nhật vị trí của container dựa trên scrollY
        this.scrollContainer.y = this.scrollY;
    }
}

export default leaderBoardPopup;
