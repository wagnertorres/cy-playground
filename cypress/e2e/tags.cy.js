describe('Tags', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/tags', 'Tags')
    })

    it("Deve adicionar tags", () => {
        const tags = ['Cypress', 'JavaScript', 'NodeJS']

        tags.forEach(tag => {
            cy.get('.new-tag')
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500)
        })

        tags.forEach(tag => {
            cy.get('.tag-input')
                .should('contain', tag) // todas as tags estão dentro do 'elemento pai'?
        })
    })
})