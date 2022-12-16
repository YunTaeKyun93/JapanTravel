import { useRef, useState, useEffect } from "react";
import "./App.css";
import MainPage from "./pages/main-page/index";

function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;

/*

<html>
  <div 
    id='red' 
    style='background-color: red; width: 100px; height: 100px'
  />
  <button id='button'>색 바꾸기</button>

  <script>
    document.getElementById('button').addEventListener('click', () => {
      document.getElementById('red').style['background-color'] = 'blue';
    });
  </script>
</html>

DOM Element

dangerouslySetInnerHTML

const [backgroundColor, setBackgroundColor] = useState('red');

<div>
    <div style={{backgroundColor, width: 100, height: 100}}/>
    <button onClick={() => {setBackgroundColor('blue')}}>색 바꾸기</button>
</div>


createRef => 클래스 컴포넌트

useRef => 함수형 컴포넌트

document.getxxxByxxx

const elementRef = useRef();

<div ref={elementRef}/>

// 리액트
const elementRef = useRef();

console.log(elementRef.current); // element 있나? 없나? 첫번째: undefined, 두 번째 렌더: 값

const action = () => {
  elementRef.current.setCursorPosition(10);
};
return <input ref={elementRef}/>;


// 바닐라 JS
const element = document.getElementById('asf');
element.setCursorPosition(10);

useRef




const A = () => {
  const myRef = useRef(3);
  const [a, setA] = useState();

  return (
    <div>
      <button onClick={() => {
        // React: 선언형
        // 명령형
        myRef.current++;
        myRef.current++;
        myRef.current++;
      }}>myRef에 1 추가하기</button>
      <p>{myRef.current}</p>
    </div>
  );
}
*/
