import styles from "./page.module.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import TitleBlend from "./Components/TitleBlend/TitleBlend";
import Contents from "./Components/Contents/Contents";

export default function Home() {
    return (
        <main className={styles.main}>
            <Background />
            <Navbar />
            <TitleBlend />
            <Contents />
        </main>
    );
}
