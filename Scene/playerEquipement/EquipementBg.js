class EquipementBg extends Phaser.Scene {
    constructor() {
        super("EquipementBg");
    }
    create() {
        const { width, height } = this.scale;

        //Them player_equiq_bg
        const eq_bg = this.add.image(width / 2, height - 215, 'roosterbattle', 'player_equipments_bg');
        eq_bg.setScale(0.55);

    }
    update() { }
}

export default EquipementBg;