class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }
    create() {
        const { width, height } = this.scale;

        // Thêm bức ảnh vào scene
        const bg = this.add.image(width / 2, height / 2, 'roosterbattle', 'bg');
        // Thiết lập kích thước bức ảnh để vừa vặn khung hình
        bg.setDisplaySize(width, height);

        // const gameAPI = 'https://ton.roosterbattle.net/#tgWebAppData=query_id%3DAAGZ6nRTAwAAAJnqdFN1PXu5%26user%3D%257B%2522id%2522%253A7842622105%252C%2522first_name%2522%253A%2522Trung%2522%252C%2522last_name%2522%253A%2522Tom%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1728009640%26hash%3Da676c621fec4d4bdc8eddeb2a53677fdb7aaa077e14cf235e5301a061285535d&tgWebAppVersion=7.10&tgWebAppPlatform=weba&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23ffffff%22%2C%22text_color%22%3A%22%23000000%22%2C%22hint_color%22%3A%22%23707579%22%2C%22link_color%22%3A%22%233390ec%22%2C%22button_color%22%3A%22%233390ec%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22secondary_bg_color%22%3A%22%23f4f4f5%22%2C%22header_bg_color%22%3A%22%23ffffff%22%2C%22accent_text_color%22%3A%22%233390ec%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22section_header_text_color%22%3A%22%23707579%22%2C%22subtitle_text_color%22%3A%22%23707579%22%2C%22destructive_text_color%22%3A%22%23e53935%22%7D'
        
        // fetch(gameAPI)
        // .then(function(response) {
        //     return response.json();
        // })
        // .then(function(game){
        //     console.log(game);
        // })


    }

    update() { }
}

export default MainScene;