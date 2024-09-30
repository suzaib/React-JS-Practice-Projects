import styles from './ContactForm.module.css'
import Button from '../Button/Button.jsx'
import { MdMessage } from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import {useState} from 'react';


const ContactForm = () => {

  const [name,setName]=useState("Anshu")
  const [email,setEmail]=useState("anshu@gmail.com");
  const [text,setText]=useState("hello");



  const onSubmit=(event)=>{

    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(name,email,text);
  }

  return (
    <section
    className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}></Button>
            <Button text="VIA CALL" icon={<FaPhoneAlt/>}></Button>
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail/>}></Button>
            <form onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Name</label>
                <textarea name="text" rows="8"></textarea>
              </div>
              <div className={styles.submit_btn}>
                <div>{name+" "+email+" "+text}</div>
                <Button text="SUBMIT BUTTON"></Button></div>
            </form>
        </div>
        <div className={styles.contact_image}>
          <img src="../public/images/mainLogo.svg" alt="photo"/>
        </div>
    </section>
  )
}

export default ContactForm