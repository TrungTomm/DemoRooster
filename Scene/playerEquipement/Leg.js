class Leg extends Phaser.Scene {
    constructor() {
        super("Leg");
    }
    create() {
        const { width, height } = this.scale;

        const eq_down = this.add.image(230, 1070, 'roosterbattle', 'equip_none_bg')
            .setInteractive()
            .on('pointerdown', () => console.log(1))

        //Tao background mau cho cac o trang bi
        const eq_bg_down = this.add.image(eq_down.x, eq_down.y, 'roosterbattle', 'equip_rarity_green');

        //Tao trang bi cho rooster
        const eq_wep_down = this.add.image(eq_down.x, eq_down.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_leg')

        //Tao text level cho cac trang bi
        const level_down = this.add.text(eq_down.x, eq_down.y + 40, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 29,
            fontFamily: 'Arial'
        }).setOrigin(0.5, 0.5);
    }
    update() { }
}

export default Leg;