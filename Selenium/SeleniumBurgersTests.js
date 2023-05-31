const {Builder, By} = require('selenium-webdriver');
const assert = require("assert");

//npx mocha --no-timeouts 'SeleniumBurgersTests.js'
describe("burger tab tests", function () {

    let driver;

    // Создаём драйвер перед выполнением тестов
    beforeEach(() => {
        // Создаём инстанс вебдрайвера
        driver = new Builder()
            .forBrowser('chrome')
            .build();

        //переходим на страницу
        driver.get('https://stellarburgers.nomoreparties.site/');
        driver.manage().window().maximize();
    });

    it("select Sauces tab test", async function () {

        // Получаем элемент таба Соусы
        const saucesTab = driver.findElement(By.xpath(".//div/span[text()='Соусы']"));

        //кликаем по Табу Соусы
        await saucesTab.click();

        //Получаем элемент текущего Таба
        const currentTab = driver.findElement(By.xpath(".//div[@class='tab_tab__1SPyG tab_tab_type_current__2BEPc pt-4 pr-10 pb-4 pl-10 noselect']/span"));

        //Получаем текст элемента
        let currentButtonText = await currentTab.getText().then(function (value) {
            return value;
        });

        //nodejs Ассерт
        assert.strictEqual(currentButtonText, "Соусы");
    });

    it("select Buns tab test", async function () {

        // Получаем элемент таба Булки
        const bunsTab = driver.findElement(By.xpath(".//div/span[text()='Булки']"));

        // Получаем элемент таба Соусы
        const saucesTab = driver.findElement(By.xpath(".//div/span[text()='Соусы']"));

        await saucesTab.click();
        await bunsTab.click();

        //Получаем элемент текущего Таба
        const currentTab = driver.findElement(By.xpath(".//div[@class='tab_tab__1SPyG tab_tab_type_current__2BEPc pt-4 pr-10 pb-4 pl-10 noselect']/span"));

        //Получаем текст элемента
        let currentButtonText = await currentTab.getText().then(function (value) {
            return value;
        });

        //nodejs Ассерт
        assert.strictEqual(currentButtonText, "Булки");
    });

    it("select Topping tab test", async function () {


        // Получаем элемент таба Начинки
        const toppingTab = driver.findElement(By.xpath(".//div/span[text()='Начинки']"));

        await toppingTab.click();

        //Получаем элемент текущего Таба
        const currentTab = driver.findElement(By.xpath(".//div[@class='tab_tab__1SPyG tab_tab_type_current__2BEPc pt-4 pr-10 pb-4 pl-10 noselect']/span"));

        //Получаем текст элемента
        let currentButtonText = await currentTab.getText().then(function (value) {
            return value;
        });

        //nodejs Ассерт
        assert.strictEqual(currentButtonText, "Начинки!");
    });

    afterEach(() => {
        driver.quit();
    });

});