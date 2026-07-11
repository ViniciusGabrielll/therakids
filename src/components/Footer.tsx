import styles from "./Footer.module.css";
import logo from "../assets/logos/whiteLogo.svg"

import footerDecoration from "../assets/decorations/footer.svg"

import type { ReactNode } from "react";

interface FooterProps {
    children: ReactNode;
}

export default function Footer({ children }: FooterProps) {
    return (
        <footer className={styles.footer}>
            <img src={footerDecoration} alt="Footer" className={styles.footerDecoration} />
            <div className={styles.container}>
                <section className={styles.content}>
                    <div className={styles.brand}>
                        <img src={logo} alt="Logo" />

                        <p>
                            Apoiamos o desenvolvimento infantil
                            de forma integral, respeitosa e
                            individualizada.
                        </p>
                    </div>
                </section>

                {children}
            </div>

            <span className={styles.copy}>
                © 2026 TheraKids. Todos os direitos reservados.
            </span>
        </footer>
    );
}