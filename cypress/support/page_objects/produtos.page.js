class ProdutosPage{

    visitarUrl()  {
        cy.visit('produtos')
    
    }

     buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
     }

     buscarProdutoLista(nomeProduto){
        cy.get(' .product-block ')
        .contains(nomeProduto)
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

     }

     visitarProduto(nomeProduto){
          //cy.visit(`produto/${nomeProduto}`)

          const urlFormatada = nomeProduto.replace(/ /g, '-')
          cy.visit(`produtos/${urlFormatada}`)
     }

    addCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()             
       
    }

}

export default new ProdutosPage()