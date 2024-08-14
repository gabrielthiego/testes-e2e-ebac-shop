/// <reference types="cypress" />



import {faker} from '@faker-js/faker';



describe('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')




});
it.only('fazer compr de 4 produtos no site', () => {
   
    var nome = faker.person.firstName()
    var sobrenome = faker.person.lastName()
    var email = faker.internet.email(nome,sobrenome)
    var senha = faker.internet.password()

     cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)                
    cy.get('#account_last_name').type(sobrenome)               
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

 
   });
});
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
    });



