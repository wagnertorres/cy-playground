describe('IFrame', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.goToMenu('/iframe', 'IFrame')
    })

    it('Deve preencher o formulário contido em um iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname')
                    .type('Wagner Torres')
            })
    })
})