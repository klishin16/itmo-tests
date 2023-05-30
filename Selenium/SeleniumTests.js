const { Builder, By, Key } = require('selenium-webdriver');

async function example() {
    // Создаём инстанс вебдрайвера
    let driver = await new Builder().forBrowser('chrome').build();

    //переходим на страницу
    await driver.get('https://www.google.com/');

    // Получаем элемент ввода
    const input = driver.findElement(By.name('q'));

    // Вызываем на элементе события нажатия клавиш (ввод в поиск и Enter)
    await input.sendKeys('Selenium WebDriver', Key.RETURN);


    await driver.quit();
}
example();