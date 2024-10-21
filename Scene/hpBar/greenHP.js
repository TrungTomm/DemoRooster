class greenHP extends Phaser.Scene {
    constructor() {
        super('greenHP');
    }

    create() {
        const { width, height } = this.scale;

        //Tao thanh mau xanh
        const green_hp = this.add.nineslice(50, 150, 'roosterbattle', 'hp_green', 200, 0, 8, 8);
        green_hp.setOrigin(0, 0)
       
        //Tao text Henry Doan
        const green_name = this.add.text(green_hp.x, green_hp.y-35, 'Henry Doan', {
            color: '#FFFFFF',
            fontSize: 30,
            fontFamily: 'Arial'
        }).setOrigin(0, 0);
    }
}

export default greenHP;