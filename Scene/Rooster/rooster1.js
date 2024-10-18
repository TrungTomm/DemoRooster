class rooster1 extends Phaser.Scene {
    constructor() {
        super('rooster1');
    }

    create() {
        const { width, height } = this.scale;

        //Them rooster 1
        const rooster1 = this.add.spine(150, 510, 'rooster1-data', 'rooster1-atlas');
        rooster1.setScale(1)

        //Them skins cho rooster 1
        const skeletonData1 = rooster1.skeleton.data;
        // console.log(skeletonData1)
        const skin1 = new spine.Skin("custom");
        skin1.addSkin(skeletonData1.findSkin("bronze"))
        rooster1.skeleton.setSkin(skin1);
        rooster1.skeleton.setToSetupPose();

        //Tao hieu ung cho rooster 1
        rooster1.animationState.setAnimation(0, "idle", true);

    }

    update() { }
}

export default rooster1;