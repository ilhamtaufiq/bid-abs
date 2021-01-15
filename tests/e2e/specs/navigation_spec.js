context('Pengujian Navigasi', () => {
    it('Pengujian e2e navigasi', () => {
        const user = {
            email: 'ilhamtaufiq@gmail.com',
            password: 'cianjur22',
        }

      cy.visit('http://localhost:8080');
      cy.get('input[name="email"]').type(user.email)
      cy.get('input[name="password"]').type(user.password) .type('{enter}')
      
      cy.get(':nth-child(1) > .con-vs-tooltip > .p-2 > .feather').click()
      cy.get(':nth-child(2) > .con-vs-tooltip > .p-2 > .feather').click()
      cy.get(':nth-child(3) > .con-vs-tooltip > .p-2 > .feather').click()
      cy.get(':nth-child(4) > .con-vs-tooltip > .p-2 > .feather').click()
      cy.get(':nth-child(5) > .con-vs-tooltip > .p-2 > .feather').click()




  
    });
  });
  