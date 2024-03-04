import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import CustomButton from '../Button/CustomButton';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  const notify = () => toast.success("Email has been sent successfully.!");
  const notifyerror = () => toast.error("Error Occured.");
  const form = useRef();

  const sendEmail =  async (e) => {
    e.preventDefault();
    setIsSending(true); 

    try {
      await toast.promise(
        emailjs.sendForm('service_jtgcp6i', 'template_m10on9v', form.current, {
          publicKey: 'W8TaBMwiVQtJlGiCp',
        }),
        {
          pending: 'Sending email...',
          success: 'Email has been sent successfully.',
          error: 'Error occurred while sending email.',
        }
      );
      form.current.reset();
      console.log('SUCCESS!');
      setIsSending(false); 

    } catch (error) {
      console.error('FAILED...', error);
    }
  };

    // emailjs
    //   .sendForm('service_jtgcp6i', 'template_m10on9v', form.current, {
    //     publicKey: 'W8TaBMwiVQtJlGiCp',
    //   })
    //   .then(
    //     () => {
    //       notify();
    //       form.current.reset();
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       notifyerror();
    //       console.log('FAILED...', error.text);
    //     },
    //   )
    //   .finally(() => {
    //     setIsSending(false);
    //   });
    //   ;
  // };

  return (
    <div id="contactus">
      <h1 className='title'>
        Get in Touch {">"}
      </h1>
      <div className="contactus">
   
      <div className="left-sections">
      <form ref={form} onSubmit={sendEmail} className='forms'>
        <div className="contents">
        <label htmlfor="name">Name</label>
        <input type="text" name="from_name" id="name"/>
        </div>
        <div className="contents">
        <label htmlFor='email'>Email</label>
        <input type="email" name="from_email" id='email' />
        </div>
        <div className="contents">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject"/>
        </div>
        <div className="contents">
        <label htmlFor='message'>Message</label>
        <textarea name="message" id='message' />
        {/* <CustomButton name={isSending?"Sending...":"Send"}/> */}
        {/* <input type="submit" value="Send" />   */}
        </div>
        <CustomButton name={isSending?"Sending...":"Send"}/>
        <br />
        <br />
        <br />
      </form>
      </div>
      <div className="right-sections">
        {/* <img src="../assets/image/calc.jpg" width="100" height="100" alt="" /> */}
      </div>
    </div>
         
      </div>

  );
};