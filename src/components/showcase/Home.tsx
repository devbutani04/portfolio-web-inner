import React from 'react';
import { Link } from '../general';
// import logo from '../../assets/pictures/LOGO2.png'
import logo from '../../assets/pictures/logo2.png'

import forhire from '../../assets/pictures/forHireGif.gif';
import { useNavigate } from 'react-router-dom';
import ResizeIndicator from '../os/ResizeIndicator';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };

   

    return (
        <div className='page' style={styles.page}>
            <div style={styles.header}>
               <img src={logo} className='animate__animated animate__zoomIn'></img>
                {/* <h1 className='animate__animated animate__zoomIn'><img src={logo1} /></h1> */}
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="SERVICES"
                />
                  <Link
                    containerStyle={styles.link}
                    to="gallery"
                    text="GALLERY"
                />
                {/* <Link
                    containerStyle={styles.link}
                    to="blog"
                    text="BLOG"
                /> */}
                 <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
              
                
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forhire} alt="" /> */}
            </div>
            <div>
            
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height:'100%'
    },
    header: {
        marginBottom: 64,
        marginTop: 64,
        display:'flex',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
        color:'black',
        textDecoration:'auto'
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 1.5,
    }
};

export default Home;


