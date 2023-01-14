// import React from 'react';

// const TestPage = ({input}) => {
//   // 2가지 목적
//   // 첫째: 성능
//   // 둘째: 동일성
//   // const a = 10;
//   const b = 'my-str';
//   const c = false;
//   const a = {
//     name: 'Jack',
//     age: 24,
//   };

//   useEffect(() => {}, [a, b, c]);

//   const items = useMemo(() => [
//     {id: '1234', name: a, age: b, gender: 'male', address: '1234432432'}, // 1만개
//   ], [a, b]);

//   const statistics = useMemo(() => generateStatistics(input), [input, input2, input3]);

//   useCallback => useMemo 쉽게 쓰기
//   const myCallback = () => {
//     console.log('hello');
//   };
//   useEffect(() => {

//   }, [])

//   return (
//     <div>
//       <Statistics value={statistics} />
//       <div>
//         {useMemo(() => items.map((item) => {
//           return (
//             <div key={item}>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//               <span>이름: {item.name}</span>
//             </div>
//           );
//         }), [items])}
//       </div>

//     </div>
//   );
// };

// export default TestPage;
import React,{useState,useEffect, useMemo, useCallback} from 'react';

const TestPage = () => {
  const [count, setCount] = useState(0);

  // 외부 API 사용할 때 / 외부 라이프사이클에 의존해야 할 때
  // 성능 문제가 있을 때

  // const printCurrentCount = useMemo(() => () => {
  //   console.log('현재 카운트: ', count);
  // }, [count]);
  const printCurrentCount = useCallback(() => {
    console.log('현재 카운트: ', count);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(printCurrentCount, 1000);
    
    return () => clearInterval(intervalId);
  }, [printCurrentCount]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => { setCount(count + 1); }}>증가</button>
    </div>
  );
};

export default TestPage;

/*
렌더링 사이클
1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => 9

*/