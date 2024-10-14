class rooster2 extends Phaser.Scene {
    constructor() {
        super('rooster2');
    }

    create() {
        //Tao rooster 2
        const rooster2 = this.add.spine(300, 330, 'rooster2-data', 'rooster2-atlas');

        //Them skins cho rooster 2
        const skeletonData2 = rooster2.skeleton.data;
        // console.log(skeletonData2)
        const skin2 = new spine.Skin("custom");
        skin2.addSkin(skeletonData2.findSkin("gold"))
        rooster2.skeleton.setSkin(skin2);
        rooster2.skeleton.setToSetupPose();
        rooster2.setScale(-0.6, 0.6)

        //Tao hieu ung cho rooster 2
        rooster2.animationState.setAnimation(0, "idle", true);

    }

    update() { }
}

export default rooster2;