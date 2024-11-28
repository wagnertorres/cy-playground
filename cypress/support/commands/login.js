Cypress.Commands.add('goHome', () => {
    cy.visit('/')

    cy.contains('h2', 'Faça login')
        .should('be.visible')
})

Cypress.Commands.add('fazerLogin', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.usuarioLogado()
})

Cypress.Commands.add('login', (email, senha) => {
    if (email) {
        cy.get('[data-cy="email"]').type(email)
    }
    if (senha) {
        cy.get('[data-cy="password"]').type(senha)
    }    
    cy.get('[data-cy="login-button"]').click()
})

Cypress.Commands.add('usuarioLogado', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')
})