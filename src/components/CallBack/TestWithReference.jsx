import { useCallback, useRef } from "react";
import ShippingForm from "./ShippingForm";

const post = (url, data) => {
  // Уяви, що це відправка запиту
  // console.log("POST /" + url);
  // console.log(data);
};

const TestWithReference = ({ productId, referrer, theme }) => {
  const handleSimpleSubmit = (orderDetails) => {
    console.log("🚀 ~ handleSimpleSubmit ~ orderDetails:", orderDetails)
    console.log("handleSimpleSubmit called");

    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    });
  };

  const handleUseCallbackSubmit = useCallback(
    (orderDetails) => {
      console.log("🚀 ~ TestWithReference ~ orderDetails:", orderDetails)
      console.log("handleUseCallbackSubmit called");

      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  // Refs для зберігання попередніх функцій:
  const prevHandleUseCallbackSubmitRef = useRef(null);
  const prevHandleSimpleSubmitRef = useRef(null);

  if (prevHandleUseCallbackSubmitRef.current !== handleUseCallbackSubmit) {
    console.log("handleUseCallbackSubmit reference changed");
  } else {
    console.log("handleUseCallbackSubmit reference did not change");
  }

  if (prevHandleSimpleSubmitRef.current !== handleSimpleSubmit) {
    console.log("handleSimpleSubmit reference changed");
  } else {
    console.log("handleSimpleSubmit reference did not change");
  }

  // Оновлюємо refs:
  prevHandleUseCallbackSubmitRef.current = handleUseCallbackSubmit;
  prevHandleSimpleSubmitRef.current = handleSimpleSubmit;

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSimpleSubmit} />
    </div>
  );
};

export default TestWithReference;