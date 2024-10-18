class Egg extends Phaser.Scene {
    constructor() {
        super('Egg');
    }

    create() {
        const { width, height } = this.scale;

        //Them bottom-bg-menu
        const bottom_menu_bg = this.add.nineslice(width / 2, 1170, 'roosterbattle', 'bottom_menu_bg', 710, 0, 0, 0);

        //Tao ro trung back
        const nest_back = this.add.image(width / 2, 1210, 'roosterbattle', 'nest_back');

        //Tao ro trung truoc
        const nest_front = this.add.image(width / 2, nest_back.y, 'roosterbattle', 'nest_font');

        //Tao trung 
        const egg_icon = this.add.image(width / 2, 1170, 'roosterbattle', 'egg_icon');

        //Tao chu HATCH
        const hatch_text = this.add.image(width / 2, 1255, 'roosterbattle', 'hatch_text');
    }

    update() { }
}

export default Egg;