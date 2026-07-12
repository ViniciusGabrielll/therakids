import { useParams } from "react-router-dom";

import { units } from "../data/units";

import styles from "./UnitPage.module.css";

import logo from "../assets/logos/logo.svg";
import heroImg from "../assets/images/heroImage.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import redWhatsappIcon from "../assets/icons/red/whatsapp.svg";
import returnIcon from "../assets/icons/return.svg";

import ButtonLink from "../components/ButtonLink";
import CardService from "../components/CardService";

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

                    <h3>Centro de Desenvolvimento Infantil em {unit.name} - Manaus</h3>
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


            <article className={styles.services}>
                <h2>Nossos <span style={{ color: "var(--primary-color)" }}>Atendimentos</span></h2>

                <div className={styles.cardsContainer}>
                    {unit.services.map((service, index) => (
                        <CardService
                            key={index}
                            title={service.title}
                            description={service.description}
                            differential1={service.differential1}
                            differential2={service.differential2}
                            differential3={service.differential3}
                            differential4={service.differential4}
                            primaryColor={service.primaryColor}
                            backgroundColor={service.backgroundColor}
                            unitWhatsApp={unit.whatsapp}
                            icon={service.icon}
                            image={service.image}
                        />
                    ))}
                </div>
            </article>

            <article className={styles.aboutUs}>
                <img src="" alt="Imagem da unidade" />

                <div>
                    <div>
                        <h3>SOBRE NÓS</h3>
                        <h2>Cada criança é única. Cada plano também.</h2>
                    </div>
                    <p>Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre
                        Sobre Sobre Sobre Sobre
                        Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre  Sobre Sobre Sobre Sobre
                        Sobre Sobre Sobre Sobre </p>

                    <ButtonLink
                        href="/"
                        text="Entrar em contato"
                        backgroundColor=""
                        borderColor="var(--primary-color)"
                        textColor="var(--primary-color)"
                    />
                </div>
            </article>

        </>
    );
}