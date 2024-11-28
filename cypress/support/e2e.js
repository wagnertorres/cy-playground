import './commands'

// Configuração global para capturar erros não tratados
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Erro não tratado capturado:', err.message)
    // Retorna falso para impedir que o erro falhe o teste
    return false
  })
  
  // // Configuração global para resolução da viewport
  // beforeEach(() => {
  //   cy.viewport(1920, 1080)
  // })