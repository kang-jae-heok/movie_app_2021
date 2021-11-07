# 강재혁 201840102
[11월 3일]
###### 컴퓨터 설치오류
- npm cache clean --force
- npm rebuild
- rm -rf node_modules
- npm install
###### pakage.json package-lock.json 의 차이
- pakage.json은 의존성 파일
###### 오류가 난 이유
- • npm install 을 진행하더라도 서로 다른 node_modules트리를 생성하는 경우가 발생한다.
- • 이것은 npm의 버전이 다른 경우, npm 알고리즘의 차이가 나기 때문이다.
- • 그래서 팀원 간의 문제가 발행하면 npm버전부터 확인한다.
 - • 그리고 package-lock.json파일이 있으면 npm install명령은 package.json을 사용하지 않고
package-lock.json 을 사용하여 node-modules 를 생성한다
[10월 26일]
###### react-router-dom
- 설치하기 npm instal react-router-dom
- BrowserRouter - history API를 사용해 URL과 UI를 동기화하는 라우터입니다.
- Route - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
- Link - 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동합니다. 기록이 - history스택에 저장됩니다.
- Switch - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 
렌더링합니다.  Switch를 사용하면 BrowserRouter만 사용할 때와 다르게 하나의 매칭되는 요소만 렌더링한다는 점을 보장해줍니다.
사용하지 않을 경우 매칭되는 모두를 렌더링합니다.

[10월 13일]
- Movie 컴포넌트 만들기
- Movie.propTypes 작성
- axios.get() 수정하기
- App 컴포넌트에서  Movie 컴포넌트 그리기
- map()함수에 컴포넌트를 반환하는 함수 전달
- Movie컴포넌트에 props 전달하기
- ※ HTML의 class와 자바스크립트의 class라는 이름이 겹치면 리액트가 혼란스러울 수 있다
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

[09월 22일]
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


