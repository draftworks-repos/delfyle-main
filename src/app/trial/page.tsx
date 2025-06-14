import React from 'react';
import styles from './trial.module.css';
import ComponentOne from "../Components/TrialComponent/ComponentOne/ComponentOne";
import ComponentTwo from "../Components/TrialComponent/ComponentTwo/ComponentTwo";
import ComponentThird from "../Components/TrialComponent/ComponentThird/ComponentThird";
import ComponentFour from "../Components/TrialComponent/ComponentFour/ComponentFour";
import ComponentFive from "../Components/TrialComponent/ComponentFive/ComponentFive";
import ComponentSix from "../Components/TrialComponent/ComponentSix/ComponentSix";
import ComponentSeven from "../Components/TrialComponent/ComponentSeven/ComponentSeven";
import ComponentEight from "../Components/TrialComponent/ComponentEight/ComponentEight";
import ComponentNine from "../Components/TrialComponent/ComponentNine/ComponentNine";
import ComponentTen from "../Components/TrialComponent/ComponentTen/ComponentTen";
import ComponentEleven from "../Components/TrialComponent/ComponentEleven/ComponentEleven";
import ComponentTwelve from "../Components/TrialComponent/ComponentTwelve/ComponentTwelve";
import ComponentThirteen from "../Components/TrialComponent/ComponentThirteen/ComponentThirteen";
import ComponentFourteen from "../Components/TrialComponent/ComponentFourteen/ComponentFourteen";
import ComponentFifteen from "../Components/TrialComponent/ComponentFifteen/ComponentFifteen";
import ComponentSixteen from "../Components/TrialComponent/ComponentSixteen/ComponentSixteen";

const TrialPage = () => {
  return (
    <div className={styles.container}>
      <h1>Trial Page</h1>
      <p>This is a test page.</p>
      <ComponentOne />
      <ComponentTwo />
      <ComponentThird />
      <ComponentFour />
      <ComponentFive />
      <ComponentSix />
      <ComponentSeven />
      <ComponentEight />
      <ComponentNine />
      <ComponentTen />
      <ComponentEleven />
      <ComponentTwelve />
      <ComponentThirteen />
      <ComponentFourteen />
      <ComponentFifteen />
      <ComponentSixteen />
    </div>
  );
};

export default TrialPage; 