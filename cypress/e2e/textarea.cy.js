describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher o campo de área de texto', () => {
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type("Boas vindas ao curso de Cypress com o Papito.")
    })
})