export default function ContactForm({ styles }) {
  return (
    <form action="">
      <div>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          aria-label="Name"
          id="name"
          autoComplete="name"
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className={styles.input}
          aria-label="Phone Number"
          id="phone-number"
          autoComplete="tel"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          aria-label="Email"
          id="email"
          autoComplete="email"
        />
      </div>
      <div>
        <input
          type="text"
          className={[styles.input, styles.messageBox].join(" ")}
          placeholder="Message"
          aria-label="Message"
          id="message"
        />
      </div>
      <div className="d-flex ">
        <button className={styles.sendBtn}>Send</button>
      </div>
    </form>
  );
}
