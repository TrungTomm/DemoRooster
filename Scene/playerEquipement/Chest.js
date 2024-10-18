class Chest extends Phaser.Scene {
    constructor() {
        super("Chest");
    }
    create() {
        const { width, height } = this.scale;

        const eq_mid = this.add.image(230 , 960 , 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        
        //Tao background mau cho cac o trang bi
        const eq_bg_mid = this.add.image(eq_mid.x, eq_mid.y, 'roosterbattle', 'equip_rarity_green');

        //Tao trang bi cho rooster
        const eq_wep_mid = this.add.image(eq_mid.x, eq_mid.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_chest')

        //Tao text level cho cac trang bi
        const level_mid = this.add.text(eq_mid.x, eq_mid.y +40, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 29,
            fontFamily: 'Arial'
        }).setOrigin(0.5,0.5);
    }
    update() { }
}

export default Chest;