
describe('Проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio/');//захожу на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//"Проверяю цвет кнопки восстановить пароль"
    });
    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден пользователю
    });


    it('Верный логин и верный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверка видимости текста


    })
    it('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();//Нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');//ввел почту восстановления
        cy.get('#restoreEmailButton').click();//Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю на совпадение текст

    })

    it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');//Ввел верный логин
        cy.get('#pass').type('iLoveqastudio7');//Ввел верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');


    })

    it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('shuryan@yandex.ru');//Ввел неверный логин
        cy.get('#pass').type('iLoveqastudio7');//Ввел верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');


    })

    it('Проверка, что в логине есть собачка', function () {
        cy.get('#mail').type('germandolnikov.ru');//Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверка видимости текста

    })

    it('Проверка на введение строчных букв в логине', function () {      ///данный тест по заданию должен упасть:)
        cy.get('#mail').type('GerMan@Dolnikov.ru');//Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввел верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible');//Проверка видимости текста


    })



})


//Найти поле логин и ввести верный логин
//Найти поле пароль и Ввести правильный пароль
//Найти кнопку войти и нажать на нее


//запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrom
