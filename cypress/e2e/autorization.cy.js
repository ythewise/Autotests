describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('user_login');                                   // ввести верный логин
        cy.get('#pass').type('user_password');                                       // ввести верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('kendall.shiny40@centerghost.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('user_login');                                   // ввести верный логин
        cy.get('#pass').type('rpe4ka');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('kendall.shiny40@centerghost.com');
        cy.get('#pass').type('user_password');                                       // ввести верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('kendall.shiny40centerghost.com');
        cy.get('#pass').type('rpe4ka');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('User_lOgin');                                   // ввести верный логин, но с использованием заглавных букв
        cy.get('#pass').type('user_password');                                       // ввести верный пароль
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
})
    