import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm install @emailjs/browser 

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgu5147",
        "template_9yh1rfx",
        form.current,
        "Hr_iG61SYmvIiFt8w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#011627] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[1000px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0EA5E9] text-gray-300">
            Contact
          </p>

          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email
          </p>
        </div>

        <input
          name="from_name"
          placeholder="Name"
          type="text"
          className="bg-[#ccd6f6] p-2"
        />

        <input
          name="email_id"
          placeholder="Email"
          type="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2"
          rows="10"
        />

        <input
          type="submit"
          value="Lets talk"
          className="border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-sky-500 hover:border-sky-500 text-white hover:text-[#011627] rounded-sm"
        />
      </form>
    </div>
  );
};

export default Contact;
