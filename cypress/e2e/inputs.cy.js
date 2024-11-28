describe('Input Fields', () => {

    it('Deve preencher o campo texto', () => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()
    })
})