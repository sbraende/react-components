import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={styles.rootContainer}>
      <Input
        placeholder="Enter first name. e.g. John"
        label="First name"
        errorMessage="First name is required"
      />
      {/* <Counter /> */}
      {/* <Button>Add</Button> */}
    </div>
  );
}

export default App;
