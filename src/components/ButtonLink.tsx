import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  text: string;
  href: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  icon?: string;
  target?: "_self" | "_blank";
}

export default function ButtonLink({
  text,
  href,
  backgroundColor = "",
  borderColor = "",
  textColor = "",
  icon,
  target = "_self",
}: ButtonLinkProps) {
  return (
    <a
    href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={styles.button}
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <span style={{color: textColor}}>{text}</span>

    </a>
  );
}