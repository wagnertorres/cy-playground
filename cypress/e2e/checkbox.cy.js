describe('Checkbox', () => {

    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.goToMenu('/checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam Node.js', () => {
        cy.get('label[for="javascript"]')
            .click()
        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as linguagens', () => {
        cy.selecionarTodosOsCheckboxesPorId()

        // const linguagens = ['javascript', 'python', 'rust', 'go', 'typescript'];

        // linguagens.forEach((linguagem) => {
        //     cy.get(`input#${linguagem}`)
        //         .then(($checkbox) => {
        //             if (!$checkbox.is(':checked')) {
        //                 cy.get(`label[for="${linguagem}"]`).click();
        //             }
        //         });
        // });

        // cy.get('input[type="checkbox"]')
        //     .each(($checkbox) => {
        //         if (!$checkbox.is(':checked')) {
        //             cy.wrap($checkbox)
        //                 .parent()
        //                 .click()
        //         }
        //     })
    })
})