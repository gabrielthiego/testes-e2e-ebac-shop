/// <reference types="cypress" />




describe('Teste de Login', () => {
    before(() => {
        cy.fixture('perfil').then((perfil) => {
            cy.login(perfil.usuario, perfil.senha);
        });
    });

    it('Deve logar com sucesso usando dados gerados dinamicamente', () => {
        cy.visit('minha-conta');
        cy.get('.page-title').should('contain', 'Minha conta');
    });
});
/// <referemne tuypes="cypress"/>
//import { faker } from '@faker-js/faker';
import { ProdutosPage } from "../support/page_objects/produtosPage/ProdutosPage";

describe( 'Compras', () => {


    beforeEach(() => {
      cy.visit('minha-conta')
      cy.login('gabrielteste@teste.com.br', 'teste@123' )
      cy.get('#primary-menu > .menu-item-629 > a').click()
});
produtosPage.buscarProduto('Abominable Hoodie')
produtosPage.addCarrinho('S','Blue', 1)
cy.get('.woocommerce-message').should('exist')
cy.get('#primary-menu > .menu-item-629 > a').click()
 produtosPage.buscarProduto('Apollo Running Short')
 produtosPage.addCarrinho('33','Black', 1)
 cy.get('.woocommerce-message').should('exist')
 cy.get('#primary-menu > .menu-item-629 > a').click()