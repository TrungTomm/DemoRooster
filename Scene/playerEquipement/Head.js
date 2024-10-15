class Head extends Phaser.Scene {
    constructor() {
        super("Head");
    }
    create() {
        const { width, height } = this.scale;

        const eq_up = this.add.image(width -330 +10, height -230, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        eq_up.setScale(0.55)

        //Tao background mau cho cac o trang bi
        const eq_bg_up = this.add.image(eq_up.x, eq_up.y, 'roosterbattle', 'equip_rarity_yellow');
        eq_bg_up.setScale(0.55)

        //Tao trang bi cho rooster
        const eq_wep_up = this.add.image(eq_up.x, eq_up.y, 'BachLinhKe', 'BronzeArmor/armor_bronze_helmet')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        eq_wep_up.setScale(0.57)

        //Tao text level cho cac trang bi
        const level_up = this.add.text(eq_up.x -12, eq_up.y+14, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'

        });
    }
    update() { }
}

export default Head;