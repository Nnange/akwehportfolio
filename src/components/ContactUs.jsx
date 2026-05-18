import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    globalThis.location.href = `mailto:awong.nnange@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const inputClass = "border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyan-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <section id="contact" className="border-t border-gray-300 dark:border-gray-700 py-20 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <div className="w-3/4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-2xl dark:text-white">Get In Touch</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Feel free to reach out for work, collaboration, or just a chat.</p>
        </div>

        {sent ? (
          <p className="text-center text-cyan-700 dark:text-cyan-400 font-medium">
            Your email client should have opened — thanks for reaching out!
          </p>
        ) : (
          <form onSubmit={sendMessage} className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text"   placeholder="Your Name"  value={name}    onChange={(e) => setName(e.target.value)}    required className={inputClass} />
              <input type="email"  placeholder="Your Email" value={email}   onChange={(e) => setEmail(e.target.value)}   required className={inputClass} />
            </div>
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass} />
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="self-end px-8 py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-800 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
