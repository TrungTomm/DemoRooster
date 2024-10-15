class EquipementBg extends Phaser.Scene {
    constructor() {
        super("EquipementBg");
    }
    create() {
        const { width, height } = this.scale;

        //Them player_equiq_bg
        const eq_bg = this.add.image(width / 2, height - 140, 'roosterbattle', 'player_equipments_bg');
        eq_bg.setScale(0.6, 0.65);
        
        //Them Background cac o trang bi
        const player_eq_decor = this.add.image(width -300, height - 170, 'roosterbattle', 'player_equipments_decor');
        player_eq_decor.setScale(0.54);
    }
    update() { }
}

export default EquipementBg;