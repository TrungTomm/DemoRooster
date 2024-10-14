class Egg extends Phaser.Scene {
    constructor() {
        super('Egg');
    }

    create() {
        const { width, height } = this.scale;

        //Them bottom-bg-menu
        const bt_me_bg = this.add.image(width / 2, height - 115, 'roosterbattle', 'bottom_menu_bg');
        bt_me_bg.setScale(0.55);

        //Tao ro trung back
        const nest_back = this.add.image(width / 2, height - 95, 'roosterbattle', 'nest_back');
        nest_back.setScale(0.6)

        //Tao ro trung truoc
        const nest_front = this.add.image(width / 2, height - 95, 'roosterbattle', 'nest_font');
        nest_front.setScale(0.6)

        //Tao trung 
        const egg = this.add.image(width / 2, height - 115, 'roosterbattle', 'egg_icon');
        egg.setScale(0.55)

        //Tao chu HATCH
        const HATCH = this.add.image(197, height - 65, 'roosterbattle', 'hatch_text');
        HATCH.setScale(0.6)
    }

    update() { }
}

export default Egg;