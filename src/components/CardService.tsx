import ButtonLink from "./ButtonLink";
import styles from "./CardService.module.css";
import whatsappIcon from "../assets/icons/whatsapp.svg";

interface CardServiceProps {
    icon?: string;
    title: string;
    description: string;
    differential1: string;
    differential2: string;
    differential3: string;
    differential4: string;
    primaryColor: string;
    backgroundColor: string;
    unitWhatsApp: string;
    image?: string;
}

export default function CardService({
    title,
    description,
    differential1,
    differential2,
    differential3,
    differential4,
    primaryColor,
    icon,
    backgroundColor,
    unitWhatsApp,
    image = "",
}: CardServiceProps) {
    return (
        <section
            style={{ backgroundColor }}
            className={`${styles.cardContainer} ${image ? styles.withImage : styles.withoutImage
                }`}
        >
            <div className={styles.cardContent}>
                <img src={icon} className={styles.icon} />
                <div className={styles.cardTexts}>
                    <h2 className={styles.title} style={{ color: primaryColor }}>{title}</h2>
                    <p>{description}</p>

                    <div>
                        <ul className={styles.list}>
                            <li><span style={{ border: `${primaryColor} solid 0.2vw` }} />{differential1}</li>
                            <li><span style={{ border: `${primaryColor} solid 0.2vw` }} />{differential2}</li>
                            <li><span style={{ border: `${primaryColor} solid 0.2vw` }} />{differential3}</li>
                            <li><span style={{ border: `${primaryColor} solid 0.2vw` }} />{differential4}</li>
                        </ul>
                    </div>
                    <div className={styles.buttonContainer}>
                        <ButtonLink
                            href={`${unitWhatsApp}?text=Fiquei interessado no serviço de ${title} para o meu filho.`}
                            target="_blank"
                            text="Agendar pelo WhatsApp"
                            icon={whatsappIcon}
                            backgroundColor={primaryColor}
                            borderColor={primaryColor}
                            textColor="var(--primary-background-color)"
                        />
                    </div>
                </div>

            </div>

            {image && (
                <img src={image} className={styles.image} alt={title} />
            )}

        </section >
    );

}