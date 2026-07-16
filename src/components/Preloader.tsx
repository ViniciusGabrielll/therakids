import styles from "./Preloader.module.css";

import logo from "../assets/logos/logo.svg";

import cloud from "../assets/decorations/drawing/cloud.svg";
import flower from "../assets/decorations/drawing/flower.svg";
import girl from "../assets/decorations/drawing/girl.svg";
import kite from "../assets/decorations/drawing/kite.svg";
import sun from "../assets/decorations/drawing/sun.svg";
import star from "../assets/decorations/drawing/star.svg";
import heart from "../assets/decorations/drawing/heart.svg";
import border from "../assets/decorations/drawing/border.svg";

interface Props {
    hide: boolean;
}

export default function Preloader({ hide }: Props) {
    return (
        <div className={`${styles.container} ${hide ? styles.hide : ""}`}>
            <img src={logo} alt="Logo" />
            <div className={styles.spinner}></div>

            <div className={styles.drawings}>
                <img src={cloud} alt="Desenho" style={{ top: "30vh", left: "20vw" }} />
                <img src={flower} alt="Desenho" style={{ top: "50vh", left: "30vw" }} />
                <img src={girl} alt="Desenho" style={{ top: "20vh", right: "20vw" }} />
                <img src={kite} alt="Desenho" style={{ top: "50vh", right: "30vw" }} />
                <img src={sun} alt="Desenho" style={{ top: "70vh", left: "25vw" }} />
                <img src={heart} alt="Desenho" style={{ top: "70vh", right: "45vw" }} />
                <img src={star} alt="Desenho" style={{ top: "15vh", left: "40vw" }} />
            </div>

            <div className={styles.border}>
                <img src={border} style={{left: "0", bottom: "0"}}/>
                <img src={border} style={{right: "0", bottom: "0", transform: "scaleX(-1)"}}/>
                <img src={border} style={{right: "0", top: "0", transform: "scale(-1)"}}/>
                <img src={border} style={{left: "0", top: "0", transform: "scaleY(-1)"}}/>
            </div>
        </div>
    );
}