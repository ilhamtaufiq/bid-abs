// https://docs.cypress.io/api/introduction/api.html

describe('Pengujian Halaman Login', () => {
  it('Pengujian e2e Halaman Login', () => {
    const user = {
        email: 'ilhamtaufiq@gmail.com',
        password: 'cianjur22'
    }


    cy.visit('http://localhost:8080/')
    cy.get('input[name="email"]').type(user.email)
    cy.get('input[name="password"]').type(user.password) .type('{enter}')
    //cy.contains('Login').click()  
    // ensure the login page sends you home after login
    cy.url().should('contain', 'http://localhost:8080/')


})

})
