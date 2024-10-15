class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }
    create() {
        const { width, height } = this.scale;

        // Thêm bức ảnh vào scene
        const bg = this.add.image(width / 2, height / 2, 'roosterbattle', 'bg');
        // Thiết lập kích thước bức ảnh để vừa vặn khung hình
        bg.setDisplaySize(width, height);

    }

    update() { }
}

export default MainScene;