import React, { useReducer } from 'react';

//  Початковий стан
const initialState = {
  username: '',
  email: '',
  error: false,
  loading: false,
};

// Редʼюсер
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_ERROR':
      return { ...state, loading: false, error: true };
    case 'SET_SUBMIT':
      return { ...state, loading: true, error: false };
    case 'SET_SUCCESS':
      return { ...state, loading: false, error: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

//  Використання useReducer
const StateFulForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({ type: 'SET_SUBMIT' });

    // простенька "перевірка"
    setTimeout(() => {
      if (state.username && state.email.includes('@')) {
        dispatch({ type: 'SET_SUCCESS' });
        alert(
          `✅ Логін успішний!\nКористувач: ${state.username}\nEmail: ${state.email}`
        );
        dispatch({ type: 'SET_RESET' });
      } else {
        dispatch({ type: 'SET_ERROR' });
      }
    }, 1000); // імітація async запиту
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '300px', margin: '20px auto' }}
    >
      <h3>Вхід у поштову скриньку</h3>

      <div>
        <div style={{ marginTop: '10px' }}>
          <label>Логін: </label>
          <br />
          <input
            type="username"
            value={state.username}
            onChange={e =>
              dispatch({ type: 'SET_USERNAME', payload: e.target.value })
            }
            required
          />
        </div>

        <label>Email: </label>
        <br />
        <input
          type="email"
          value={state.email ?? ''}
          onChange={e =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
          required
        />
      </div>

      <button
        type="submit"
        style={{ marginTop: '15px' }}
        disabled={state.loading}
      >
        {state.loading ? 'Завантаження...' : 'Увійти'}
      </button>

      {state.error && (
        <p style={{ color: 'red' }}>❌ Помилка: введіть коректні дані!</p>
      )}
    </form>
  );
};

export default StateFulForm;
