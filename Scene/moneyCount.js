class moneyCount extends Phaser.Scene {
    constructor() {
        super("moneyCount");
    }
    create() {
        const { width, height } = this.scale;

        //Tao vien ben canh Rcoin to
        const Rcoin_bar = this.add.nineslice(width -330, height-633, 'roosterbattle', 'currency_bg', 150, 0, 10, 10).setOrigin(1, 1);
        Rcoin_bar.setScale(0.65)

        //Tao Rcoin to phia tren screen
        const Rcoin = this.add.image(width - 427, height - 645, 'roosterbattle', 'token_rgold_big');
        Rcoin.setScale(0.3)

        //Tao tien
        const money_up = this.add.text( Rcoin_bar.x/2, Rcoin_bar.y/2-1, '100', {
            color: '#FFFFFF',
            fontFamily: 'Arial'
        })
    }
    update(){}
}

export default moneyCount;