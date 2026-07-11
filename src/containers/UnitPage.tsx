import { useParams } from "react-router-dom";

import { units } from "../data/units";

import styles from "./UnitPage.module.css";

import logo from "../assets/logos/logo.svg";
import heroImg from "../assets/images/heroImage.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import redWhatsappIcon from "../assets/icons/red/whatsapp.svg";
import returnIcon from "../assets/icons/return.svg";

import ButtonLink from "../components/ButtonLink";

export default function UnitPage() {
    const { slug } = useParams();

    const unit = Object.values(units).find(
        u => u.slug === slug
    );

    if (!unit) return <h1>Unidade não encontrada</h1>;

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt={unit.name} />
                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#especialidades">Especialidades</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                    <ButtonLink
                        href={unit.whatsapp}
                        target="_blank"
                        text="Fale Conosco"
                        icon={whatsappIcon}
                        backgroundColor="var(--primary-color)"
                        borderColor="var(--primary-color)"
                        textColor="var(--secondary-background-color)"
                    />
                </nav>
            </header>

            <article className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.btnLinkContainer}>
                        <ButtonLink
                            href="/"
                            text="Escolher Unidade"
                            icon={returnIcon}
                            backgroundColor=""
                            borderColor="var(--primary-color)"
                            textColor="var(--primary-color)"
                        />
                    </div>

                    <h1 className={styles.title}>Cuidar hoje, <span style={{ color: "var(--primary-color)" }}>transformar</span> amanhã.</h1>

                    <h2>Centro de Desenvolvimento Infantil em {unit.name} - Manaus</h2>
                    <div className={styles.heroBtns}>
                        <ButtonLink
                            href="#especialidades"
                            text="Nossos Atendimentos"
                            backgroundColor="var(--primary-color)"
                            borderColor="var(--primary-color)"
                            textColor="var(--background-secondary-color)"
                        />

                        <ButtonLink
                            href={unit.whatsapp}
                            target="_blank"
                            text="Fale Conosco"
                            icon={redWhatsappIcon}
                            borderColor="var(--primary-color)"
                            textColor="var(--primary-color)"
                        />
                    </div>
                </div>

                <div className={styles.heroImgContainer}>
                    <img src={heroImg} />
                </div>
            </article>

            <section className={styles.contact}>
                <h2>Contato</h2>

                <p>{unit.phone}</p>

                <a href={unit.whatsapp}>
                    WhatsApp
                </a>

                <a href={unit.instagram}>
                    Instagram
                </a>

                <p>{unit.address}</p>
            </section>

            {/* <section className={styles.services}>
                {unit.services.map(service => (
                    <CardService
                        key={service}
                        title={service}
                    />
                ))}
            </section> */}

        </>
    );
}