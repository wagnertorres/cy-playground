describe('CEP', () => {

    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.goToMenu('/cep', 'CEP (API dos Correios')
    })

    it('Deve cadastrar o endereço consumindo a API dos Correios', () => {
        const endereco = {
            cep: '88065462',
            logradouro: 'Rua das Três Palmeiras Reais',
            localidade: 'Florianópolis',
            uf: 'SC'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${endereco.cep}/json/`, {
            statusCode: 200,
            body: endereco
        }).as('getCep')

        cy.get('input[name="cep"')
            .type(endereco.cep)

        cy.contains('button', 'Cadastrar')
            .click()

        cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 10000 })
            .should('have.value', endereco.logradouro)

        cy.get('input[name="cidade"]')
            .should('have.value', endereco.localidade)

        cy.get('input[name="estado"]')
            .should('have.value', endereco.uf)
    })
})