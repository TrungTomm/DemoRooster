class redHP extends Phaser.Scene {
    constructor() {
        super('redHP');
    }

    create() {
        const { width, height } = this.scale;

        //Tao thanh mau do
        const red_hp = this.add.nineslice(width*(width -150)/width, height*(height -590)/height, 'roosterbattle', 'hp_red', 230, 0, 8, 8);
        red_hp.setOrigin(0,0)
        red_hp.setScale(0.5)

        //Tao text Kelly Baker
        const red_name = this.add.text(red_hp.x, height - 610, 'Kelly Baker', {
            color: '#FFFFFF',
            fontSize: '15px',
            fontFamily: 'Arial'

        }).setOrigin(0, 0);
    }
}

export default redHP;