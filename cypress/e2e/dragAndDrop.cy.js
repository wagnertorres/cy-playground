describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.goHome()
        cy.fazerLogin()
        cy.goToMenu('/tasks', 'Task Board')
    })

    it('Deve permitir mover um elemento', () => {
        const tarefa = 'Definir requisitos do projeto'

        const dataTransfer = new DataTransfer()

        //cy.get('[data-cy="1002"')
        cy.contains('div[draggable = true]', tarefa)
            .trigger('dragstart', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable = true]', tarefa)
            .should('be.visible')
    })
})