class Leg extends Phaser.Scene {
    constructor() {
        super("Leg");
    }
    create() {
        const { width, height } = this.scale;

        const eq_down = this.add.image(width -330 +10, height - 230 + 120, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        eq_down.setScale(0.55)

        //Tao background mau cho cac o trang bi
        const eq_bg_down = this.add.image(eq_down.x, eq_down.y, 'roosterbattle', 'equip_rarity_green');
        eq_bg_down.setScale(0.55)

        //Tao trang bi cho rooster
        const eq_wep_down = this.add.image(eq_down.x, eq_down.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_leg')

        eq_wep_down.setScale(0.57)

        //Tao text level cho cac trang bi
        const level_down = this.add.text(eq_down.x-12, eq_down.y+15, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        });
    }
    update() { }
}

export default Leg;