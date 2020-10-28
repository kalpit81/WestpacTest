/// <reference types="cypress"/>

import KiwiSaverRetCalc from '../WestPacPageObject/KiwiSaverRetCalc.spec'

const ksrc =new KiwiSaverRetCalc() //defined the object for the class

describe('User Story 1:- Verify Current Age Info Icon Text',function()
{
    it('Verify the Current Age field Icon Text',function(){
        ksrc.hoverKiwiSaverMenu()
        ksrc.clickKiwiSaverCalBtn().click()
        ksrc.clickHereToGetStartedBtn().click()
        ksrc.clickCurrentAgeInformationIconBtn()
        ksrc.compareCurrentAgeInfoIconText()
    })
})
//User story 1 :- Employed

describe('User Story 2A:- Status Employed Kiwisaver Retirement Calculations',function()
{
    it('Verify the Employed users Kiwisaver Projections',function()
    {
        ksrc.currentAge('30')
        ksrc.selectEmploymentStatus('employed').click()
        ksrc.salaryWageGross('82000')
        ksrc.checkKiwiSaverContribution().click()
        ksrc.selectRiskProfile('low').click()
        ksrc.viewKiwisaverSubmitBtn().click()
    })
})

describe('User Story 2B:- Status Self-Employed Kiwisaver Retirement Calculations',function()
{
    it('Verify the Self Employed users Kiwisaver Projections',function()
    {
        ksrc.currentAge('45')
        ksrc.selectEmploymentStatus('self-employed').click()
        ksrc.currentKiwiSaverBalance('100000')
        ksrc.voluntaryContributionAmount('90')
        ksrc.voluntaryContributionFrequency('Frequency','fortnight').click()
        ksrc.selectRiskProfile('medium').click()
        ksrc.savingGoalAmount('290000')
    })
})

describe('User Story 2C:- Status Not-Employed Kiwisaver Retirement Calculations',function()
{
    it('Verify the Not Employed users Kiwisaver Projections',function()
    {
        ksrc.currentAge('55')
        ksrc.selectEmploymentStatus('not-employed').click()
        ksrc.currentKiwiSaverBalance('140000')
        ksrc.voluntaryContributionAmount('10')
        ksrc.voluntaryContributionFrequency('Fortnightly','week').click()
        ksrc.selectRiskProfile('high').click()
        ksrc.savingGoalAmount('200000')
    })
})