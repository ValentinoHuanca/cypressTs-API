import { url,endpoints } from '@date/Simple Books API.json'
import { randomNumInt } from '@helper/functions';

describe('TS|US2|Books',()=>{
    var id:number
    var typeBook:string
    it('TC1|BooksList', () => {
        cy.api({
            method:'GET',
            url:url+endpoints.bookList
        }).then(response=>{
            const body_type = response.body[0].type
            expect(response.status).to.eql(200)
            const rang1:number=response.body.length
            const randomId:number=randomNumInt(1,rang1)
            const type:string= response.body[(randomId-1)].type
            typeBook = type
            id = randomId
            console.log(id,typeBook)
            expect(body_type).to.eql('fiction')
        })
    });
    it('TC2|BookId', () => {
        cy.api({
            method:'GET',
            url:url+endpoints.bookList+`/${id}`
        }).then(response=>{
            expect(response.status).to.eql(200)
            const name:string = response.body.name
            const bookType:string = response.body.type
            expect(name).to.be.an('string')
            expect(bookType).to.eql(`${typeBook}`)
        })
    });
})