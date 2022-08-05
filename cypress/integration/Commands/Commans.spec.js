describe('Testes de API Comments', () => {

    it('GET', () =>{
        cy.request('GET','/api/Comments').then((response) => { // O GET VAI ME TRAZER TODOS OS COMENTÁRIOS QUE FORAM FEITOS PRO DEPUTADO X 
          expect(response.status).equal(200)
          expect(response.body.data[0]. stakeholderId).equal('xxxxxxx')
          expect(response.body).to.not.be.null
          expect(response.body.data).to.have.length(7) 

        })

    })


    it('POST', () =>{
        cy.request('','/api/Comments').then((response) => {
        

        })

    })

    it('PUT', () =>{
        cy.request('','/api/Comments').then((response) => {
        
        })

    })

    it('DELETE', () =>{
        cy.request('','/api/Comments').then((response) => {
        

        })

    })




})