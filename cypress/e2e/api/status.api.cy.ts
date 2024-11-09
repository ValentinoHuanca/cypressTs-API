import { url } from '@date/Simple Books API.json'

describe('TS|US1|Status',()=>{
    it('TC1', () => {
        cy.api({
            method:'GET',
            url:url

        }).then(response=>{
            expect(response).to.be.an('object')
            expect(response.status).to.eql(200)
        })

    });
    
})