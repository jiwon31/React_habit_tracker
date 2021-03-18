import React, { useCallback, useEffect, useRef, useState } from "react";

// state나 props가 변경되면 이 전체 코드블럭이 반복해서 호출된다.
const SimpleHabit = (props) => {
  // useState: 리액트 훅에서 state를 사용
  // 변수를 두 가지로 선언. count와 count를 업데이트할 수 있는 setCount함수
  // useState를 호출하게 되면 state(여기선 count) 값과 setCount 두개를 리턴해준다.
  // useState는 계속 호출되어도 count는 따로 저장이 되어져 있어서 0으로 초기화되지 않고 동일한 값을 받아온다.
  const [count, setCount] = useState(0); // 0은 count의 초기값

  // createRef는 코드블럭이 계속해서 호출될 때마다 함께 호출되어서 새로운 레퍼런스를 만들어 새로운 것을 할당하게 된다.
  // 이렇게 반복적으로 만들지 않기 위해서 useRef를 사용한다.
  // useRef는 호출할 때마다 새로운 레퍼런스를 만들지 않고 한 번만 만들어 메모리에 저장해놓고 그것을 재사용한다.
  const spanRef = useRef();

  /*
  const handleIncrement = () => {
    setCount( count + 1 );
  };
  */

  // useCallback은 자동으로 리액트가 캐시를 해서 반복해서 호출되어도
  // 새로운 함수 오브젝트를 만들지않고 동일한 콜백함수를 전달한다.
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // Lifecycle 메소드처럼 사용 가능한 함수
  // 컴포넌트가 마운트 되었을 때와 업데이트가 되었을 때마다 호출된다.
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  });

  /*
  // 두 번째 인자에 어떤 값이 변경되었을 때만 이 함수가 호출되도록 만들 수 있다.
  // [count]를 넘겨주면 count가 변경될 때마다 호출
  // []를 넘겨주면 마운트가 되었을 때만 호출
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []);
  */

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
