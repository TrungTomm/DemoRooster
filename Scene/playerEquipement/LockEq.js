class LockEq extends Phaser.Scene {
    constructor() {
        super("LockEq");
    }
    create() {
        const eq_lock_up = this.add.image(310, 555, 'roosterbattle', 'equip_lock_bg');
        eq_lock_up.setScale(0.55)
        const eq_lock_mid = this.add.image(310, 615, 'roosterbattle', 'equip_lock_bg');
        eq_lock_mid.setScale(0.55)
        const eq_lock_down = this.add.image(310, 675, 'roosterbattle', 'equip_lock_bg');
        eq_lock_down.setScale(0.55)
    }
    update() { }
}

export default LockEq;