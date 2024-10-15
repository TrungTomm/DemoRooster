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

        this.scene.start('MainScene');
        // Lắng nghe sự kiện resize để điều chỉnh lại canvas khi kích thước màn hình thay đổi
        window.addEventListener('resize', () => {
            this.adjustCanvasForDPI();
        });
    }

    adjustCanvasForDPI() {
        let dpi = window.devicePixelRatio;
        let canvas = this.game.canvas;

        // Điều chỉnh kích thước thật của canvas dựa trên DPI
        canvas.width = this.game.scale.width * dpi;
        canvas.height = this.game.scale.height * dpi;

        // Điều chỉnh lại kích thước hiển thị (CSS)
        canvas.style.width = this.game.scale.width + "px";
        canvas.style.height = this.game.scale.height + "px";

        // Điều chỉnh tỉ lệ của context
        let context = this.game.context;
        context.scale(dpi, dpi);
    }
}
