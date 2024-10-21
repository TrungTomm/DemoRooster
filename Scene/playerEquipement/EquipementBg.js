class EquipementBg extends Phaser.Scene {
    constructor() {
        super("EquipementBg");
    }
    create() {
        const { width, height } = this.scale;

        //Them player_equiq_bg
        const player_equipments_bg = this.add.nineslice(width / 2, 980, 'roosterbattle', 'player_equipments_bg',680,0,30,30);
        
        //Them Background cac o trang bi
        const player_eq_decor = this.add.image(230, 960, 'roosterbattle', 'player_equipments_decor');

    }
    update() { }
}

export default EquipementBg;