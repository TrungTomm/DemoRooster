class moneyReceived extends Phaser.Scene {
    constructor() {
        super('moneyReceived');
    }

    create() {
        const { width, height } = this.scale;

        //Tao Rcoin duoi trung
        const coin_bg = this.add.nineslice(width / 2, 1210, 'roosterbattle', 'hatch_currency_bg', 80, 0, 30, 10);
        
        //Tao money duoi trung
        const money_down = this.add.text(width/2 - 7 , 1200, '100', {
            color: '#FFFFFF',
            fontSize: 20,
            fontFamily: 'Arial',
            }
        )
    }
    update(){}
}

export default moneyReceived;