# 강재혁 201840102
[10월 06일]
###### constructor 
- 생성자 함수 제일 먼저 실행됨 
- state 값을 초기화 하거나 메서드를 바인딩 할떄 사용
- super(props)를 선언을 권고함  * super 는 부모클래스 생성자의 참조
- 생성자 내에서는 setState 사용안함 this.state를 사용
- 외부 api를 직접 호출 x componentDidMount()를 사용

###### axios
- 사용 법 npm i axios , import axios from "axios"
- api 호출
###### aysnc await
- aysnc await 비동기 처리 
- callback 함수 단점 보완
[ 09월 29일]
학습내용
### main 브랜치로 바꾸기
- master 브랜치에서 main 브랜치로 바뀜
- git branch -m master main 
### 깃 클론따는법
- git hub 들어가서 코드를 누르고 주소 따오기
- git clon "주소"
- yarn or npm 해주기(필요한 모듈들 다운)

### key props warning 이 뜨는이유 
- 고유의 값이 없기떄문 id값 추가하면 없어짐

### proptypes
- npm install prop-type
### state
- props 는 정적인 데이터만 다룰 수 있지만 state 는 동적인것을 다룰수 있다
- state ={ key: value}
- state를 변경할때는 직접적으로 변경하지말고 setState()함수를 사용한다
- state를 직접 변경하면 render함수가 재실행이 됨으로 setState() 이용

### render 함수
- App.js 는 jsx를 반환하지만 return을 쓸 수 없어 render함수에서 return을 해준다







[ 09월 15일 ]
학습내용
- export를 해줘야 외부에서 사용가능
- props : 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환
- props 의 객체를 불러올떄는 props.객체 형식으로 쓴다
- 구조분해 할당 : props = { 객체 } 형식으로 선언을 해주던가  function ({객체})  형식으로 선언을 하면 그냥 객체만 쓸 수 있다
- map 함수로 구조분해 할당을 간단히 할 수 있다 배열을 만들고 그걸 map함수로 넣어주면 됨



[ 09월 08일 ]
학습내용
-  앱 만들기 : npx create-react-app 만들 app이름 
- 컴포넌트 추가 : import App from './App'; 추가해주기
- jsx : 자바스크립트와 HTML 문법을 조합한것
- 컴포넌트는 무조권 대문자로 시작
- 다른 곳에서 쓸려면 export default Potato; 이렇게 하면 됨 
- index.js 에서는 하나의 컴포넌트만 가능
<code>
 ex)
 function Potato(){
  return(
    I love potato
  );
}
</code>
<br>


