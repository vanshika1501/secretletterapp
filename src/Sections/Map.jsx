import React from 'react'
import { motion } from 'framer-motion'

export const Map = () => {
  return (
    <div className="bg-animepurple dark:bg-black px-6 py-10 flex flex-col gap-10 text-white">

      {/* Map + Form Section */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">

        {/* Left: Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl relative"
        >
          {/* Google Map */}
          <iframe
            title="My Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full h-[400px] border-4 border-purple2 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.068735953288!2d77.96130179630465!3d27.179338062296654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477b5d4ae2eff%3A0xd801bd7aa659d3cf!2sShahganj%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1752565268532!5m2!1sen!2sin"
          />

          {/* Centered Avatar */}
          {/* Centered Avatar with Active Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Avatar */}
            <img
              src="/images/ava.png"
              alt="Avatar"
              className="w-16 h-16 rounded-full border-4 border-white"
            />

            {/* Glowing Green Dot */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-ping opacity-75"></span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </motion.div>

        {/* Right: Query Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-purple2"
        >
          <h3 className="text-3xl font-bold text-purpdark font-shifty mb-4">Got a Query?</h3>

          {/* ✅ Netlify Form starts here */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
              })
                .then(() => alert("✅ Message sent successfully!"))
                .catch(() => alert("❌ Error sending message."));
            }}
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-purple2/10 dark:text-white transition-all px-4 py-2 rounded text-black text-sm placeholder:text-purple1 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-purple2/10 dark:text-white transition-all px-4 py-2 text-sm rounded text-black placeholder:text-purple1 outline-none"
              required
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              className="bg-purple2/10 text-sm dark:text-white transition-all px-4 py-2 rounded text-black placeholder:text-purple1 outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="bg-purple1 bg-purple4 hover:bg-purpdark transition-colors font-semibold py-2 rounded-md mt-2"
            >
              Send Message
            </button>
          </form>

        </motion.div>
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-sm mt-6 text-black"
      >
        <p className="italic text-purple3 font-shifty">"Crafted with curiosity, coffee, and clean code."</p>
        <p className="mt-1 dark:text-white text-black">&copy; {new Date().getFullYear()} Vanshika Sharma. All rights reserved.</p>
      </motion.div>
    </div>
  )
}
