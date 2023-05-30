const { Builder, By, Key} = require('selenium-webdriver');
const assert = require("assert");
var should = require("chai").should();
//SeleniumToDoListTestS.js
describe('web driver', () => {
    let driver;

    beforeEach(() => {
        driver = new Builder().forBrowser('chrome').build();
        //переходим на страницу
        driver.get("http://svelte3-todo.surge.sh/");
        driver.manage().window().maximize();
    });

    test('first test', async () => {

        const toDoInput = driver.findElement(By.className("js-todo-input"));
        await toDoInput.sendKeys("show the Selenium Test", Key.ENTER);

        //использование Ассерта
        let todoItemText = await driver.findElement(By.xpath(".//li[@class = 'todo-item ']/span")).getText().then(function (value){
            return value
        });

        todoItemText.should.equal("show the Selenium Tests");
    }, 10000);

    test('second test', async () => {

        const toDoInput = driver.findElement(By.className("js-todo-input"));
        await toDoInput.sendKeys("show the Selenium Test", Key.ENTER);

        //использование Ассерта
        let todoItemText = await driver.findElement(By.xpath(".//li[@class = 'todo-item ']/span")).getText().then(function (value){
            return value
        });

        todoItemText.should.equal("show the Selenium Tests!");
    }, 10000);

    afterEach(() => {
        driver.quit();
    });
});