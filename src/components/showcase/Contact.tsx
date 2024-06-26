import React, { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import twitterIcon from '../../assets/pictures/contact-twitter.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import instaIcon from '../../assets/pictures/Instagram_icon.jpg';
import whatsappIcon from '../../assets/pictures/WhatsApp_icon.jpg';

import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

// Function to validate email
const validateEmail = (email: string) => {
    const re =
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Utility function to validate the contact number
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
        if (
            validateEmail(email) &&
            validateContact(contact) &&
            name.length > 0 &&
            message.length > 0
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message, contact]);

    async function submitForm() {
        if (!isFormValid) {
            setFormMessage('Form unable to validate, please try again.');
            setFormMessageColor('red');
            return;
        }
        try {
            setIsLoading(true);
            const res = await fetch(
                'http://localhost:5000/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contact,
                        email,
                        name,
                        message,
                    }),
                }
            );
            const data = (await res.json()) as
                | {
                      success: false;
                      error: string;
                  }
                | { success: true };
            if (data.success) {
                setFormMessage(`Message successfully sent. Thank you ${name}!`);
                setContact('');
                setEmail('');
                setName('');
                setMessage('');
                setFormMessageColor(colors.blue);
                setIsLoading(false);
            } else {
                setFormMessage(data.error);
                setFormMessageColor(colors.red);
                setIsLoading(false);
            }
        } catch (e) {
            setFormMessage(
                'There was an error sending your message. Please try again.'
            );
            setFormMessageColor(colors.red);
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
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/quillixsolutions'}
                    />
                    <SocialBox
                        icon={inIcon}
                        link={
                            'http://www.linkedin.com/in/quillix-solutions-b01426313'
                        }
                    />
                    <SocialBox
                        icon={twitterIcon}
                        link={'https://x.com/QuillixSolution'}
                    />
                    <SocialBox
                        icon={instaIcon}
                        link={'https://www.instagram.com/quillixsolvex'}
                    />
                    <SocialBox
                        icon={whatsappIcon}
                        link={'https://api.whatsapp.com/send/?phone=919227042628&text&type=phone_number&app_absent=0'}
                    />
                </div>
            </div>
            <div className="text-block">
                <p>
                    "Need assistance or have a question? Fill out the form
                    below, and our team will get back to you shortly."
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mail@quillix.in">mail@quillix.in</a>
                </p>
                <br />
                <p>
                    <b>Phone: </b>
                    +91 7284853844
                </p>

                <div style={styles.form}>
                    <label>
                        <p>
                            {!name && <span style={styles.star}>*</span>}
                            <b>Your name:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>
                        <p>
                            {!validateEmail(email) && (
                                <span style={styles.star}>*</span>
                            )}
                            <b>Email:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>
                        <p>
                            {!validateContact(contact) && (
                                <span style={styles.star}>*</span>
                            )}
                            <b>Contact Number:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <label>
                        <p>
                            {!message && <span style={styles.star}>*</span>}
                            <b>Message:</b>
                        </p>
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
                            onMouseDown={submitForm}
                        >
                            {!isLoading ? (
                                'Send Message'
                            ) : (
                                <p className="loading">Sending</p>
                            )}
                        </button>
                        <div style={styles.formInfo}>
                            <p
                                style={Object.assign(
                                    {},
                                    { color: formMessageColor }
                                )}
                            >
                                <b>
                                    <sub>
                                        {formMessage
                                            ? `${formMessage}`
                                            : ' All messages get forwarded straight to my personal email'}
                                    </sub>
                                </b>
                            </p>
                            <p>
                                <sub>
                                    {!isFormValid ? (
                                        <span>
                                            <b style={styles.star}>*</b> =
                                            required
                                        </span>
                                    ) : (
                                        '\xa0'
                                    )}
                                </sub>
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div>335, The Galleria 2, The Galleria Business Hub, Mahavir Chowk, Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395010</div>
                <br/>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d873.0511089983053!2d72.88570698781841!3d21.218310447016886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdb617d26c1%3A0xd6cb2f23923633b8!2sThe%20Galleria%202!5e0!3m2!1sen!2sin!4v1718190090429!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
           
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    social: {
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;
