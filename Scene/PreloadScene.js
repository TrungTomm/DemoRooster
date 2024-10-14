class PreloadScene extends Phaser.Scene {
    constructor() {
        super('PreloadScence');
    }

    preload() {
        //Load assets 
        this.load.atlas('roosterbattle', 'assets/roosterbattle_main.png', 'assets/roosterbattle_main.json');

        //Load spine assets
        this.load.spineBinary('rooster1-data', 'assets/rooster_spine/BachLinhKe.skel')
        this.load.spineAtlas('rooster1-atlas', 'assets/rooster_spine/BachLinhKe.atlas')

        this.load.spineBinary('rooster2-data', 'assets/rooster_spine/AnThienKe.skel')
        this.load.spineAtlas('rooster2-atlas', 'assets/rooster_spine/AnThienKe.atlas')

        //Load atlas de lay trang bi    
        this.load.atlas('BachLinhKe', 'assets/rooster_spine/BachLinhKe.png', 'assets/rooster_spine/BachLinhKe.json')
    }

    create() {
        //Chuyển scene sang scene tiếp theo
        this.scene.start('MainScene');
        this.scene.run('moneyCount');
        this.scene.run('greenHP');
        this.scene.run('redHP');
        this.scene.run('rooster1');
        this.scene.run('rooster2');
        this.scene.run('EquipementBg');
        this.scene.run('Leg');
        this.scene.run('Chest');
        this.scene.run('Neck');
        this.scene.run('Thigh');
        this.scene.run('Head');
        this.scene.run('LockEq');
        this.scene.run('Egg');
        this.scene.run('moneyReceived');
        this.scene.run('Battle');
        this.scene.run('Upgrade');
        this.scene.run('leaderBoard');
        this.scene.run('Reward');
    }
}

export default PreloadScene;