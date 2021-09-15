# 강재혁 201840102
[ 09월 09일 ]
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


