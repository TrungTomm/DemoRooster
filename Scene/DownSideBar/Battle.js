class Battle extends Phaser.Scene {
    constructor() {
        super('Battle');
    }

    create() {
        //Tao back ground
        const BATTLE_bg = this.add.nineslice(40, 762, 'roosterbattle', 'button_brown_normal', 100, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => BATTLE_bg.setAlpha(0.5))
        .on('pointerout', () => BATTLE_bg.setAlpha(1))

        BATTLE_bg.setScale(0.6);

        //Tao chu
        const BATTLE = this.add.text(25, 753, 'Battle', {
            color: '#FFFFFF',
            fontSize: 11,
            fontFamily: 'Arial'

        })
    }

    update() { }
}

export default Battle;