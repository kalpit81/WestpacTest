import 'cypress-iframe';
import 'cypress-xpath';

//Hooks
before(()=>
{
    describe('Open the BaseURL Website',function()
    {
        cy.visit('/')
    })
    //cy.visit('/')
    describe('Initialize example.json file',function()
    {
        cy.fixture('example').then(function(data)
        {
        this.data=data
        })
    })
})

afterEach(function() 
{
    describe('Take Screenshot after every describe/it block ends',function()
    { // runs after each test in the it block
        cy.log("I am in afterEach")
        cy.screenshot()
    })
})
