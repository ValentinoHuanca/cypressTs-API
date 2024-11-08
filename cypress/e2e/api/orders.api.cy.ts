import { url,endpoints } from "@date/Simple Books API.json";
import { randomNumInt } from "@helper/functions";
import { faker } from "@faker-js/faker";

describe('TS|US3|Orders',()=>{
    var token:string="97ef12da8ba5b2f99e8af405e67eac113d39172275557a3fc58fb044eabbd64a"
    let bookId1:number=randomNumInt(1,6)
    let nameCustomer:string=faker.internet.username({firstName:'Johnathan'})
    var orderIdCreate:string
    it.skip('API Authentication', () => {
        cy.api({
            method:'POST',
            url:url+endpoints.apiAut,
            body:{
                clientName: faker.internet.username({firstName:'Johnathan'}),
                clientEmail: faker.internet.exampleEmail({firstName:'Johnathan'})
            }
        }).then(response=>{
            console.log(response)
            const tokenGene:string=response.body.accessToken
            token = tokenGene
        })
    });
    it('Submit an Order', () => {
        cy.api({
            method:'POST',
            url:url+endpoints.submitOrder,
            headers:{
                authorization:token
            },
            body:{
                bookId:bookId1,
                customerName:nameCustomer
            }
            
        }).then(response=>{
            console.log(response)
            const body = response.body
            expect(response.status).to.eql(201)
            expect(body.created).to.eql(true)
            expect(body.orderId).to.be.an('string')
            const orderId:string=body.orderId
            orderIdCreate = orderId
        })
    });
})