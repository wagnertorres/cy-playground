describe('Tags', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Janeiro')

        cy.get('input[aria-label="Year"]')
            .type('1983')

        cy.get('span[aria-label*="11"]') // *=: Procura elementos cujo atributo contém o valor fornecido.
            .click()
    })
})