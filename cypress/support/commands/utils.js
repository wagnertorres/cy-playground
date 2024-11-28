Cypress.Commands.add('goToMenu', (route, title) => {
    cy.get(`nav a[href="${route}"]`)
        .click();

    cy.contains('h2', title)
        .should('be.visible')
})

Cypress.Commands.add('verificarMensagemPopup', (texto) => {
    cy.get('.notice p')
        .should('be.visible')
        .and('have.text', texto)
})

Cypress.Commands.add('selecionarTodosOsCheckboxesPorId', (seletor = 'input[type="checkbox"]') => {
    cy.get(seletor).each(($checkbox) => {
        const id = $checkbox.attr('id');
        if (id) {
            cy.get(`input#${id}`).then(($input) => {
                if (!$input.is(':checked')) {
                    cy.get(`label[for="${id}"]`).click();
                }
            });
        }
    });
});