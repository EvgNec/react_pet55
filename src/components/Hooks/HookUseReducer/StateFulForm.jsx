import React, { useReducer } from 'react'

//  Початковий стан
const initialState ={
    username: "",
    email:"",
    error: false,
    loading: false,
};

// Редʼюсер
function formReducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
        case "SET_LOADING":
          return { ...state, loading: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

  //  Використання useReducer
  const StateFulForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Логін: ${state.email}\nПароль: ${state.password}`);
    dispatch({ type: "RESET" }); // очистити форму
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "20px auto" }}>
    <h3>Вхід у поштову скриньку</h3>

    <div>
      <label>Email: </label><br />
      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
        required
      />
    </div>

    <div style={{ marginTop: "10px" }}>
      <label>Пароль: </label><br />
      <input
        type="password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
        required
      />
    </div>

    <button type="submit" style={{ marginTop: "15px" }}>
      Увійти
    </button>
  </form>
);
}

export default StateFulForm
