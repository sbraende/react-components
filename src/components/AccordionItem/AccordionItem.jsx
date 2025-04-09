import { useState } from "react";
import styles from "./AccordionItem.module.css";

const AccordionItem = ({ title, description, toggleIconOpen = "-", toggleIconClose = "+" }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <li className={styles.accordion}>
      <header
        className={`${styles.header} ${!isAccordionOpen && styles.borderRadiousBottom}`}
        onClick={handleToggleAccordion}
      >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.toggleIcon}>
          {isAccordionOpen ? toggleIconOpen : toggleIconClose}
        </span>
      </header>
      <div className={`${styles.descriptionWrapper} ${isAccordionOpen ? styles.open : ""}`}>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
