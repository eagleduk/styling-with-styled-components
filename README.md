1. styled-components 시작
- yarn add styled-components
- css style을 함수형태로 js 파일에서 선언가능
- css 가 포함된 component 같이 동작한다.

2. 재사용성
- styled-components 의 ThemeProvider 을 사용하여 원하는 theme 을 component 에 부여할 수 있다. 마치 전역변수처럼
- styled-components 를 선언할때에는 props 로 변수를 받을 수 있고, 받은 변수로 함수를 만들어서 사용도 가능하다.
** 다양한 색상 함수를 사용하기 위한 라이브러리(https://polished.js.org/docs/) - yarn add polished

- 재사용성을 위해 변수별로 분기를 나누는 함수를 선언.
- 중복되는 항목에 대하여 리펙토링

3. Dialog
- ThemeProvider 의 내부에는 하나의 component만 가능하다.
- 기존 component 를 상속받아 새로운 스타일 component 를 만들 수 있다. styled([component])``;
