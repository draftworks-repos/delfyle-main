import styles from './IntegrationCards.module.css';

const heading = "Why Choose Delfyle's Legal Team?";
const subheading = "Multi-disciplinary team with legal, CA, and CS expertise";

const points = [
  {
    text: subheading,
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#",
  },
  {
    text: "Proven track record in handling complex legal & compliance matters",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#",
  },
  {
    text: "Personalized support for startups, SMEs, corporates, and institutions",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#",
  },
  {
    text: "Deep domain knowledge in NCLT, civil, corporate, and tax law",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#",
  },
  {
    text: "Trusted partner for hassle-free compliance and legal advisory.",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    link: "#",
  },
];

export default function IntegrationCards() {
  return (
    <section className={styles.section}>
      <div className={styles.headerSection}>
        <h2 className={styles.mainHeading}>{heading}</h2>
      </div>
      <div className={styles.cardsContainer}>
        {points.map((point, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={point.icon} alt="icon" />
            </div>
            <span className={styles.cardText}>{point.text}</span>
            <a href={point.link} className={styles.cardAction} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 