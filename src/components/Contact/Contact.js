import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='header'>Contact Me</h1>
      <div className='description'>
        <p>
          Feel free to contact me for any reason using the form below, or
          directly at{' '}
          <a href='mailto:nhanhthu920@gmail.com'>nhanhthu920@gmail.com</a>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;