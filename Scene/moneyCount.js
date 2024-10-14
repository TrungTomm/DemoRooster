class moneyCount extends Phaser.Scene {
    constructor() {
        super("moneyCount");
    }
    create() {
        const { width, height } = this.scale;

        //Tao vien ben canh Rcoin to
        const Rcoin_bar = this.add.nineslice(120, 43, 'roosterbattle', 'currency_bg', 150, 0, 10, 10).setOrigin(1, 1);
        Rcoin_bar.setScale(0.65)

        //Tao Rcoin to phia tren screen
        const Rcoin = this.add.image(25, 30, 'roosterbattle', 'token_rgold_big');
        Rcoin.setScale(0.3)

        //Tao tien
        const money_up = this.add.text(50, 22, '5,778', {
            color: '#FFFFFF',
            fontFamily: 'Arial'
        })
    }
    update(){}
}

export default moneyCount;