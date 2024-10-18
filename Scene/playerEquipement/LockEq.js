class LockEq extends Phaser.Scene {
    constructor() {
        super("LockEq");
    }
    create() {
        const { width, height } = this.scale;

        const eq_lock_up = this.add.image(570, 850, 'roosterbattle', 'equip_lock_bg');
        const eq_lock_mid = this.add.image(eq_lock_up.x, eq_lock_up.y + 110, 'roosterbattle', 'equip_lock_bg');
        const eq_lock_down = this.add.image(eq_lock_up.x, eq_lock_mid.y + 110, 'roosterbattle', 'equip_lock_bg');
    }
    update() { }
}

export default LockEq;