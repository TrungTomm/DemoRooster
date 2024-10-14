class Reward extends Phaser.Scene {
    constructor() {
        super('Reward');
    }

    create() {
        //Tao back ground
        const REWARD_bg = this.add.nineslice(345, 762, 'roosterbattle', 'button_brown_normal', 100, 0, 30, 30)
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        .on('pointerover', () => REWARD_bg.setAlpha(0.5))
        .on('pointerout', () => REWARD_bg.setAlpha(1))

        REWARD_bg.setScale(0.6);

        //Tao chu
        const REWARD = this.add.text(325, 753, 'Reward', {
            color: '#FFFFFF',
            fontSize: 11,
            fontFamily: 'Arial'
    
        });
    }

    update() { }
}

export default Reward;