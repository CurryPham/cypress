describe('Multiple elems matching interaction', () => {
    it('should be able to interact with list of element', () => {
        cy.visit("/login")

        // cy.get("input").eq(0).type("tomsmith")
        // cy.get("input").eq(1).type("SuperSecretPassword!")

        // cy.get("input").then(items => {
        //     cy.get(items[0]).clear()
        //     cy.get(items[0]).type("tomsmith")
        //     cy.get(items[1]).clear()
        //     cy.get(items[1]).type("SuperSecretPassword!")
        // })

        cy.get("input").each((item, index) => {
            cy.get(item).type("something")
        })

        cy.get("button[type='submit']").click()
        cy.wait(2000)
    });
});