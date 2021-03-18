import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  /* 이 컴포넌트 안에 전체적인 데이터가 들어있기 때문에 데이터가 변경되는 경우에는
  이 컴포넌트 안에서 수정하는 로직들을 작성해야한다.
  state를 업데이트할 때는 리액트에서 제공하는 setState 함수를 호출해야한다.
  state를 직접적으로 변경하는 것은 좋지 않다 => Shallow Comparison 때문에!
  안에 있는 데이터를 수정하기만 하면 결국 동일한 오브젝트이기 때문에 업데이트가 되지 않는다.
  그래서 데이터가 변경된다면 원래 있던 오브젝트는 불변의 아이로 놔두고 새로운 오브젝트를 만드는 게 더 좋다 */

  handleIncrement = (habit) => {
    /* bad code
    const habits = [...this.state.habits]; //...Spread Syntax
    const index = habits.indexOf(habit);
    habits[index].count++;
    */
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // deconstructing object: habit object의 key와 value를 복사해서 새로운 object 생성
      }
      return item;
    });
    this.setState({ habits }); // {habits : habits} key와 value의 이름이 같을 때 생략가능
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    */
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    // Date.now() => 현재 날짜와 시간을(초 단위까지) 합해서 만들어줌
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count > 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
