class leaderBoard extends Phaser.Scene {
    constructor() {
        super('leaderBoard');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const LEADERBOARD_bg = this.add.nineslice(510, 1225, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => LEADERBOARD_bg.setAlpha(0.5))
            .on('pointerout', () => LEADERBOARD_bg.setAlpha(1))
            .on('pointerdown', () => this.scene.run('leaderBoardPopup'))

        //Tao chu
        const LEADERBOARD = this.add.text(LEADERBOARD_bg.x, LEADERBOARD_bg.y, 'Leaderboard', {
            color: '#FFFFFF',
            fontSize: '19px',
            fontFamily: 'Arial'
        }).setOrigin(0.5, 0.5);
    }

    update() { }
}

export default leaderBoard;