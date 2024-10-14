class Thigh extends Phaser.Scene {
    constructor() {
        super("Thigh");
    }
    create() {
        const { width, height } = this.scale;

        const eq_right = this.add.image(180, 615, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        eq_right.setScale(0.55)

        //Tao background mau cho cac o trang bi
        const eq_bg_right = this.add.image(180, 615, 'roosterbattle', 'equip_rarity_red');
        eq_bg_right.setScale(0.55)

        //Tao trang bi cho rooster
        const eq_wep_right = this.add.image(178, 613, 'BachLinhKe', 'BronzeArmor/armor_bronze_thigh')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        eq_wep_right.setScale(0.55)

        //Tao text level cho cac trang bi
        const level_right = this.add.text(167, 628, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        });
    }
    update() { }
}

export default Thigh;