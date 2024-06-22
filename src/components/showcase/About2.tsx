import React from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react'; // Import CSSProperties for style typing

// Importing images from assets
import workingAtComputer from '../../assets/pictures/workingAtComputer.jpg';
import currentMe from '../../assets/pictures/currentme.jpg';
import  logoo from '../../assets/pictures/logo.png';

// Importing components
// import ResumeDownload from './ResumeDownload';

// TypeScript Props Definition (currently empty as no props are used)
export interface AboutProps {}

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
            </p>
            {/* <ResumeDownload /> */}
            
            <h3>About Me</h3>
            <p>
                From a young age, I was curious about how things worked, which led me to fall in love with
                building things using Lego. This curiosity grew as I delved into programming and attended
                Rensselaer Polytechnic Institute to study Computer Science.
            </p>
            
            {/* <div className="image-container" style={styles.imagesContainer}> */}
                <div style={styles.img}>
                    <img src={workingAtComputer} style={styles.image} alt="Working at computer" />
                    <p>name<br/>Backend Software Engineer<br/>
                    One of the first members of the Debrecen team, started just a few weeks after the opening of the office. Team lead, mostly Java guy, but open to any technologies that promise a great result. Loves all kinds of sports, but most probably you'll find him running in the mountains on some muddy obstacle races. </p>
                </div>
                <div>
                <p>name<br/>CEO<br/>
                Our CEO, responsible for maintaining and creating business relationships with new and existing customers. Loves boxing, skiing, snowboarding and spending time with his wife and 2 beautiful kids. </p>
                    <img src={workingAtComputer} style={styles.image} alt=" logoo" />
                </div>
                <div>
                <img src={workingAtComputer} style={styles.image} alt="Current me" />
                <p>name<br/>General Manager<br/>
                Our General Manager basically responsible for everything. Married and has 3 beautiful daughters. Loves to make some nice steaks or other meat on his barbeque and gets excited about kitesurfing around the South Holland beaches. </p>
                </div>
            {/* </div> */}
            <br/>
            <h3>Why Choose Us?</h3>
            <br/>
            <p>
                Our expertise and customer-centric approach, combined with a proven track record, ensure
                that we deliver high-quality, innovative IT solutions. We are committed to excellence in
                all that we do, providing comprehensive IT services that meet the varied needs of our clients.
            </p>
            
            <p>
                Thanks for reading about me and exploring my portfolio website. If you have any questions or
                would like to get in touch, feel free to reach me through the contact page or send an email
                to <a href="mailto:mail@quillix.in">mail@quillix.in</a>.
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
        margin: '50px 20px 0 0'
    }
};

export default About;
