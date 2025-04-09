import styles from "./App.module.css";
import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/AccordionItem/AccordionItem";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Input from "./components/Input/Input";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div className={styles.rootContainer}>
      <ErrorMessage message={"Failed to fetch the data"} errorLogo={"❌"} />
      {/* <Spinner /> */}
      {/* <Accordion /> */}
      {/* <Input
        placeholder="Enter first name. e.g. John"
        label="First name"
        errorMessage="First name is required"
      /> */}
      {/* <Counter /> */}
      {/* <Button>Add</Button> */}
    </div>
  );
}

export default App;
