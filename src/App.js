import Try from "./components/Try";
import styles from "./App.module.css";
import SecA from "./sections/SecA";
import SecB from "./sections/SecB";
import SecC from "./sections/SecC";
import SecD from "./sections/SecD";

function App() {
    return (
        <>
            <div className={styles.App}>
                <Try />
            </div>

            <SecA />
            <SecB />
            <SecC />
            <SecD />
        </>
    );
}

export default App;
