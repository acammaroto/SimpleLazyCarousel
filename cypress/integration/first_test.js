describe('My First Test', () => {
    it('Visits the excercise app', () => {
        cy.visit('http://localhost:4200/')
    })
    it('finds the "next" arrow in carousel', () => {
        cy.visit('http://localhost:4200/')

        cy.contains('Next')
    })
    it('clicks on the arrow next', () => {
        cy.visit('http://localhost:4200/')

        cy.contains('Next').click()
    })
    it('click on the arrow next should go to the next image loding it lazy', () => {
        cy.visit('http://localhost:4200/')

        cy.contains('Next').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.get('.carousel-inner').find('div').should(($div) => {
            expect($div).to.have.length(3)
        })
    })
})