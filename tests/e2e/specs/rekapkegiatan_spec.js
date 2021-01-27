describe('Pengujian Halaman Rekap Kegiatan', () => {
    it('Pengujian e2e Halaman Rekap Kegiatan', () => {
        const user = {
            email: 'ilhamtaufiq@gmail.com',
            password: 'cianjur22',
        }
        cy.visit('http://localhost:8080/2020/rekapkegiatan')
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="password"]').type(user.password).type('{enter}')
        cy.contains('Download Data').click()  
        cy.url().should('contain', 'http://localhost:8080/2020/rekapkegiatan')
        cy.contains('Accept').click()
    })
})
