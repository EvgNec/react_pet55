import { useState } from "react";

const ShippingForm = ({ onSubmit }) => {
  const [count, setCount] = useState(0);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  const startTime = performance.now();

  while (performance.now() - startTime < 500) {
    // Імітуємо затримку 500 мс (дуже повільний рендер)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <section>
        Number of items:
        <button
          className="button"
          type="button"
          onClick={() => setCount(count - 1)}
        >
          –
        </button>
        <b style={{ color: "red", fontSize: 32 }}>{count}</b>
        <button
          className="button"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </section>

      <section>
        <label className="display-block">
          Street:
          <input name="street" />
        </label>
        <label className="display-block">
          City:
          <input name="city" />
        </label>
        <label className="display-block">
          Postal code:
          <input name="zipCode" />
        </label>
        <h3>Button with useMemo on submit:</h3>
        <button type="submit" className="display-block button">
          Submit
        </button>
      </section>
    </form>
  );
};

export default ShippingForm;