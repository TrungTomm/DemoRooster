class Thigh extends Phaser.Scene {
    constructor() {
        super("Thigh");
    }
    create() {
        const { width, height } = this.scale;

        const eq_right = this.add.image(340, 960, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao background mau cho cac o trang bi
        const eq_bg_right = this.add.image(eq_right.x, eq_right.y, 'roosterbattle', 'equip_rarity_red');

        //Tao trang bi cho rooster
        const eq_wep_right = this.add.image(eq_right.x, eq_right.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_thigh')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao text level cho cac trang bi
        const level_right = this.add.text(eq_right.x, eq_right.y +40 , 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 29,
            fontFamily: 'Arial'
        }).setOrigin(0.5,0.5);
    }
    update() { }
}

export default Thigh;