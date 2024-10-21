class Battle extends Phaser.Scene {
    constructor() {
        super('Battle');
    }

    create() {
        const { width, height } = this.scale;
        //Tao back ground
        const BATTLE_bg = this.add.nineslice(80, 1225, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => BATTLE_bg.setAlpha(0.5))
            .on('pointerout', () => BATTLE_bg.setAlpha(1))


        // //Tao chu
        const BATTLE = this.add.text(BATTLE_bg.x, BATTLE_bg.y, 'Battle', {
            color: '#FFFFFF',
            fontSize: '19px',
            fontFamily: 'Arial'
        }).setOrigin(0.5, 0.5)
    }

    update() { }
}

export default Battle;