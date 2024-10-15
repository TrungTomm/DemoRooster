class leaderBoard extends Phaser.Scene {
    constructor() {
        super('leaderBoard');
    }

    create() {
        const { width, height } = this.scale;

        //Tao back ground
        const LEADERBOARD_bg = this.add.nineslice(width -115, height -30, 'roosterbattle', 'button_brown_normal', 110, 0, 30, 30)
            .setInteractive()
            .on('pointerover', () => LEADERBOARD_bg.setAlpha(0.5))
            .on('pointerout', () => LEADERBOARD_bg.setAlpha(1))
            .on('pointerdown', () => this.scene.run('leaderBoardPopup'))
        LEADERBOARD_bg.setScale(0.6);

        //Tao chu
        const LEADERBOARD = this.add.text(LEADERBOARD_bg.x -32, LEADERBOARD_bg.y-8, 'Leaderboard', {
            color: '#FFFFFF',
            fontSize: '11px',
            fontFamily: 'Arial'
        });
    }

    update() {}
}

export default leaderBoard;