// DpiAdjustmentScene.js
export default class DpiAdjustmentScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DpiAdjustmentScene' });
    }

    preload() {
        // Tải tài nguyên nếu cần
    }

    create() {
        this.adjustCanvasForDPI();

        // Lắng nghe sự kiện resize để điều chỉnh lại canvas khi kích thước màn hình thay đổi
        window.addEventListener('resize', () => {
            this.adjustCanvasForDPI();
        });

        this.scene.start('MainScene');

    }

    adjustCanvasForDPI() {
        let dpi = window.devicePixelRatio;
        const width = Math.floor(window.innerWidth);
        const height = Math.floor(window.innerHeight);
        let canvas = this.game.canvas;

        // Điều chỉnh kích thước canvas dựa trên kích thước màn hình
        canvas.width = width * dpi;
        canvas.height = height * dpi;

        // Điều chỉnh lại kích thước hiển thị (CSS)
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        // Điều chỉnh tỉ lệ của context
        let context = this.game.context;
        context.scale(dpi, dpi);
    }
}
