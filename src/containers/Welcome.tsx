import styles from "./Welcome.module.css";

import logo from "../assets/logos/logo.svg"

import redWhatsapp from "../assets/icons/red/whatsapp.svg"
import redInstagram from "../assets/icons/red/instagram.svg"
import redMaps from "../assets/icons/red/maps.svg"
import greenWhatsapp from "../assets/icons/green/whatsapp.svg"
import greenInstagram from "../assets/icons/green/instagram.svg"
import greenMaps from "../assets/icons/green/maps.svg"
import unitFlores from "../assets/images/unitFlores.svg"
import unitDomPedro1 from "../assets/images/unitDomPedro1.svg"

import clinic from "../assets/icons/clinic.svg"
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Welcome() {

    const [mounted, setMounted] = useState(true);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setHide(true);
        }, 1500);

        const timer2 = setTimeout(() => {
            setMounted(false);
        }, 2000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <>
            {mounted && <Preloader hide={hide} />}
            <article className={styles.welcome}>
                <section className={styles.hero}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h1 className={styles.title}>Bem vindo(a) à <span style={{ color: "var(--primary-color)" }}>TheraKids</span>!</h1>
                    <p className={styles.description}>Para proporcionar uma experiência personalizada, escolha a unidade que deseja acessar.
                        Assim você visualizará os Serviços, contatos e informações correspondente à unidade selecionada.</p>
                    <p className={styles.description}>Você poderá alterar essa escolha sempre que desejar.</p>
                </section>

                <h2 className={styles.secondTitle}>Escolha sua <span style={{ color: "var(--primary-color)" }}>unidade</span></h2>
                <section className={styles.cardSection}>

                    <div className={styles.card}>
                        <div style={{ backgroundImage: `url(${unitFlores})` }} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h2 style={{ color: "var(--primary-color)" }}>Unidade Flores</h2>
                            <div className={styles.localization}>
                                <img src={redMaps} alt="Localização" />
                                <p>Rua Barão de Surui, 313,Flores, Manaus/Am</p>
                            </div>
                            <div className={styles.contactInfo} style={{ backgroundColor: "rgba(255, 152, 148, 20%)" }}>
                                <a>
                                    <img src={redWhatsapp} alt="Número" />
                                    <h3>(92) 9 9333-5257</h3>
                                </a>
                                <a href="https://www.instagram.com/therakids_unidade_flores/" target="_blank">
                                    <img src={redInstagram} alt="Instagram" />
                                    <h3>@therakids_unidade_flores</h3>
                                </a>
                            </div>
                            <Link to="/unidades/flores" className={styles.cardLink} style={{ backgroundColor: "var(--primary-color)" }}>
                                <p>Acessar Unidade Flores</p>
                                <div style={{ backgroundColor: "color-mix(in srgb, var(--primary-color) 80%, white)" }}>
                                    <p>{">"}</p>
                                </div>
                            </Link>

                            <div className={styles.clinic} style={{ backgroundColor: "var(--primary-color)" }}>
                                <img src={clinic} alt="clínica" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div style={{ backgroundImage: `url(${unitDomPedro1})` }} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h2 style={{ color: "var(--additional-color)" }}>Unidade Dom Pedro I</h2>
                            <div className={styles.localization}>
                                <img src={greenMaps} alt="Localização" />
                                <p>Rua Barão de Surui, 313,Flores, Manaus/Am</p>
                            </div>
                            <div className={styles.contactInfo} style={{ backgroundColor: "rgba(190, 225, 115, 20%)" }}>
                                <a>
                                    <img src={greenWhatsapp} alt="Número" />
                                    <h3>(92) 9 9313-0472</h3>
                                </a>
                                <a href="https://www.instagram.com/therakids_unidade_dom_pedro1/" target="_blank">
                                    <img src={greenInstagram} alt="Instagram" />
                                    <h3>@therakids_unidade_dom_pedro1</h3>
                                </a>
                            </div>
                            <Link to="/unidades/dom_pedro_1" className={styles.cardLink} style={{ backgroundColor: "var(--additional-color)" }}>
                                <p>Acessar Unidade Dom Pedro I</p>
                                <div style={{ backgroundColor: "color-mix(in srgb, var(--additional-color) 80%, white)" }}>
                                    <p>{">"}</p>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.clinic} style={{ backgroundColor: "var(--additional-color)" }}>
                            <img src={clinic} alt="clínica" />
                        </div>
                    </div>
                </section>
            </article>

            <Footer>
                <section>
                    <h4>Navegação</h4>

                    <a href="/unidades/flores">Unidade Flores</a>
                    <a href="/unidades/dom-pedro-i">Unidade Dom Pedro I</a>
                </section>

                <section>
                    <h4>Contato</h4>

                    <div>
                        <h5>Unidade Flores</h5>
                        <p>+55 92 9333-5257</p>
                    </div>

                    <div>
                        <h5>Unidade Dom Pedro I</h5>
                        <p>+55 92 9313-0472</p>
                    </div>
                </section>

                <section>
                    <h4>Redes Sociais</h4>

                    <a
                        href="https://www.instagram.com/therakids_unidade_flores/"
                        target="_blank"
                    >
                        @therakids_unidade_flores
                    </a>

                    <a
                        href="https://www.instagram.com/therakids_unidade_dom_pedro1/"
                        target="_blank"
                    >
                        @therakids_unidade_dom_pedro1
                    </a>
                </section>

                <section></section>
            </Footer>
        </>
    );
}