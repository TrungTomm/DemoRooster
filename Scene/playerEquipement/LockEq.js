class LockEq extends Phaser.Scene {
    constructor() {
        super("LockEq");
    }
    create() {
        const { width, height } = this.scale;

        const eq_lock_up = this.add.image(width - 100, height -230, 'roosterbattle', 'equip_lock_bg');
        eq_lock_up.setScale(0.55)
        const eq_lock_mid = this.add.image(eq_lock_up.x, eq_lock_up.y + 60, 'roosterbattle', 'equip_lock_bg');
        eq_lock_mid.setScale(0.55)
        const eq_lock_down = this.add.image(eq_lock_up.x, eq_lock_up.y + 120, 'roosterbattle', 'equip_lock_bg');
        eq_lock_down.setScale(0.55)
    }
    update() { }
}

export default LockEq;