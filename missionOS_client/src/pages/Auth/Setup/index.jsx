import { useState } from "react";

import styles from "./Setup.module.css";

import Welcome from "./steps/Welcome";
import Name from "./steps/Name";
import Goals from "./steps/Goals";
import Focus from "./steps/Focus";
import Complete from "./steps/Complete";

const Setup = () => {

    const [step, setStep] = useState(0);

    const nextStep = () => setStep(prev => prev + 1);

    switch(step){

        case 0:
            return <Welcome nextStep={nextStep}/>;

        case 1:
            return <Name nextStep={nextStep}/>;

        case 2:
            return <Goals nextStep={nextStep}/>;

        case 3:
            return <Focus nextStep={nextStep}/>;

        case 4:
            return <Complete/>;

        default:
            return <Welcome nextStep={nextStep}/>;
    }

}

export default Setup;