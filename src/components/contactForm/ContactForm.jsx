export default function ContactForm({ styles }) {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="Name" className={styles.input} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone Number"
          className={styles.input}
        />
      </div>
      <div>
        <input type="email" placeholder="Email" className={styles.input} />
      </div>
      <div>
        <input
          type="text"
          className={[styles.input, styles.messageBox].join(" ")}
          placeholder="Message"
        />
      </div>
      <div className="d-flex ">
        <button className={styles.sendBtn}>Send</button>
      </div>
    </form>
  );
}
