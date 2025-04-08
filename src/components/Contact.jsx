import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-20"
    >
      <div className="max-w-screen-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Contact
          </h2>
          <p className="mt-4 text-gray-400">
            Submit the form below or reach out directly to get in touch
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          action="https://getform.io/f/7ee57379-e270-4eb2-a90b-980a763a448a"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="p-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="p-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your message"
            className="p-3 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300 mx-auto mt-4"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
