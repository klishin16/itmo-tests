import { Builder, By, Key } from 'selenium-webdriver';

const URL = 'http://svelte3-todo.surge.sh/';

describe('web driver', () => {
    let driver;

    // Создаём драйвер перед выполнением тестов
    beforeAll(() => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();
    });

    // Тест добавления таска
    test('add a task', async () => {
        // Выполняем переход на страницу
        driver.get(URL);

        // Возвращаем промис из теста
        return driver.findElement(By.className('js-todo-input')).sendKeys('Build App', Key.ENTER)
            // Асинхнронные запросы оборачиваем в цепочку промиса
            .then(() => driver.getPageSource())
            .then((source) => {
                expect(source.includes('Build App')).toBe(true);
            });
    }, 1000);

    // Тест отметки таска как пройденного
    test('mark a task complete', () => {
        driver.get(URL);

        return driver.findElement(By.className('js-todo-input')).sendKeys('Build App', Key.ENTER) // Создаём таск
            // Перед изменением таска, проверяем что он не завершен, для этого проверяем класс
            .then(() => driver.findElement(By.className('todo-item')).getAttribute('class')) // получаем класс, асинхронный запрос
            .then((className) => {
                // проверяем что класс не содержит 'done'
                expect(className.includes('done')).toBe(false);
                // Вызываем клик по задаче (отмечаем что она завершена)
                // это асинхронная операция, поэтому возвращаем промис
                return driver.findElement(By.css('label')).click();
            })
            // Снова получаем класс, асинхронный запрос, поэтому оборачиваем в цепочку then
            .then(() => driver.findElement(By.className('todo-item')).getAttribute('class'))
            .then((className) => {
                // Проверяем имя класса
                expect(className.includes('done')).toBe(true);
            });
    }, 1000);

    test('delete a task', () => {
        driver.get(URL);

        // Перед удалением также создаем таск
        return driver.findElement(By.className('js-todo-input')).sendKeys('Build App', Key.ENTER)
            // Кликаем по кнопке удаления
            .then(() => driver.findElement(By.className('delete-todo')).click())
            // Получаем содержимое страницы
            .then(() => driver.getPageSource())
            .then((source) => {
                // Проверяем что таск удалён
                expect(source.includes('Build App')).toBe(false);
            });
    }, 1000);

    afterAll(() => {
        driver.quit();
    });
});