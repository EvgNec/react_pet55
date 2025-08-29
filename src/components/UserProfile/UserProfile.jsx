import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  // Стан для зберігання даних користувача
  const [user, setUser] = useState(null);
  // Стан для зберігання статусу завантаження
  const [loading, setLoading] = useState(true);
  // Стан для зберігання помилок
  const [error, setError] = useState(null);

  // Функція для отримання даних з API
  const fetchUserDatafetch = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUser(data.results[0]);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

    // Функція для отримання даних з API axios
  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    // Викликаємо функцію завантаження даних
    fetchUserData();

    // Налаштовуємо інтервал для періодичного оновлення даних
    // const intervalId = setInterval(() => {
    //   fetchUserData();
    // }, 2000); // Оновлювати кожні 2 ceкунди

    // Очищення інтервалу при розмонтаженні компонента
    // return () => clearInterval(intervalId);
  }, []); // Порожній масив залежностей означає, що ефект виконається лише один раз

  // Якщо викликати функцію завантаження даних без useEffect,
  //   fetchUserData();

  // Відображення стану завантаження або помилки
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Відображення даних користувача
  return (
    <div>
      <h2>Профіль користувача</h2>
      {user && (
        <>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <p>Email: {user.email}</p>
        </>
      )}
      <button onClick={fetchUserDatafetch}>Next</button>
    </div>
  );
};

export default UserProfile;