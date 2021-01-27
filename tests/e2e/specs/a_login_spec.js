describe('Pengujian Halaman Login', () => {
  it('Pengujian e2e Halaman Login', () => {
    const user = {
      email: 'ilhamtaufiq@gmail.com',
      password: 'cianjur22'
    }
    cy.visit('http://localhost:8080/pages/login')
    cy.get('input[name="email"]').type(user.email)
    cy.get('input[name="password"]').type(user.password).type('{enter}')
    cy.get('.vs-con-dropdown').click()
    cy.contains('Logout').click()
    cy.url().should('contain', 'http://localhost:8080/')
  })
})