import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            // 리액트에서는 리스트와 같은 자식 컴포넌트가 있으면 고유한 키를 가지고 있어야 한다.
            // 각각의 컴포넌트에 아이디를 부여함으로써 성능 계산이 가능하다. (불필요한 렌더링을 하지 않는다던지)
            // key는 고유한 번호를 써야한다. 배열을 이용할 때 인덱스를 key로 사용하면 안된다!
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
