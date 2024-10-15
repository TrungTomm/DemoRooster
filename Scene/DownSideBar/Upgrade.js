class Upgrade extends Phaser.Scene {
    constructor() {
        super('Upgrade');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const UPGRADE_bg = this.add.nineslice(width -305, height - 30, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => UPGRADE_bg.setAlpha(0.5))
        .on('pointerout', () => UPGRADE_bg.setAlpha(1))

        UPGRADE_bg.setScale(0.6);

        //Tao chu
        const UPGRADE = this.add.text(UPGRADE_bg.x -22, UPGRADE_bg.y -8, 'Upgrade', {
            color: '#FFFFFF',
            fontSize: '11px',
            fontFamily: 'Arial'

        });
    }

    update() { }
}

export default Upgrade;