export default function ContactForm({ styles }) {
  return (
    // By default forms do not get this role
    <form action="" role="form">
      <div>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          aria-label="Name"
          id="name"
          name="name"
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
          name="phone-number"
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
          name="email"
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          className={styles.messageBox}
          placeholder="Message"
          aria-label="message"
        ></textarea>
      </div>
      <div className="d-flex ">
        <button className={styles.sendBtn} type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
