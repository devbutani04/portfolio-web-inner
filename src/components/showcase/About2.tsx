import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react'; // Import CSSProperties for style typing

// Importing images from assets
// import workingAtComputer from '../../assets/pictures/workingAtComputer.jpg';
import jeel from '../../assets/pictures/jeel.jpg';
import nikhil from '../../assets/pictures/nikhil.jpg';
import yogesh from '../../assets/pictures/yogesh.jpg';
import currentMe from '../../assets/pictures/currentme.jpg';
import logoo from '../../assets/pictures/logo.png';

// Importing components
// import ResumeDownload from './ResumeDownload';

// TypeScript Props Definition (currently empty as no props are used)
export interface AboutProps { }

const About: React.FC<AboutProps> = () => {
    return (
        <div className="site-page-content">
            {/* <h1>Welcome to Quillix Solutions</h1> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>to Quillix Solutions...</h3>
            <p><br />
                Welcome to Quillix Solutions, your trusted partner in IT solutions and services.
                Founded in 2021, we are dedicated to delivering top-notch IT services that empower
                businesses to achieve their full potential. With a team of experienced professionals
                and a passion for innovation, we provide a wide range of services tailored to meet
                the unique needs of our clients.
            </p><br /><br />
            {/* <ResumeDownload /> */}

            <h3>About Us</h3><br />
            <p>
                {/* \Our Story */}
                Quillix was born out of the shared dreams and determination of three passionate individuals: Jeel Borda, Nikhil Kachhadiya, and Yogesh Shekhada. In 2021, while studying and navigating the challenges of student life in Singapore, we found ourselves deeply immersed in the world of IT projects. The synergy of our skills and the drive to create something impactful led us to form Quillix.<br /><br />

                Starting from humble beginnings, we faced numerous challenges but were fueled by our unwavering commitment to innovation and excellence. Our diverse expertise—Jeel as the visionary Founder, Nikhil as the meticulous CFO, and Yogesh as the dynamic CEO—allowed us to complement each other and steer Quillix towards success.<br /><br />


                Today, Quillix stands as a testament to our journey, delivering cutting-edge IT solutions and transforming ideas into reality. We continue to embrace the spirit of innovation and teamwork that founded our company, always striving to exceed the expectations of our clients and partners.<br /><br />

                Welcome to Quillix—where passion meets technology.
            </p><br />
            <h3>WE ARE...</h3><br />
            {/* <div className="image-container" style={styles.imagesContainer}> */}
            <div style={styles.img}>
                <img src={jeel} style={styles.image} alt="Jeel Borda" />
                <p><strong>Jeel Borda</strong>
                    <br />The Visionary Founder<br /><br />
                    Jeel Borda's journey with Quillix began in a modest single room in Singapore, where he stayed with his steadfast supporter, Yogesh Shekhada. With a vision to create a dynamic IT company, Jeel started by securing clients from the UK. Recognizing the immense talent pool in India, he recruited brilliant students, offering them opportunities to work remotely on cutting-edge projects.<br /><br />

                    Despite the geographical challenges, Jeel's adept management skills, coupled with Yogesh's unwavering support, allowed them to seamlessly oversee operations from India. Their collaborative effort in harnessing and coordinating remote talent has been instrumental in driving Quillix’s success, turning a humble beginning into a thriving IT company. Jeel’s story is a testament to visionary leadership, teamwork, and an unwavering commitment to excellence.<br />
                </p>
            </div><br /><br />
            <div>
                <p><strong>Nikhil Kachhadiya</strong>
                    <br />The Financial Strategist<br /><br />
                    Nikhil Kachhadiya's path to Quillix began alongside Jeel Borda during their studies in Singapore. After earning his degree, Nikhil ventured to New Zealand, where he embarked on a career in the IT sector. There, he honed his skills in managing clients and financial systems, gaining invaluable experience and expertise.<br /><br />

                    In 2022, Nikhil joined the Quillix team as the CFO, bringing with him a wealth of knowledge and a strategic approach to financial management. His ability to navigate complex financial landscapes and his commitment to excellence have been crucial in strengthening Quillix's financial foundation. Nikhil's story is one of continuous growth, dedication, and the pursuit of excellence in every endeavor.
                </p>
                <img src={nikhil} style={styles.image} alt="Nikhil Kachhadiya" />
            </div><br /><br />
            <div>
                <img src={yogesh} style={styles.image} alt="Yogesh Shekhada" />
                <p><strong>Yogesh Shekhada
                </strong>
                    <br />The Motivational Leader<br /><br />
                    Yogesh Shekhada's journey with Quillix began in the same room in Singapore where he supported Jeel Borda during the company's early days. With an exceptional talent for managing staff, Yogesh quickly became an integral part of the team. His ability to provide the best advice and motivation has been pivotal in fostering a positive and productive work environment.<br /><br />

                    Yogesh's deep understanding of team dynamics and his unwavering support for Jeel during their time in Singapore laid the foundation for Quillix’s success. As the CEO, his leadership continues to inspire and drive the team towards achieving their goals. Yogesh’s story is a testament to the power of effective leadership, collaboration, and a relentless commitment to excellence. </p>
            </div><br /><br />
            {/* </div> */}
            <br />
            <h3>Why Choose Us?</h3>
            <br />
            <p>
                Our expertise and customer-centric approach, combined with a proven track record, ensure
                that we deliver high-quality, innovative IT solutions. We are committed to excellence in
                all that we do, providing comprehensive IT services that meet the varied needs of our clients.
            </p>

            <p>
                Thanks for reading about me and exploring my portfolio website. If you have any questions or
                would like to get in touch, feel free to reach me through the contact page or send an email
                to <a href="mailto:Quillixsolutions@gmail.com">Quillixsolutions@gmail.com</a>.
            </p>
        </div>
    );
};

// Styles for the component using CSSProperties for correct typing
const styles: { [key: string]: CSSProperties } = {
    img: {

    },
    imagesContainer: {
        // display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '20px 0'
    },
    image: {
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        objectFit: 'cover',  // Correctly typed value for objectFit
        margin: '80px 20px 0 0'
    }
};

export default About;
