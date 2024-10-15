class greenHP extends Phaser.Scene {
    constructor() {
        super('greenHP');
    }

    create() {
        const { width, height } = this.scale;

        //Tao thanh mau xanh
        const green_hp = this.add.nineslice(width*(width -385)/width, height*(height - 590)/height, 'roosterbattle', 'hp_green', 230, 0, 8, 8);
        green_hp.setOrigin(0, 0)
        green_hp.setScale(0.5)

        //Tao text Henry Doan
        const green_name = this.add.text(green_hp.x, height - 610, 'Henry Doan', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        }).setOrigin(0, 0);
    }
}

export default greenHP;