import React from 'react';

import service1 from '../../assets/pictures/service1.jpg';
import service2 from '../../assets/pictures/service2.jpg';
import service3 from '../../assets/pictures/service3.jpg';
import service4 from '../../assets/pictures/service4.jpg';

import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            {/* <ResumeDownload /> */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Web Development</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div style={styles.textRow}>
                    <h3>Frontend Development</h3>   
                </div>
                <p style={styles.textRow}>
                A web developer's job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website's performance and capacity.
                </p>
                <br />
                <div style={styles.row}>
                <ul style={styles.width}>
                    <li>
                        <p><b>Responsive Design</b></p>
                    </li>
                    <li>
                        <p><b>Cross-Browser Compatibility</b></p>
                    </li>
                    <li>
                        <p><b>User Experience (UX) Design</b></p>
                    </li>
                    <li>
                        <p><b>Search Engine Optimization (SEO)</b></p>
                    </li>
                    <li>
                        <p><b>Content Management Systems (CMS)</b></p>
                    </li>
                    <li>
                        <p><b>E-Commerce Solutions</b></p>
                    </li>
                    <li>
                        <p><b>Web Performance Optimization</b></p>
                    </li>
                    <li>
                        <p><b>Custom Web Applications</b></p>
                    </li>
                    <li>
                        <p><b>Web Security</b></p>
                    </li>
                    <li>
                        <p><b>Social Media Integration</b></p>
                    </li>
                    <li>
                        <p><b>Analytics and Reporting</b></p>
                    </li>
                </ul>
                <div style={styles.width}>
                    <img src={service1} style={styles.image} alt="service1" />
                </div>
                </div>
               
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Software Developers</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div style={styles.textRow}>
                    <h3>Team Lead & Engineer</h3>
                </div>
                <p style={styles.textRow}>
                Software developers use their programming skills to create new software and improve existing software applications. They design and write the code used to build everything from operating systems to mobile apps to video games.
                </p>
                <br />
                <div style={styles.row}>
                    <ul style={styles.width}>
                        <li>
                            <p><b>Expertise in Programming</b></p>
                        </li>
                        <li>
                            <p><b>Full Stack Development</b></p>
                        </li>
                        <li>
                            <p><b>Problem Solving</b></p>
                        </li>
                        <li>
                            <p><b>Collaborative Team Player</b></p>
                        </li>
                        <li>
                            <p><b>Continuous Learning</b></p>
                        </li>
                    </ul>
                    <div style={styles.width}>
                        <img src={service2} style={styles.image} alt="service2" />
                    </div>
                </div>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Digital Marketing</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div style={styles.textRow}>
                    <h3>Special Effects Technician</h3>
                </div>
                <p style={styles.textRow}>
                Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.
                </p>
                <br />
                <div style={styles.row}>
                    <ul style={styles.width}>
                        <li>
                            <p><b>Strategic Planning</b></p>
                        </li>
                        <li>
                            <p><b>Search Engine Optimization (SEO)</b></p>
                        </li>
                        <li>
                            <p><b>Analytics and Reporting</b></p>
                        </li>
                        <li>
                            <p><b>Content Marketing</b></p>
                        </li>
                        <li>
                            <p><b>Pay-Per-Click (PPC) Advertising:</b></p>
                        </li>
                        <li>
                            <p><b> Mobile Marketing</b></p>
                        </li>
                        <li>
                            <p><b>Competitive Analysis</b></p>
                        </li>
                    </ul>
                    <div style={styles.width}>
                        <img src={service3} style={styles.image} alt="service3" />
                    </div>
                </div>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IT Counselling</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <div style={styles.textRow}>
                    <h3>Special Effects Technician</h3>
                </div>
                <p style={styles.textRow}>
                IT Counseling offers expert guidance and support to individuals and organizations seeking to navigate the complexities of information technology. Our counselors provide personalized advice on a wide range of IT topics, including software development, system architecture, cybersecurity, and IT project management. Whether you're looking to enhance your technical skills, streamline your IT processes, or address specific challenges, our experienced counselors are here to help. With a focus on practical solutions and strategic insights, we empower our clients to make informed decisions and achieve their IT goals efficiently and effectively.
                </p>
                <br />
                <div style={styles.row}>
                    <ul style={styles.width}>
                        <li>
                            <p><b>Personalized Guidance</b></p>
                        </li>
                        <li>
                            <p><b>Expert Insights</b></p>
                        </li>
                        <li>
                            <p><b>Strategic Planning</b></p>
                        </li>
                        <li>
                            <p><b>Skill Development</b></p>
                        </li>
                        <li>
                            <p><b>Problem Solving</b></p>
                        </li>
                        <li>
                            <p><b>Risk Management</b></p>
                        </li>
                        <li>
                            <p><b>Project Management</b></p>
                        </li>
                        <li>
                            <p><b>Vendor Management</b></p>
                        </li>
                        <li>
                            <p><b>Continuous Improvement</b></p>
                        </li>
                        <li>
                            <p><b>Confidentiality and Trust</b></p>
                        </li>
                    </ul>
                    <div style={styles.width}>
                        <img src={service4} style={styles.image} alt="service4" />
                    </div>
                </div>
               
            </div>
        </div>
    );
};


const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    width:{
        width:'50%',
    },
    headerRow: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textRow: {
        margin:'10px 0'
    },
    image: {
        height: 'auto',
        width: '100%',
        objectFit: 'cover',  // Correctly typed value for objectFit
        borderRadius:'20px'
    },
    row: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
};



export default Experience;