class Reward extends Phaser.Scene {
    constructor() {
        super('Reward');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const REWARD_bg = this.add.nineslice(640, 1225, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => REWARD_bg.setAlpha(0.5))
            .on('pointerout', () => REWARD_bg.setAlpha(1))


        // Tao chu
        const REWARD = this.add.text(REWARD_bg.x, REWARD_bg.y, 'Reward', {
            color: '#FFFFFF',
            fontSize: '19px',
            fontFamily: 'Arial'

        }).setOrigin(0.5, 0.5);
    }

    update() { }
}

export default Reward;