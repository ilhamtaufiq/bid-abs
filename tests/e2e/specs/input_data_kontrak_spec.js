describe('Pengujian Halaman Input Data Kegiatan', () => {
    it('Pengujian e2e Halaman Input Data Kegiatan', () => {
      const user = {
          email: 'ilhamtaufiq@gmail.com',
          password: 'cianjur22',
      }
      cy.visit('http://localhost:8080/2020/rekapkegiatan')
      cy.get('input[name="email"]').type(user.email)
      cy.get('input[name="password"]').type(user.password) .type('{enter}')
      cy.contains('Tambah').click()  
      // ensure the login page sends you home after login
      cy.url().should('contain', 'http://localhost:8080/2020/datakontrak')
      cy.get(':nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('Nama Pekerjaan') // Input 'Nama Pekerjaan kedalam 'input'
      cy.get(':nth-child(2) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('Nama Kegiatan') // Type 'Hello, World' into the 'input'
      cy.get(':nth-child(3) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('Nama Desa') // Type 'Hello, World' into the 'input'
      cy.get(':nth-child(4) > .mb-2 > .vs-component > .vs-con-input > .vs-inputx').type('Nama Kecamatan') // Type 'Hello, World' into the 'input'
      cy.get(':nth-child(4) > .mb-6 > .vs-component > .vs-con-input > .vs-inputx').type('Nomor Kontrak') // Type 'Hello, World' into the 'input'
      cy.get(':nth-child(5) > .mb-2 > .vs-component > .vs-con-input > .vs-inputx').type('1919191')
      cy.get(':nth-child(5) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('Nama Rekanan')
      cy.get('.vs-button-text').click()
  })
})
  