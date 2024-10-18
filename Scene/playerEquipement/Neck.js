class Neck extends Phaser.Scene {
    constructor() {
        super("Neck");
    }
    create() {
        const { width, height } = this.scale;

        const eq_left = this.add.image(120, 960, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao background mau cho cac o trang bi
        const eq_bg_left = this.add.image(eq_left.x, eq_left.y, 'roosterbattle', 'equip_rarity_green');

        //Tao trang bi cho rooster
        const eq_wep_left = this.add.image(eq_left.x, eq_bg_left.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_neck')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao text level cho cac trang bi
        const level_left = this.add.text(eq_left.x, eq_left.y +40, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 29,
            fontFamily: 'Arial'
        }).setOrigin(0.5,0.5);
    }
    update() { }
}

export default Neck;