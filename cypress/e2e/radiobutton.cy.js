describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado no Curso Cypress Skills', () => {
        cy.contains('label', 'Cypress').click();
    })
})