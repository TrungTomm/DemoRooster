class Battle extends Phaser.Scene {
    constructor() {
        super('Battle');
    }

    create() {
        const { width, height } = this.scale;
        //Tao back ground
        const BATTLE_bg = this.add.nineslice(width -410, height -30, 'roosterbattle', 'button_brown_normal', 130, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => BATTLE_bg.setAlpha(0.5))
        .on('pointerout', () => BATTLE_bg.setAlpha(1))

        BATTLE_bg.setScale(0.6);

        //Tao chu
        const BATTLE = this.add.text(BATTLE_bg.x -17, BATTLE_bg.y -8, 'Battle', {
            color: '#FFFFFF',
            fontSize: '13px',
            fontFamily: 'Arial'

        })
    }

    update() { }
}

export default Battle;