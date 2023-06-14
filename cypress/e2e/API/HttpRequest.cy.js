describe('HTTP Request', () => {
    it('GET Call', () =>{
        cy.request('GET', 'http://localhost:9000/books')
            .its('status')
            .should('equal', 200)
    })

    it('POST Call', () =>{
        //On the post request we are sending several parameters in order to make it possible to
        //that's why we are using {} to specify the parameters we are sending on each method
        cy.request({
            method: 'POST',
            url: 'http://localhost:9000/books',
            body: {
                "id": "d5fE_asz",
                "title": "The Third Book",
                "author": "Darianna Franco Mendez"
            }
        }).its('status')
        .should('equal', 200);
    })

    it('PUT Call', () =>{
        //On the post request we are sending several parameters in order to make it possible to
        //that's why we are using {} to specify the parameters we are sending on each method
        //On the PUT the body field that are been update should not have "" only the value.
        cy.request({
            method: 'PUT',
            url: 'http://localhost:9000/books/d5fE_asz',
            body: {
                id: "d5fE_asz",
                title: "The Second Book",
                author: "Jose Dariel Morillo Franco"
            }
        }).its('status')
        .should('equal', 200);
    })

    it.only('DELETE Call', () =>{
        //On the post request we are sending several parameters in order to make it possible to
        //that's why we are using {} to specify the parameters we are sending on each method
        //Same as GET on DELETE we are specifying the id that is going to be deleted.
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:9000/books/d5fE_asz',
        }).its('status')
        .should('equal', 200);
    })
})