// rsi + Tab
import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); // Ref라는 오브젝트가 생성

  const onSubmit = (event) => {
    event.preventDefault(); //버튼을 누르면 페이지가 reloading됨. 이러한 브라우저의 기본 기능을 취소해줌
    const name = inputRef.current.value; // 현재 있는 요소의 value를 읽어옴
    name && props.onAdd(name); // name이 텅텅 비어져있지 않다면 onAdd 호출
    // this.inputRef.current.value = ''; // 입력한 거 초기화
    formRef.current.reset(); //위의 코드와 동일함(이게 더 정석임)
  };

  return (
    // form에서는 button이 눌려지면 submit이라는 이벤트가 발생함
    // 그래서 사용자가 버튼을 누르면 onSubmit 함수를 호출
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        //원하는 요소에 Ref 오브젝트를 전달
        // input 요소가 inputRef와 연결됨 => input에 접근해서 해당하는 데이터 읽어올 수 있다.
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
