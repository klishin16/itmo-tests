const { Builder, By, Key} = require('selenium-webdriver');
const assert = require("assert");
var should = require("chai").should();
//SeleniumBurgersTest.js
async function example() {
    // Создаём инстанс вебдрайвера
    let driver = await new Builder().forBrowser('chrome').build();

    //переходим на страницу
    await driver.get('https://stellarburgers.nomoreparties.site/');
    //driver.manage().window().maximize();

    // Получаем элемент таба Булки
    const bunsTab = driver.findElement(By.xpath(".//div/span[text()='Булки']"));

    // Получаем элемент таба Соусы
    const saucesTab = driver.findElement(By.xpath(".//div/span[text()='Соусы']"));

    // Получаем элемент таба Начинки
    const toppingTab = driver.findElement(By.xpath(".//div/span[text()='Начинки']"));

    await saucesTab.click();

    //текущий Таб
    const currentTab = driver.findElement(By.xpath(".//div[@class='tab_tab__1SPyG tab_tab_type_current__2BEPc pt-4 pr-10 pb-4 pl-10 noselect']/span"));

    let currentButtonText = await currentTab.getText().then(function (value) {
        return value;
    });

    assert.strictEqual(currentButtonText, "Соуы")


    await driver.quit();
}

example();