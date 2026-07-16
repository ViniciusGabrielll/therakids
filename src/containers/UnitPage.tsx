import { useParams } from "react-router-dom";

import { units } from "../data/units";

import styles from "./UnitPage.module.css";

import logo from "../assets/logos/logo.svg";
import heroImg from "../assets/images/heroImage.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import redWhatsappIcon from "../assets/icons/red/whatsapp.svg";
import returnIcon from "../assets/icons/return.svg";
import acolhimentoEEmpatia from "../assets/differentials/acolhimentoEEmpatia.svg";
import abordagemCientifica from "../assets/differentials/abordagemCientifica.svg";
import equipeMultidisciplinar from "../assets/differentials/equipeMultidisciplinar.svg";
import planosIndividualizados from "../assets/differentials/planosIndividualizados.svg";
import hoursContact from "../assets/icons/hoursContact.svg";
import whatsappContact from "../assets/icons/whatsappContact.svg";
import mapsContact from "../assets/icons/mapsContact.svg";
import momAndDaughterContact from "../assets/decorations/mom&DaughterContact.png"

import ButtonLink from "../components/ButtonLink";
import CardService from "../components/CardService";
import Footer from "../components/Footer";
import { useState } from "react";

export default function UnitPage() {

    const { slug } = useParams();

    const [responsavel, setResponsavel] = useState("");
    const [crianca, setCrianca] = useState("");
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("janeiro");
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");

    const mensagem = encodeURIComponent(
        "Olá! Vim através do site.\n\n" +
        `*Nome do responsável:* ${responsavel}\n` +
        `*Nome da criança:* ${crianca}\n\n` +
        `*Data de nascimento:* ${dia}/${mes}/${ano}\n\n` +
        `*O que procura:*\n${descricao || "Não informado"}`
    );

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

            <article id="inicio" className={styles.hero}>
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


            <article id="especialidades" className={styles.services}>
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

            <article id="sobre" className={styles.aboutUs}>
                <div>
                    <img src={unit.aboutImg} alt="Imagem da unidade" className={styles.aboutUsImg} />
                </div>

                <div className={styles.aboutUsContent}>
                    <div>
                        <h3 style={{ color: "var(--primary-color)" }}>SOBRE NÓS</h3>
                        <h2>Cada criança é <span style={{ color: "var(--primary-color)" }}>única</span>. Cada <span style={{ color: "var(--primary-color)" }}>plano</span> também.</h2>
                    </div>
                    <p>{unit.aboutText}</p>

                    <div>
                        <ButtonLink
                            href="#contato"
                            text="Entrar em contato"
                            backgroundColor=""
                            borderColor="var(--primary-color)"
                            textColor="var(--primary-color)"
                        />
                    </div>
                </div>
            </article>

            <article className={styles.differentialContainer}>
                <h2>Por que escolher a <span style={{ color: "var(--primary-color)" }}>TheraKids</span>?</h2>
                <div className={styles.differentialCardsContainer}>
                    <div className={styles.differentialCard}>
                        <img src={acolhimentoEEmpatia} alt="Icone Acolhimento e empatia" />
                        <div>
                            <h4>Acolhimento e empatia</h4>
                            <p>Ambiente seguro e acolhedor para a criança e a família.</p>
                        </div>
                    </div>
                    <div className={styles.differentialCard}>
                        <img src={abordagemCientifica} alt="Icone Abordagem Científica" />
                        <div>
                            <h4>Abordagem Científica</h4>
                            <p>Intervenções baseadas nas melhores evidências.</p>
                        </div>
                    </div>
                    <div className={styles.differentialCard}>
                        <img src={equipeMultidisciplinar} alt="Icone Equipe Multidisciplinar" />
                        <div>
                            <h4>Equipe Multidisciplinar</h4>
                            <p>Profissionais especializados e integrados.</p>
                        </div>
                    </div>
                    <div className={styles.differentialCard}>
                        <img src={planosIndividualizados} alt="Icone Planos Individualizados" />
                        <div>
                            <h4>Planos Individualizados</h4>
                            <p>Cada criança é única, cada plano também.</p>
                        </div>
                    </div>
                </div>
            </article>

            <article id="contato" className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <div>
                        <h2>Vamos Conversar?</h2>
                        <h2 style={{ color: "var(--primary-color)" }}>Estamos aqui para te ajudar!</h2>
                    </div>
                    <p>Entre em contato para tirar dúvidas, agendar uma avaliação ou conhecer mais sobre nossos atendimentos.</p>
                    <div className={styles.contactCardContainer}>
                        <a href={unit.whatsapp} className={styles.contactCard}>
                            <img src={whatsappContact} />
                            <div>
                                <h4>WhatsApp/Telefone</h4>
                                <h3>{unit.phone}</h3>
                            </div>
                        </a>
                        <div className={styles.contactCard}>
                            <img src={mapsContact} />
                            <div>
                                <h4>Endereço</h4>
                                <h3>{unit.address}</h3>
                            </div>
                        </div>
                        <div className={styles.contactCard}>
                            <img src={hoursContact} />
                            <div>
                                <h4>Horário de atendimento</h4>
                                <h3>{unit.BusinessHours}</h3>
                            </div>
                        </div>
                    </div>

                    <img src={momAndDaughterContact} className={styles.momAndDaughterContact} />
                </div>
                <form className={styles.contactForm}>
                    <div>
                        <h3>Como podemos ajudar o seu filho?</h3>
                        <h4>Mensagem via WhatsApp</h4>
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Nome do Responsável <span style={{ color: "var(--primary-color)" }}>*</span></label>
                        <input type="text" value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}></input>
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Nome da Criança <span style={{ color: "var(--primary-color)" }}>*</span></label>
                        <input
                            type="text"
                            value={crianca}
                            onChange={(e) => setCrianca(e.target.value)}
                        />
                    </div>

                    <div className={styles.formDateContainer}>
                        <span className={styles.formDateLabel}>Data de Nascimento da Criança <span style={{ color: "var(--primary-color)" }}>*</span></ span>
                        <div className={styles.formDate}>
                            <div>
                                <label className={styles.inputLabel}>Dia</label>
                                <input
                                    type="number"
                                    value={dia}
                                    onChange={(e) => setDia(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className={styles.inputLabel}>Mês</label>
                                <select value={mes}
                                    onChange={(e) => setMes(e.target.value)}>
                                    <option value="janeiro">Janeiro</option>
                                    <option value="fevereiro">Fevereiro</option>
                                    <option value="março">Março</option>
                                    <option value="abril">Abril</option>
                                    <option value="maio">Maio</option>
                                    <option value="junho">Junho</option>
                                    <option value="julho">Julho</option>
                                    <option value="agosto">Agosto</option>
                                    <option value="setembro">Setembro</option>
                                    <option value="outubro">Outubro</option>
                                    <option value="novembro">Novembro</option>
                                    <option value="dezembro">Dezembro</option>
                                </select>
                            </div>

                            <div>
                                <label className={styles.inputLabel}>Ano</label>
                                <input type="number"
                                    value={ano}
                                    onChange={(e) => setAno(e.target.value)}></input>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className={styles.inputLabel}>Fale um pouco sobre o que procura (opcional)</label>
                        <input type="text"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}></input>
                    </div>

                    <ButtonLink
                        href={`${unit.whatsapp}?text=${mensagem}`}
                        text="Entrar em contato"
                        backgroundColor="var(--primary-color)"
                        borderColor="var(--primary-color)"
                        textColor="var(--background-primary-color)"
                    />
                </form>
            </article>

            <article className={styles.mapsContainer}>
                <iframe className={styles.iframe} src={unit.mapCode} allowFullScreen={true} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <div className={styles.mapsContent}>
                    <div>
                        <h2 style={{ color: "var(--primary-color)" }}>Agende uma avaliação</h2>
                        <h4>O primeiro passo para transformar o futuro do seu filho!</h4>
                    </div>
                    <div>
                        <ButtonLink
                            href={unit.whatsapp}
                            target="_blank"
                            text="Agendar pelo WhatsApp"
                            icon={redWhatsappIcon}
                            borderColor="var(--primary-color)"
                            textColor="var(--primary-color)"
                        />
                    </div>
                </div>
            </article>

            <Footer>
                <section>
                    <h4>Navegação</h4>

                    <a href="#inicio">Início</a>
                    <a href="#especialidades">Especialidades</a>
                    <a href="#sobre">Sobre nós</a>
                    <a href="#contato">Contato</a>
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

                <section>
                    <iframe src={unit.mapCode}></iframe>
                </section>
            </Footer>
        </>
    );
}