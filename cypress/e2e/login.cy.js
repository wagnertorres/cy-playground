describe('Login', () => { // agrupador de test case

  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => { // test case
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.usuarioLogado()
  })

  it('Não deve logar com senha válida', () => { // test case
    cy.login('papito@cyskills.com.br', 'showtime1')
    cy.verificarMensagemPopup('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => { // test case
    cy.login('404@cyskills.com.br', 'showtime1')
    cy.verificarMensagemPopup('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail inválido', () => { // test case
    cy.login('www.cyskills.com', 'showtime1')
    cy.verificarMensagemPopup('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar sem o e-mail preenchido', () => {
    cy.login('', 'showtime1')
    cy.verificarMensagemPopup('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem a senha preenchida', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.verificarMensagemPopup('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem e-mail e senha preenchida', () => {
    cy.login('', '')
    cy.verificarMensagemPopup('Parece que você esqueceu de informar seu e-mail.')
  })
})