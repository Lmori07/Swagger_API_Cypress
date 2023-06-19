describe("Post Creation Type",() => {

    it.skip("Post Creation #1 - Hard coded JSON Object", () => {
        //Body example we are trying to pass
        const requestBody = {
            "tourist_name":"Wanda",
            "tourist_email":"wada123@gmail.com",
            "tourist_location":"USA"
        }

        //For every request email should be diffrent.
        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }
            ).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq("Wanda")
                expect(response.body.tourist_email).to.eq("wada123@gmail.com")
                expect(response.body.tourist_location).to.eq("USA")
            })
    })

    it.skip("Post Creation #2 - Random Generated JSON Object", () => {
        //Body example we are trying to pass
        const requestBody = {
            "tourist_name":Math.random().toString(5).substring(2),
            "tourist_email":Math.random().toString(5).substring(2)+"@gmail.com",
            "tourist_location":"MX"
        }

        //For every request email should be diffrent.
        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }
            ).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })
    })

    it("Post Creation #3 - Using Fixture folder JSON Object", () => {
        
        let myTouristData
        cy.fixture("tourist").then((myFixtureData) => {
            myTouristData = myFixtureData
        })

        //When taking whole fixture file in body on the request method should also be included.
        cy.request(
            {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: myTouristData
            }
            ).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(this.myTouristData.tourist_name)
                expect(response.body.tourist_email).to.eq(myTouristData.tourist_email)
                expect(response.body.tourist_location).to.eq(myTouristData.tourist_location)
            })
    })

})