class moneyCount extends Phaser.Scene {
    constructor() {
        super("moneyCount");
    }
    create() {
        const { width, height } = this.scale;

        //Tao vien ben canh Rcoin to
        const currency_bg = this.add.nineslice(150, 60, 'roosterbattle', 'currency_bg', 150, 0, 10, 10).setOrigin(0.5, 0.5);

        //Tao Rcoin to phia tren screen
        const token_rgold_big = this.add.nineslice(70, 60, 'roosterbattle', 'token_rgold_big', 70, 70, 3, 3, 3, 3);

        // //Tao tien
        const money_up = this.add.text(width - 345, 2, '100', {
            color: '#FFFFFF',
            fontFamily: 'Arial'
        })
    }
    update() { }
}

export default moneyCount;