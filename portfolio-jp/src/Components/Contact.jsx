import '../Styles/contact.css'
import { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from '../Models/Earth';
import '../Styles/mediaquery.css'
import HeroModel from '../Models/HeroModels';
import BookCanvas from '../Models/ContactModel';

     // service_xdrv1ec  serviceid
        // template_8jd5nws template id
        // Rjd7Jdx71Vjb47t7C public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

   

        emailjs.send('service_xdrv1ec', 'template_8jd5nws',
            {
                from_name:form.name,
                to_name: 'Jose Parra',
                from_email: form.email,
                to_email: 'jmjp_18@hotmail.com',
                message: form.message,
            },
            'Rjd7Jdx71Vjb47t7C'
         )
         .then(() => {
            setLoading(false)
            alert("Thank you ofr your message, I will get back to you as soon as possible")
            
            setForm({
                name: '',
                email: '',
                message: '',
            })
         }, (error)=> {
            setLoading(false)
            console.log(error)
            alert("Oops, something went wrong")
         })   
    }

    return (

       <section id="contact">
        <div className="containers-contact">
        <div>
            <h1>Let's get in touch</h1>
        </div>
        <div className="">
            <form action="#" ref={formRef} onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" value={form.name} onChange={handleChange} name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} required ></textarea>
                
            <button type="submit">{loading ? 'Sending...' : 'Send'}</button> 
            </form>
        </div>
        <div className='earth-div'>

        </div>
        </div>
        {/* <EarthCanvas/> */}
         {/* <HeroModel/>    */}
         <BookCanvas/>

       </section>
      
    )
}


export default Contact