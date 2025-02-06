import styles from "../../styles/footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div>Copyright © Neom Sindalah. All Rights Reserved.</div>
          <div>
            <div className={styles.footerContentLeft}>
              <div>Terms of Use</div>
              <div>Privacy</div>
              <div>Cookie</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
