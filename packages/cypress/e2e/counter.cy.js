describe('example calculator app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('최초에 카운터 값을 0으로 보여준다', () => {
    cy.get('#counter_value').invoke('text').should('eq', '0')
  })

  it('+ 버튼 클릭 시 count가 1 증가한다', () => {
    /*
     * 기존 값을 가져온다.
     * + 버튼을 클릭한다.
     * 변화된 값이 기존값 + 1인지 확인한다.
     */
    cy.get('#counter_value')
      .invoke('text')
      .then((value) => {
        const preValue = Number(value)
        cy.contains('+').click()
        cy.get('#counter_value')
          .invoke('text')
          .should('eq', String(preValue + 1))
      })
  })

  it('- 버튼 클릭 시 count가 1 감소한다', () => {
    /*
     * + 버튼을 클릭해서 기존값을 1로 만든다.
     * 기존값인 1을 가져온다
     * - 버튼을 클릭한다.
     * 변화된 값이 기존값 -1인지 확인한다.
     */
    cy.contains('+').click()

    cy.get('#counter_value')
      .invoke('text')
      .then((value) => {
        const preValue = Number(value)
        cy.contains('-').click()
        cy.get('#counter_value')
          .invoke('text')
          .should('eq', String(preValue - 1))
      })
  })

  it('+ 버튼 클릭 시 count가 10이 넘는경우 더이상 증가하지 못한다.', () => {
    /*
     * + 버튼을 10번 클릭하여 값을 10으로 만든다
     * 변화된 값이 10인지 확인한다.
     */
    for (let i = 0; i < 11; i++) {
      cy.contains('+').click()
    }

    cy.get('#counter_value').invoke('text').should('eq', '10')
  })

  it('- 버튼 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다.', () => {
    /*
     * - 버튼을 클릭한다.
     * 기존값이 0인지 확인한다.
     */
    cy.contains('-').click()

    cy.get('#counter_value').invoke('text').should('eq', '0')
  })

  it('reset 버튼 클릭 시 count가 0으로 초기화된다', () => {
    /*
     * + 버튼을 클릭한다.
     * reset 버튼을 클릭한다.
     * 0인지 확인한다.
     */
    cy.contains('+').click()

    cy.contains('reset').click()
    cy.get('#counter_value').invoke('text').should('eq', '0')
  })
})
