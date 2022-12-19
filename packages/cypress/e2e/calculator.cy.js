describe('example calculator app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('최초에 계산기 값을 0으로 보여준다', () => {
    cy.get('#calculator_result').invoke('text').should('eq', '0')
  })

  it('AC(All Clear)버튼을 누르면 0으로 초기화 한다.', () => {
    cy.get('.calculator').contains('AC').click()

    cy.get('#calculator_result').invoke('text').should('eq', '0')
  })

  it('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    cy.get('.digit').contains('2').click()
    cy.get('.calculator').contains('+').click()
    cy.get('.digit').contains('4').click()
    cy.get('.calculator').contains('=').click()
    cy.get('#calculator_result').should('have.text', '6')
  })

  it('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    cy.get('.digit').contains('3').click()
    cy.get('.calculator').contains('-').click()
    cy.get('.digit').contains('2').click()
    cy.get('#calculator_result').should('have.text', '1')
  })

  it('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    cy.get('.digit').contains('3').click()
    cy.get('.calculator').contains('X').click()
    cy.get('.digit').contains('2').click()
    cy.get('#calculator_result').should('have.text', '6')
  })

  it('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    cy.get('.digit').contains('9').click()
    cy.get('.calculator').contains('/').click()
    cy.get('.digit').contains('3').click()
    cy.get('#calculator_result').should('have.text', '3')
  })

  it('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    cy.get('.digit').contains('3').click()
    cy.get('.calculator').contains('/').click()
    cy.get('.digit').contains('2').click()
    cy.get('#calculator_result').should('have.text', '1')
  })
})
