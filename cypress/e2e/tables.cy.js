describe('Tables', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/tables', 'Tables')
    })

    it('Deve validar a linha do Github', () => {
        // const linhaEncontrada = ['Github', 'papitodev', 'Ativo', '1004']

        // cy.get('table tbody').within(() => {
        //     linhaEncontrada.forEach(valor => {
        //         cy.contains(valor).should('exist')
        //     })
        // })

        const linhaEncontrada = ['Github', 'papitodev', 'Ativo']

        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .within(() => {
                linhaEncontrada.forEach(valor => {
                    cy.contains(valor)
                    .should('exist')
                })
            })
    })

    it('Deve remover uma rede social', () => {
        const redeSocial = 'Facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()

        cy.contains('button','Excluir')
            .click()

        cy.get('table tbody')
            .should('not.contain', redeSocial)
    })

    it('Deve permanecer na table ao cancelar a exclusão', () => {
        const redeSocial = 'Youtube'

        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click()

        cy.contains('button','Cancelar')
            .click()

        cy.get('table tbody')
            .should('contain', redeSocial)
    })

    it('Deve validar o link que abre o instagram em outra aba', () => {
        const id = 'instapapito'

        cy.contains('table tbody tr', id)
            .contains('a', 'Visitar')
            .should('have.attr', 'href', 'https://instagram.com/instapapito')
            .and('have.attr', 'target', '_blank')
    })
})