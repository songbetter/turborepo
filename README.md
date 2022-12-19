## Practice Cypress - [Conuter](https://639b3e322717d5e4cbdaf6b4-gwriyqasfy.chromatic.com/iframe.html?id=ui-counter--default&viewMode=story)

0. 테스트 환경에 visit
```
 beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
```

1. 최초에 카운터 값을 0으로 보여준다
```
cy.get('#counter_value').invoke('text').should('eq', '0')
```

2. '+' 버튼 클릭 시 count가 1 증가한다
```
cy.get('#counter_value') // 기존 값을 가져온다
  .invoke('text')
  .then((value) => {
    const preValue = Number(value)
    cy.contains('+').click() // + 버튼을 클릭한다
    cy.get('#counter_value') // 변화된 값이 기존값 +1인지 확인한다.
      .invoke('text')
      .should('eq', String(preValue + 1))
    })
```

3. '-' 버튼 클릭 시 count가 1 감소한다
```
cy.contains('+').click() // + 버튼을 클릭해서 기존값을 1로 만든다.
cy.get('#counter_value') // 기존값 1을 가져온다
  .invoke('text')
  .then((value) => {
    const preValue = Number(value)
    cy.contains('-').click() // - 버튼을 클릭한다.
    cy.get('#counter_value') 
      .invoke('text')
      .should('eq', String(preValue - 1)) // 변화된 값이 기존값 -1인지 확인한다.
    })
```

4. '+' 버튼 클릭 시 count가 10이 넘는경우 더이상 증가하지 못한다.
```
for (let i = 0; i <11; i++) {
  cy.contains('+').click() // 버튼을 10번 클릭하여 값을 10으로 만든다.
}

cy.get('#counter_value').invoke('text').should('eq', '10') // 변화된 값이 10인지 확인한다. (= 11이 아니라)
```

5. '-' 버튼 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다.
```
cy.contains('-').click() // 기준값이 0에서 - 버튼을 클릭한다.
cy.get('#counter_value').invoke('text').should('eq', '0') // 변화된 값이 0인지 확인한다. (= 변하지 않는다.)

```
 
6. reset 버튼 클릭 시 count가 0으로 초기화된다.
```
cy.contains('+').click() // + 버튼을 클릭한다.
cy.contains('reset').click() // reset 버튼을 클릭한다.
cy.get('#counter_value').invoke('text').should('eq', '0') // 변화된 값이 0인지 확인한다.
```

### Reference
- [하루만에 Cypress로 작성하는 자바스크립트 E2E 테스트 코드](https://www.inflearn.com/course/%EC%8B%B8%EC%9D%B4%ED%94%84%EB%A0%88%EC%8A%A4-%ED%85%8C%EC%8A%A4%ED%8A%B8)
