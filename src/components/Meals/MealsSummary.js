import React from "react";

import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>The best food delivered right to your home!</h2>
      <p>
        Order your favorite meal from our selection and enjoy the experience!
      </p>
      <p>
        All our meals are cooked with love, by experienced professionals and
        with hand-picked ingredients!
      </p>
    </section>
  );
};

export default MealsSummary;
