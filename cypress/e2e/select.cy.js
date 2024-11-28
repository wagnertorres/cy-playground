describe('Select', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve selecionar as linguagem que usam Node.js', () => {

        const langs = ['JavaScript', 'TypeScript']

        cy.get('input[placeholder^="Linguagens de programação"]') // ^ = expressão regular que inicia com determinado texto
            .click()

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$")) // $ = termina com
                .click()
        })

        cy.get('.language-item')
            .should('have.length', langs.length)
    })
})