import styles from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return <p className={styles.text}>{message}</p>;
}
