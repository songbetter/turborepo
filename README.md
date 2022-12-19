## Practice Cypress - [Calculator](https://639b3e322717d5e4cbdaf6b4-gwriyqasfy.chromatic.com/iframe.html?id=ui-calculator--default&viewMode=story)

> 한 번에 하나의 연산자만 사용할 수 있도록 구현되었습니다. ex) 1+1+1 (x) 1+1 (o)


0. 테스트 환경에 visit
```
 beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
```

1. 최초에 계산기 값을 0으로 보여준다
```
cy.get('#calculator_result').invoke('text').should('eq', '0')
```

2. AC(All Clear)버튼을 누르면 0으로 초기화 한다.
```
cy.get('.operator').contains('AC').click() // 'AC' (All Clear)버튼을 클릭한다.

cy.get('#calculator_result').invoke('text').should('eq', '0') // 변화된 값이 최초의 값과 같은지 확인한다.
```

3. 2개의 숫자에 대해 덧셈이 가능하다.
```
cy.get('.digit').contains('2').click() // digit 중 '2'를 클릭한다.
cy.get('.operator').contains('+').click() // operator 중 '+'를 클릭한다.
cy.get('.digit').contains('4').click() // digit 중 '4'를 클릭한다.
cy.get('.operator').contains('=').click() // operator 중 '='을 클릭한다.
cy.get('#calculator_result').should('have.text', '6') // 변화된 값이 2+4 = 6과 같은지 확인한다.
```

4. 2개의 숫자에 대해 뺄셈이 가능하다.
```
cy.get('.digit').contains('3').click() // digit 중 '3'를 클릭한다.
cy.get('.operator').contains('-').click() // operator 중 '-'를 클릭한다.
cy.get('.digit').contains('2').click() // digit 중 '2'를 클릭한다.
cy.get('.operator').contains('=').click() // operator 중 '='을 클릭한다.
cy.get('#calculator_result').should('have.text', '1') // 변화된 값이 3-2 = 1과 같은지 확인한다.
```

5. 2개의 숫자에 대해 곱셈이 가능하다.
```
cy.get('.digit').contains('3').click() // digit 중 '3'를 클릭한다.
cy.get('.operator').contains('-').click() // operator 중 'X'를 클릭한다.
cy.get('.digit').contains('2').click() // digit 중 '2'를 클릭한다.
cy.get('.operator').contains('=').click() // operator 중 '='을 클릭한다.
cy.get('#calculator_result').should('have.text', '6') // 변화된 값이 3x2 = 6과 같은지 확인한다.
```

6. 2개의 숫자에 대해 나눗셈이 가능하다.
```
cy.get('.digit').contains('9').click() // digit 중 '9'를 클릭한다.
cy.get('.operator').contains('/').click() // operator 중 'X/를 클릭한다.
cy.get('.digit').contains('3').click() // digit 중 '3'를 클릭한다.
cy.get('.operator').contains('=').click() // operator 중 '='을 클릭한다.
cy.get('#calculator_result').should('have.text', '3') // 변화된 값이 9/3 = 3과 같은지 확인한다.
```

7. 계산 결과를 표현할 때 소수점 이하는 버림한다
```
cy.get('.digit').contains('3').click() // digit 중 '3'를 클릭한다.
cy.get('.operator').contains('/').click() // operator 중 '/'를 클릭한다.
cy.get('.digit').contains('2').click() // digit 중 '2'를 클릭한다.
cy.get('.operator').contains('=').click() // operator 중 '='을 클릭한다.
cy.get('#calculator_result').should('have.text', '1') // 변화된 값이 3/2 = 1과 같은지 확인한다.
```

### Reference
- [하루만에 Cypress로 작성하는 자바스크립트 E2E 테스트 코드](https://www.inflearn.com/course/%EC%8B%B8%EC%9D%B4%ED%94%84%EB%A0%88%EC%8A%A4-%ED%85%8C%EC%8A%A4%ED%8A%B8)
