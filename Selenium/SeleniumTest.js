const { Builder, By, Key } = require('selenium-webdriver');

async function example() {
    // Создаём инстанс вебдрайвера
    let driver = await new Builder().forBrowser('chrome').build();

    //переходим на страницу
    await driver.get('https://pomofocus.io/');

    // Получаем элемент таймера
    const timer = driver.findElement(By.id('timer-string'));

    //report
    const reportButton = driver.findElement(By.xpath(".//div[contains(text(), 'Report')]"));
    reportButton.click();
    const activitySummaryText = driver.findElement(By.xpath(".//div[text() = 'Activity Summary']"));







    // Вызываем на элементе события нажатия клавиш (ввод в поиск и Enter)
    //await input.sendKeys('Selenium WebDriver', Key.RETURN);


    //await driver.quit();
}
example();