import { useState, useRef } from "react";
import "./contact-form.styles.scss";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [clippyMessage, setClippyMessage] = useState(
    "Hi! I'm Clippy! 📎\n\nIt looks like you're trying to contact Asilbek.\n\nWould you like help with that?"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clippy reacts to form input
    if (name === "name" && value.length > 0) {
      setClippyMessage(`Nice to meet you, ${value}! 👋\n\nFill out the form and I'll make sure Asilbek gets your message!`);
    } else if (name === "message" && value.length > 50) {
      setClippyMessage("Wow, that's a detailed message! 📝\n\nAsilbek will appreciate the thoroughness!");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setClippyMessage("Sending your message... 📨\n\nPlease wait!");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          from_name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setClippyMessage("Message sent successfully! 🎉\n\nAsilbek will get back to you soon!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("error");
      setClippyMessage("Oops! Something went wrong. 😅\n\nTry the direct email link below!");
    }
  };

  const openMailto = () => {
    const subject = encodeURIComponent(formData.subject || "Hello from your portfolio!");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:asil9802mum@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="contact-form-container">
      {/* Main Content */}
      <div className="form-main">
        {/* Contact Info Panel */}
        <div className="contact-info-panel">
          <div className="info-group">
            <label className="info-label">Contact Information</label>
            <div className="info-box">
              <div className="info-row">
                <span className="info-icon">👤</span>
                <span className="info-text">Asilbek Muminov</span>
              </div>
              <div className="info-row">
                <span className="info-icon">📍</span>
                <span className="info-text">Paris, France</span>
              </div>
              <div className="info-row">
                <span className="info-icon">📧</span>
                <span className="info-text">asil9802mum@gmail.com</span>
              </div>
              <div className="info-row">
                <span className="info-icon">💼</span>
                <span className="info-text">linkedin.com/in/asil-muminov</span>
              </div>
              <div className="info-row">
                <span className="info-icon">🐙</span>
                <span className="info-text">github.com/spaghetttti</span>
              </div>
            </div>
          </div>

          <div className="info-group">
            <label className="info-label">Current Status</label>
            <div className="status-box">
              <span className="status-indicator online"></span>
              <span>Open for opportunities</span>
            </div>
          </div>
        </div>

        {/* Email Form Panel */}
        <div className="email-form-panel">
          <div className="form-group">
            <label className="form-label">Send a Message</label>
            <form ref={form} onSubmit={sendEmail} className="win98-form">
              <div className="form-row">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row message-row">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="win98-button" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
                <button
                  type="button"
                  className="win98-button"
                  onClick={openMailto}
                  title="Opens your email app"
                >
                  📧 Email App
                </button>
                <button
                  type="button"
                  className="win98-button"
                  onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Clippy Panel */}
        <div className="clippy-panel">
          <div className="clippy-container">
            <img src="/icons/clippy.png" alt="Clippy" className="clippy-image" />
            <div className="clippy-bubble">
              <div className="bubble-content">{clippyMessage}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="contact-statusbar">
        <span>
          {status === "success" && "✅ Message sent successfully!"}
          {status === "error" && "❌ Failed to send message"}
          {status === "sending" && "📤 Sending..."}
          {!status && "Ready"}
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
