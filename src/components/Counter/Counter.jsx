import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = ({ initialCount = 0, min = 0, max = Infinity, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    if (count < max) {
      setCount((currentCount) => currentCount + step);
    }
  };

  const handleDecrease = () => {
    if (count > min) {
      setCount((currentCount) => currentCount - step);
    }
  };

  return (
    <div className={styles.counterCard}>
      <button
        aria-label="Decrease count"
        className={styles.decreaseButton}
        onClick={handleDecrease}
      >
        -
      </button>
      <span className={styles.countDisplay}>{count}</span>
      <button
        aria-label="Increase count"
        className={styles.increaseButton}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
