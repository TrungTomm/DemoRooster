class Head extends Phaser.Scene {
    constructor() {
        super("Head");
    }
    create() {
        const { width, height } = this.scale;

        const eq_up = this.add.image(230, 850, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao background mau cho cac o trang bi
        const eq_bg_up = this.add.image(eq_up.x, eq_up.y, 'roosterbattle', 'equip_rarity_yellow');

        //Tao trang bi cho rooster
        const eq_wep_up = this.add.image(eq_up.x, eq_up.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_helmet')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        //Tao text level cho cac trang bi
        const level_up = this.add.text(eq_up.x , eq_up.y + 40, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 29,
            fontFamily: 'Arial'

        }).setOrigin(0.5,0.5);
    }
    update() { }
}

export default Head;