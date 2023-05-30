const { Builder, By, Key} = require('selenium-webdriver');
const assert = require("assert");
var should = require("chai").should();
//SeleniumToDoListTest.js
async function example() {
    // Создаём инстанс вебдрайвера
    let driver = await new Builder().forBrowser('chrome').build();

    //переходим на страницу
    await driver.get("http://svelte3-todo.surge.sh/");
    driver.manage().window().maximize();

    const toDoInput = driver.findElement(By.className("js-todo-input"));
    await toDoInput.sendKeys("show the Selenium Test", Key.ENTER);

    //использование Ассерта
    let todoItemText = await driver.findElement(By.xpath(".//li[@class = 'todo-item ']/span")).getText().then(function (value){
        return value
    });

    todoItemText.should.equal("show the Selenium Tests");

    await driver.quit();
}
example();