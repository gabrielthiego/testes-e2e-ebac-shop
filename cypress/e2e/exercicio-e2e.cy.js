/// <reference types="cypress"/>

import produtosPage from "../support/page_objects/produtos.Page";


describe( 'Funcionalidade:cadastro', () => {


    beforeEach(() => {
      cy.visit('minha-conta')
      cy.login('gabrielteste@teste.com.br', 'teste@123' )
      cy.get('#primary-menu > .menu-item-629 > a').click()
     
});
    
      
it('deve colocar os produtos na lista', () => {
    function adicionarProduto(nomeProduto, tamanho, cor) {
        produtosPage.buscarProduto(nomeProduto);
        produtosPage.addCarrinho(tamanho, cor, 1);
        cy.get('.woocommerce-message').should('exist');
      }
      
      adicionarProduto('Abominable Hoodie', 'S', 'Blue');
      adicionarProduto('Apollo Running Short', '33', 'Black');
      adicionarProduto('Atlas Fitness Tank', 'M', 'Blue');
      adicionarProduto('Ariel Roll Sleeve Sweatshirt', 'XL', 'Purple');


cy.get('.dropdown-toggle > .text-skin > .icon-basket').click(); 

cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click(); 


cy.get('#billing_address_1').type('silva gomes');
cy.get('#billing_city').clear().type('Rio de Janeiro');
cy.get('#billing_postcode').clear().type('22350080');
cy.get('#billing_phone').clear().type('5551234567');
cy.get('#terms').click()
cy.get('#place_order').click()



cy.get('.page-title').should('exist')

 });

})
