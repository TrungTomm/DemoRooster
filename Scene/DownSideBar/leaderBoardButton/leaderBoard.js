class leaderBoard extends Phaser.Scene {
    constructor() {
        super('leaderBoard');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const LEADERBOARD_bg = this.add.nineslice(280, 762, 'roosterbattle', 'button_brown_normal', 100, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => LEADERBOARD_bg.setAlpha(0.5))
            .on('pointerout', () => LEADERBOARD_bg.setAlpha(1))
            .on('pointerdown', () => this.scene.run('leaderBoardPopup'))
        LEADERBOARD_bg.setScale(0.6);

        //Tao chu
        const LEADERBOARD = this.add.text(253, 753, 'Leaderboard', {
            color: '#FFFFFF',
            fontSize: 9,
            fontFamily: 'Arial'
        });
    }

    update() {}
}

export default leaderBoard;