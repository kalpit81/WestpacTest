/// <reference types="cypress"/>
///<reference types="cypress-iframe" />


class KiwiSaverRetCalc
{
    //Start of User story 1 functions()
    hoverKiwiSaverMenu()
    {
          return cy.get(Cypress.env('KiwiSaverMenu_id')).trigger('mouseover')      
    } 
 
    clickKiwiSaverCalBtn()
    {
          return cy.get(Cypress.env('KiwiSaverCalBtn_id'),{timeout:3000})
    }
 
    clickHereToGetStartedBtn()
    {
          return cy.contains('[href="/kiwisaver/calculators/kiwisaver-calculator/"]','Click here to get started.',{timeout:3000})
    }
 
     clickCurrentAgeInformationIconBtn()
    {
         //return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//*[contains(@class,'current-age')]//i",{timeout:2000}).should('be.visible').click()
         return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//*[contains(@class,'current-age')]//i",{timeout:2000}).should('be.visible').click()
    }
 
    compareCurrentAgeInfoIconText()
     {
         return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//*[contains(@class,'current-age')]//p").should("have.text", Cypress.env('CurrentAgeInfoIconText'))
         //cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//*[contains(@class,'current-age')]//p").should("have.text", 'This calculator has an age limit of 64 years old as you need to be under the age of 65 to join KiwiSaver.')
     }

     //End of User Story 1
   
  //Start of User story 2 functions()
   currentAge(age)
   {
    return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//*[contains(@class,'current-age')]//input",{timeout:5000}).should('be.visible').type(age)      
   } 

   selectEmploymentStatus(status)
   {
       
       cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='EmploymentStatus']//div[@class='control-well']").click()
       return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//li[@value='"+status+"']")  
   }

   salaryWageGross(salary)
   {
        return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='AnnualIncome']//input").type(salary)
   }

    checkKiwiSaverContribution()
   {
        return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='KiwiSaverMemberContribution']//input[@value='4']")       
   }

   selectRiskProfile(riskVal)
   {
       return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='RiskProfile']//div[@value='"+riskVal+"']")
   }
   
   viewKiwisaverSubmitBtn()
   {
          return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@class='field-group-set']/button")
   }

   currentKiwiSaverBalance(balanceAmt)
   {
          return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='KiwiSaverBalance']//input").type(balanceAmt)
   }

   voluntaryContributionAmount(contriAmt)
   {
          return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='VoluntaryContributions']//input").type(contriAmt)
   }

   voluntaryContributionFrequency(currentVal, frequencyVal)
   {
        cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='VoluntaryContributions']//span[contains(.,'"+currentVal+"')]").first().click()
        return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//li[@value='"+frequencyVal+"']")
   }

   selectRiskProfile(riskProfileVal)
   {
    return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@help-id='RiskProfile']//input[@value='"+riskProfileVal+"']").click()
   }

   savingGoalAmount(savingsAmt){
     return cy.iframe(Cypress.env('iFrameCalcPath'),{timeout:5000}).xpath("//div[@model='ctrl.data.SavingsGoal']//input").type(savingsAmt)
   }

   //End of User story 2
}
export default KiwiSaverRetCalc