class Upgrade extends Phaser.Scene {
    constructor() {
        super('Upgrade');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const UPGRADE_bg = this.add.nineslice(210, 1225, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => UPGRADE_bg.setAlpha(0.5))
            .on('pointerout', () => UPGRADE_bg.setAlpha(1))


        // //Tao chu
        const UPGRADE = this.add.text(UPGRADE_bg.x, UPGRADE_bg.y, 'Upgrade', {
            color: '#FFFFFF',
            fontSize: '19px',
            fontFamily: 'Arial'

        }).setOrigin(0.5, 0.5);
    }

    update() { }
}

export default Upgrade;