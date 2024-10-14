class greenHP extends Phaser.Scene {
    constructor() {
        super('greenHP');
    }

    create() {
        //Tao thanh mau xanh
        const green_hp = this.add.nineslice(85, 100, 'roosterbattle', 'hp_green', 150, 0, 8, 8);
        green_hp.setScale(0.8)

        //Tao text Henry Doan
        const green_name = this.add.text(110, 90, 'Henry Doan', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        }).setOrigin(1, 1);
    }
}

export default greenHP;