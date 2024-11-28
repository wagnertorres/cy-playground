describe('Upload', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.usuarioLogado()

        cy.goToMenu('/upload', 'Upload')
    })

    it('Deve anexar um arquivo .pdf', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(element => {
                expect(element[0].files[0].name).to.equal('doc.pdf')
            })
    })

    it('Deve anexar um arquivo .jpg', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                expect(element[0].files[0].name).to.equal('liga.jpg')
            })

        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', 'blob')
    })
})