class Chest extends Phaser.Scene {
    constructor() {
        super("Chest");
    }
    create() {
        const { width, height } = this.scale;

        const eq_mid = this.add.image(120, 615, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        eq_mid.setScale(0.55)
        
        //Tao background mau cho cac o trang bi
        const eq_bg_mid = this.add.image(120, 615, 'roosterbattle', 'equip_rarity_green');
        eq_bg_mid.setScale(0.55)

        //Tao trang bi cho rooster
        const eq_wep_mid = this.add.image(123, 613, 'BachLinhKe', 'BronzeArmor/armor_bronze_chest')
        eq_wep_mid.setScale(0.54)

        //Tao text level cho cac trang bi
        const level_mid = this.add.text(107, 628, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        });
    }
    update() { }
}

export default Chest;