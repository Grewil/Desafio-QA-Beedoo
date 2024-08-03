
describe('Desafio Beedoo QA Chalenge', function(){
  beforeEach(function(){
      cy.visit('https://creative-sherbet-a51eac.netlify.app/new-course')
      cy.title()
        .should('be.equal','Beedoo QA Tests')
  })

  it('CT 0002 - Cadastrar um curso oline com todas as informações obrigatórias.', function() {
    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('#f_b2dab530-576c-4a6d-8f6f-9cf79d3bc3cd').type('Curso 1')
    cy.get('#f_05646515-7798-4c9a-9642-c023ec818094').type('Curso 1 teste teste teste')
    cy.get('#f_1febd2a4-3e4f-42ee-bb80-319f4b91e5bd').type('João')
    cy.get('#f_f2f9a12c-5566-4cbc-b1ed-ae9cde30d777').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('#f_e7f83b7f-8699-41ae-b83d-98130e149157').type('02082024')
    cy.get('#f_ecdec4bd-1833-40c7-9a92-8333afcff427').type('05082024')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click().should('be.visible','Curso cadastrado com sucesso!')
   
  })

})

