import ContactForm from './ContactForm'

export default function Contact(props) {
  return (
    <div className="bg-primary-dark">
      <section className='transform -translate-y-20 w-10/12 lg:w-7/12 mx-auto bg-primary font-open-sans rounded-lg shadow-full'>
        <ContactForm />
      </section>
    </div>
  );
}
