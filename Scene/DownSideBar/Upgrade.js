class Upgrade extends Phaser.Scene {
    constructor() {
        super('Upgrade');
    }

    create() {
        //Tao back ground
        const UPGRADE_bg = this.add.nineslice(110, 762, 'roosterbattle', 'button_brown_normal', 100, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => UPGRADE_bg.setAlpha(0.5))
        .on('pointerout', () => UPGRADE_bg.setAlpha(1))

        UPGRADE_bg.setScale(0.6);

        //Tao chu
        const UPGRADE = this.add.text(87, 753, 'Upgrade', {
            color: '#FFFFFF',
            fontSize: 11,
            fontFamily: 'Arial'

        });
    }

    update() { }
}

export default Upgrade;