class moneyReceived extends Phaser.Scene {
    constructor() {
        super('moneyReceived');
    }

    create() {
        const { width, height } = this.scale;

        //Tao Rcoin duoi trung
        const coin_bg = this.add.nineslice(width / 2, height - 40, 'roosterbattle', 'hatch_currency_bg', 80, 0, 30, 10);
        coin_bg.setScale(0.6);
        
        //Tao money duoi trung
        const money_down = this.add.text(width/2-3, coin_bg.y-7, '100', {
            color: '#FFFFFF',
            fontSize: 11,
            fontFamily: 'Arial',
            }
        )
    }
    update(){}
}

export default moneyReceived;