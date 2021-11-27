# 강재혁 201840102
[11월 24일]
### key props의 역할

key는 react가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.

리액트 공식문서에는 컴포넌트 단위를 랜더링하는 리액트의 특성상 필요한 부분만 선택적으로 랜더링 하기위해 리액트 내부적으로 key 값이 필요하다고 해석했다.

### key를 이용하는 방법

프로퍼티 이름으로 전달하면 된다.
그런데, 이 때부터 id와 혼동이 된다

### key에 id를 써야하는가 뭘 도대체 써야하는가?

답은 없다. key값은 개발자들이 쓰는 것이 아니라, react가 필요한 것이고, 그것을 우리는 고유한 값으로 지정만 해주면 된다.
이는 리액트가 필요한 부분만 DOM에 넣어서 랜더링 할 수 있도록 함에 있다.
이는 성능상 비효율적인 부분을 줄인다.

### key 값은 고유한 값으로 줄 수 있는 방법은?
index활용

- map()의 두번째 인자로 인덱스를 받아 키값으로 사용하는 경우가 있다.
- 댓글 기능처럼 리스트를 삭제 한다는 것 까지 고려한다면 **index 활용은 부적절**하다.

### 문자열 사용

map인자 .toString()과 같이 고유한 문자열로 키값을 정해주는 방법도 있다.
그러나, 인자가 객체나 배열 형태면 안 좋다.

### ID값 사용

대부분의 경우 데이터의 ID값을 사용한다.
많은 이들이 객체(인자)에서 .id 로 추출하여 사용한다.

key는 형제 사이에서만 고유한 값이어야 한다.

위 3가지 중 하나를 이용하여 고유한 값을 key에 할당해줘야 하지만, 만약 map()을 여러번 써서 같은 모양이나 비슷한 모양의 리스트들이 있다면, 모든 리스트가 각각 고유한 키 값을 가질 필요는 없다.
하나의 map()으로 만들어진 형제같은 리스트들만 key의 고유성을 가지면 된다.

[11월 17일]

### 1번째 예제

```jsx
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
```

해설
render( ) 메소드는 데이터를 입력받아 화면에 반환하는 역할을 한다.
컴포넌트로 전달된 데이터는 render( ) 안에서 this.props를 통해 접근 가능하다.
React를 개발하는데 반드시 JSX를 써야 하는 것은 아니다.
JSX를 JavaScript로 확인하고 싶을 경우 Babel REPL을 사용한다.

### 2번째 예제

```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('timer-example')
);
```

컴포넌트는 `this.props`를 이용해 입력 데이터를 다루는 것 외에도 내부적인 상태 데이터를 가질 수 있습니다. 이는 `this.state`로 접근할 수 있습니다. 컴포넌트의 상태 데이터가 바뀌면 `render()`가 다시 호출되어 마크업이 갱신됩니다.

### 3번쨰 예제

```jsx
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
);
```

`props`와 `state`를 사용해서 간단한 Todo 애플리케이션을 만들 수 있습니다. 이 예제에서는 `state`를 사용해 사용자가 입력한 텍스트와 할 일 목록을 관리합니다. 이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, 실제로는 이벤트 위임을 통해 하나로 구현됩니다.

### 4번째 예제

```jsx
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('markdown-example')
);
```

React는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다. 이 예제에서는 외부 마크다운 라이브러리인 **remarkable**을 사용해 `<textarea>`의 값을 실시간으로 변환합니다.
[11월 10일]
###### 앱 배포
### package.json 수정
- "homepage": "https://github.com/kang-jae-heok/movie_app_2021" 추가
### 깃 허브 페이지  
- 설치 방법 : npm install gh-pages
- Github Pages는 정적인 페이지를 호스팅 해주는 서비스입니다.
- 호스팅하는 소스코드를 공개할 경우 무료입니다.
- 깃허브 리포지토리의 소스코드를 직접 호스팅해줍니다.
- 무료인것도 좋지만, 깃허브 리포지토리를 직접 호스팅해주는 것은 굉장한 강점입니다.
- 버전 관리 시스템인 Git을 통해 안정적으로 코드를 관리할 수 있습니다.


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


