/// <reference types="cypress"/>

import produtosPage from "../support/page_objects/produtos.Page";


describe( 'Compras', () => {


    beforeEach(() => {
      cy.visit('minha-conta')
      cy.login('gabrielteste@teste.com.br', 'teste@123' )
      cy.get('#primary-menu > .menu-item-629 > a').click()
     
});
    
      
it('deve colocar os produtos na lista', () => {
    function adicionarProduto(nomeProduto, tamanho, cor) {
        produtosPage.buscarProduto(nomeProduto);
        produtosPage.addCarrinho(tamanho, cor, 1);
        cy.get('.woocommerce-message').should('contain','foi adicionado no seu carrinho.');
      }
      
      adicionarProduto('Aero Daily Fitness Tee', 'L', 'Brown');
      adicionarProduto('Ajax Full-Zip Sweatshirt', 'M', 'Green');
      adicionarProduto('Atlas Fitness Tank', 'M', 'Blue');
      adicionarProduto('Ariel Roll Sleeve Sweatshirt', 'XL', 'Purple');


cy.get('.dropdown-toggle > .text-skin > .icon-basket').click(); 

cy.get('#cart .checkout').click(); 


cy.get('#billing_address_1').type('silva gomes');
cy.get('#billing_city').clear().type('Rio de Janeiro');
cy.get('#billing_postcode').clear().type('22350080');
cy.get('#billing_phone').clear().type('5551234567');
cy.get('#terms').click()
cy.get('#place_order').click()



cy.wait(10000); 
cy.get('.page-title').should('contain', 'Pedido recebido');



 });

})
