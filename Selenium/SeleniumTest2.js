import { Builder, By, Key, until } from 'selenium-webdriver';

describe('web driver', () => {
    let driver;

    test('google first result', async () => {
        // Создаём инстанс вебдрайвера
        driver = new Builder().forBrowser('chrome').build();

        // Выполняем переход на страницу
        driver.get('https://www.google.com');

        // Получаем элемент ввода
        const input = driver.findElement(By.name('q'));

        // Вызываем на элементе события нажатия клавиш (ввод в поиск и Enter)
        await input.sendKeys('hello', Key.ENTER);

        // Дожидаемся пока не появится элемент и получаем его
        const firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);

        // Выводим содержимое элемента
        console.log(await firstResult.getAttribute('textContent'));
    }, 10000);

    afterEach(() => {
        driver.quit();
    });
});