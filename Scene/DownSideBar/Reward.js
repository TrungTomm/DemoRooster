class Reward extends Phaser.Scene {
    constructor() {
        super('Reward');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const REWARD_bg = this.add.nineslice(width -40, height -30, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => REWARD_bg.setAlpha(0.5))
        .on('pointerout', () => REWARD_bg.setAlpha(1))

        REWARD_bg.setScale(0.6);

        //Tao chu
        const REWARD = this.add.text(REWARD_bg.x -21, REWARD_bg.y -8, 'Reward', {
            color: '#FFFFFF',
            fontSize: '11px',
            fontFamily: 'Arial'
    
        });
    }

    update() { }
}

export default Reward;