import { useEffect, useState } from "react";


const HookUseEffect = () => {
    const [count, setCount] = useState(0);

    // Подібно до componentDidMount та componentDidUpdate:
    useEffect(() => {
      // Оновлюємо заголовок документа, використовуючи API браузера
      document.title = `You clicked ${count} times`;
    });


      // 1. Використовуємо змінну стану name
  const [name, setName] = useState('Ліна');

  // 2. Використовуємо ефект для збереження стану форми
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Використовуємо змінну стану surname
  const [surname, setSurname] = useState('Костенко');

  // 4. Використовуємо ефект, щоб оновити заголовок сторінки
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });
  
    return (
      <div>
        <p>Ви натиснули {count} разів</p>
        <button onClick={() => setCount(count + 1)}>
          Натисни мене
        </button>
      </div>
    );
  }

export default HookUseEffect


/*
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `Ви натиснули ${this.state.count} разів`;
  }
  componentDidUpdate() {
    document.title = `Ви натиснули ${this.state.count} разів`;
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