class redHP extends Phaser.Scene {
    constructor() {
        super('redHP');
    }

    create() {
        const { width, height } = this.scale;

        //Tao thanh mau do
        const red_hp = this.add.nineslice(460, 150, 'roosterbattle', 'hp_red', 200, 0, 8, 8);
        red_hp.setOrigin(0,0)

        //Tao text Kelly Baker
        const red_name = this.add.text(red_hp.x, red_hp.y-35, 'Kelly Baker', {
            color: '#FFFFFF',
            fontSize: '30px',
            fontFamily: 'Arial'
        }).setOrigin(0, 0);
    }
}

export default redHP;