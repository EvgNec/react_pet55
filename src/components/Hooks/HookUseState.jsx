import { useState } from "react";


const HookUseState = () => {

  // Оголошуємо нову змінну стану "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  )
}

export default HookUseState
/*
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>Ви натиснули {this.state.count} разів</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Натисни мене
        </button>
      </div>
    );
  }
}
*/