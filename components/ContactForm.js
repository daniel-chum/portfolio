import emailjs from "emailjs-com";
import { useState, useEffect } from 'react'
import { Input } from "./ui";
import { PopUp } from "./ui";

const ContactForm = (props) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formInputs = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "gmail",
        "template_Z03RhyFk",
        formInputs,
        "user_FtTVHTSnzVbrnDDZwYbyi"
      )
      .then(
        (result) => {
          setEmailSent(true)
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
        },
        (error) => {
          setErrorMessage(error.text);
        }
      );
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmailSent(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [emailSent]);

  return (
    <>
      <form className="w-10/12 pt-6 pb-12  space-y-4 mx-auto" onSubmit={submitForm}>
        <h1 className='font-light py-6 tracking-tight text-center font-open-sans text-word text-4xl'>Get In Touch</h1>
        {errorMessage && (
            <div className="text-red-600 text-lg text-center pb-10 ">{errorMessage}</div>
          )}
        <div className='flex flex-wrap gap-x-2'>
          <Input className='flex-grow' type="text"  onChange={setName} value={name} label="Name" />
          <Input className='flex-grow' type="email" onChange={setEmail} value={email} label="Email" />
        </div>
        <Input type="text" onChange={setSubject} value={subject} label="Subject" />
        <div className="flex flex-col-reverse font-open-sans pb-8">
          <textarea
            className="outline-none flex-grow pl-3 py-2 text-word bg-primary-dark rounded-md"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows="7"
            required
          />
          <label className='text-secondary pl-1 text-lg'>Message</label>
        </div>
        <button
          className='relative left-1/2 transform -translate-x-1/2 px-10 py-3 bg-secondary-dark text-primary-dark text-xl font-bold focus:outline-none'
          type= 'submit'
        >
          Send
        </button>
      </form>
      <PopUp display={emailSent}>Email sent!</PopUp>
    </>
  );
}

export default ContactForm;