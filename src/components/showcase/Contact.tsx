import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import Email.js
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import instaIcon from '../../assets/pictures/Instagram_icon.jpg';
import whatsappIcon from '../../assets/pictures/WhatsApp_icon.jpg';

import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validateContact = (contact: string): boolean => {
    const contactPattern = /^[0-9]{10}$/;
    return contactPattern.test(contact);
};

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => {
    return (
        <a rel="noreferrer" target="_blank" href={link}>
            <div className="big-button-container" style={styles.social}>
                <img src={icon} alt="" style={styles.socialImage} />
            </div>
        </a>
    );
};

const Contact: React.FC<ContactProps> = (props) => {
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const [formMessage, setFormMessage] = useState('');
    const [formMessageColor, setFormMessageColor] = useState('');

    useEffect(() => {
        setIsFormValid(validateEmail(email) && validateContact(contact) && name.length > 0 && message.length > 0);
    }, [email, name, message, contact]);

    async function submitForm(e: React.FormEvent) {
        e.preventDefault(); // Prevent page reload

        if (!isFormValid) {
            setFormMessage('Form unable to validate, please try again.');
            setFormMessageColor('red');
            return;
        }

        try {
            setIsLoading(true);

            // Email.js configuration
            const serviceID = "service_s956frg";
            const templateID = "template_san93us";
            const publicKey = "VNoSmy5Dxu21t9qqW";

            const emailParams = {
                from_name: name,
                from_email: email,
                contact_number: contact,
                message: message,
            };

            const response = await emailjs.send(serviceID, templateID, emailParams, publicKey);

            if (response.status === 200) {
                setFormMessage(`Message successfully sent. Thank you ${name}!`);
                setContact('');
                setEmail('');
                setName('');
                setMessage('');
                setFormMessageColor(colors.blue);
            } else {
                setFormMessage("Failed to send the message. Please try again.");
                setFormMessageColor(colors.red);
            }
        } catch (error) {
            setFormMessage("There was an error sending your message. Please try again.");
            setFormMessageColor(colors.red);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (formMessage.length > 0) {
            setTimeout(() => {
                setFormMessage('');
                setFormMessageColor('');
            }, 4000);
        }
    }, [formMessage]);

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact Us</h1>
                <div style={styles.socials}>
                    <SocialBox icon={ghIcon} link={'https://github.com/quillixsolutions'} />
                    <SocialBox icon={inIcon} link={'http://www.linkedin.com/in/quillix-solutions-b01426313'} />
                    <SocialBox icon={twitterIcon} link={'https://x.com/QuillixSolution'} />
                    <SocialBox icon={instaIcon} link={'https://www.instagram.com/quillixsolvex'} />
                    <SocialBox icon={whatsappIcon} link={'https://api.whatsapp.com/send/?phone=917284853844'} />
                </div>
            </div>

            <div className="text-block">
                <p>
                    "Need assistance or have a question? Fill out the form below, and our team will get back to you shortly."
                </p>

                <form onSubmit={submitForm} style={styles.form}>
                    <label>
                        <p><b>Your name:</b></p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>
                        <p><b>Email:</b></p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>
                        <p><b>Contact Number:</b></p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        placeholder="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <label>
                        <p><b>Message:</b></p>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        style={styles.formItem}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div style={styles.buttons}>
                        <button
                            className="site-button"
                            style={styles.button}
                            type="submit"
                            disabled={!isFormValid || isLoading}
                        >
                            {!isLoading ? 'Send Message' : 'Sending...'}
                        </button>
                        <p style={{ color: formMessageColor }}>
                            <b><sub>{formMessage ? formMessage : 'All messages get forwarded straight to our email'}</sub></b>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    form: { display: 'flex', flexDirection: 'column', marginTop: 32 },
    formItem: { marginTop: 4, marginBottom: 16, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
    socialImage: { width: 36, height: 36 },
    buttons: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    button: { minWidth: 184, padding: 10 },
    header: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' },
    socials: { marginBottom: 16, display: 'flex', justifyContent: 'flex-end' },
    social: { width: 20, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 8 },
};

export default Contact;
