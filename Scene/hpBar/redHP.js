class redHP extends Phaser.Scene {
    constructor() {
        super('redHP');
    }

    create() {
        //Tao thanh mau do
        const red_hp = this.add.nineslice(300, 100, 'roosterbattle', 'hp_red', 150, 0, 8, 8);
        red_hp.setScale(0.8)

        //Tao text Kelly Baker
        const red_name = this.add.text(360, 90, 'Kelly Baker', {
            color: '#FFFFFF',
            fontSize: '15px',
            fontFamily: 'Arial'

        }).setOrigin(1, 1);
    }
}

export default redHP;