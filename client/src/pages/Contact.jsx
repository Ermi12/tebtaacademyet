import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  // const form = useRef();
  // const [status, setStatus] = useState('');

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');

  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       form.current,
  //       'YOUR_PUBLIC_KEY'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setStatus('✅ Message sent successfully!');
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setStatus('❌ Failed to send message. Please try again.');
  //       }
  //     );
  // };

  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_sdaruh7',
        'template_fbrve3i',
        form.current,
        'gIbPE6zKMR-d-BAre'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="container page">
      <h2 className='text-3xl font-bold text-center mb-10'>Contact</h2>
      <div className="hero container">
      <form ref={form} onSubmit={sendEmail} className='hero-left contact-form'>
        <input type="text" name="name" required placeholder='Name'/>

        <input type="phone" name="phone" required placeholder='Phone Number'/>

        <input type="email" name="email" required placeholder='Email'/>

        <textarea name="message" rows="7" required placeholder='Message'/>

        <button type="submit" className="btn">Send Message</button>
      </form>

      <div className="hero-right">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have questions about our tutoring services, want to discuss your learning needs, or just want to say hello, feel free to reach out. Our team is here to assist you and provide the support you need to succeed.</p>
        <p>Email: <i>mokabel201@gmail.com</i></p>
        <p>Phone: <i>+251 965 31 1000</i></p>
        <p>Address 1: Mexico Square, Addis Ababa, Ethiopia</p>
        <p>Address 2: Gerji Jackros, Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <p className="status">{status}</p>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d246.28696045005614!2d38.74436866975161!3d9.009695100363881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f100!3m2!1m1!2zOcKwMDAnMzUuMCJOIDM4wrA0NCczOS45IkU!5e0!3m2!1sam!2set!4v1759591999434!5m2!1sam!2set" 
      width="100%" 
      height="450" 
      style={{border:0, marginTop: '20px'}} 
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      
    </div>
  );
}
  