import PreloadScene from "./Scene/PreloadScene.js";
import MainScene from "./Scene/MainScene.js";
import moneyCount from "./Scene/moneyCount.js";
import Upgrade from "./Scene/DownSideBar/Upgrade.js";
import greenHP from "./Scene/hpBar/greenHP.js";
import redHP from "./Scene/hpBar/redHP.js";
import rooster1 from "./Scene/Rooster/rooster1.js";
import rooster2 from "./Scene/Rooster/rooster2.js";
import Egg from "./Scene/DownSideBar/Gacha/Egg.js";
import moneyReceived from "./Scene/DownSideBar/Gacha/moneyReceived.js";
import Battle from "./Scene/DownSideBar/Battle.js";
import Reward from "./Scene/DownSideBar/Reward.js";
import Chest from "./Scene/playerEquipement/Chest.js";
import EquipementBg from "./Scene/playerEquipement/EquipementBg.js";
import Head from "./Scene/playerEquipement/Head.js";
import Neck from "./Scene/playerEquipement/Neck.js";
import Thigh from "./Scene/playerEquipement/Thigh.js";
import Leg from "./Scene/playerEquipement/Leg.js";
import LockEq from "./Scene/playerEquipement/LockEq.js";
import leaderBoard from "./Scene/DownSideBar/leaderBoardButton/leaderBoard.js";
import leaderBoardPopup from "./Scene/DownSideBar/leaderBoardButton/leaderBoardPopup.js";

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.RESIZE, // Sử dụng chế độ RESIZE
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        PreloadScene,
        MainScene,
        moneyCount,
        greenHP,
        redHP,
        rooster1,
        rooster2,
        EquipementBg,
        Head,
        Neck,
        Thigh,
        Leg,
        Chest,
        LockEq,
        Egg,
        moneyReceived,
        Battle,
        Upgrade,
        leaderBoard,
        Reward,
        leaderBoardPopup,
    ],
    plugins: {
        scene: [{
            key: "spine.SpinePlugin",
            plugin: spine.SpinePlugin,
            mapping: "spine"
        }],
    }
}


new Phaser.Game(config);

