class Neck extends Phaser.Scene {
    constructor() {
        super("Neck");
    }
    create() {
        const { width, height } = this.scale;

        const eq_left = this.add.image(width -360, height -230 + 60, 'roosterbattle', 'equip_none_bg')
        .setInteractive()
        .on('pointerdown', () => console.log(1))
        eq_left.setScale(0.55)

        //Tao background mau cho cac o trang bi
        const eq_bg_left = this.add.image(eq_left.x, height -230 + 60, 'roosterbattle', 'equip_rarity_green');
        eq_bg_left.setScale(0.55)

        //Tao trang bi cho rooster
        const eq_wep_left = this.add.image(eq_left.x, height -230 + 60, 'BachLinhKe', 'BronzeArmor/armor_bronze_neck')
        .setInteractive()
        .on('pointerdown', () => console.log(1))

        eq_wep_left.setScale(0.57)

        //Tao text level cho cac trang bi
        const level_left = this.add.text(eq_left.x-12, height -230 + 60 + 14, 'Lv.1', {
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'Arial'
        });
    }
    update() { }
}

export default Neck;