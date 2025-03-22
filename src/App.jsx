import styles from "./App.module.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className={styles.rootContainer}>
      <Counter />
    </div>
  );
}

export default App;
