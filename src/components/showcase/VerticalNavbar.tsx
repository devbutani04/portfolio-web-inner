import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import forHire from '../../assets/pictures/forHireGif.gif';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/pictures/logo.png'

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);

    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    const showhome=()=>{
        navigate('/');
    }

    useEffect(() => {
        if (location.pathname.includes('/projects')) {
            setProjectsExpanded(true);
        }
         else {
            setProjectsExpanded(false);
        }
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
           
           <img src={logo} style={styles.image} alt=" logoo" onClick={showhome}/>
                {/* <h1 style={styles.headerText}>Quillix</h1> */}
                {/* <h1 style={styles.headerText}>Solutions</h1> */}
                <h3 style={styles.headerShowcase}></h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
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
                    // containerStyle={Object.assign(
                    //      {},
                    //      styles.link,
                    //      projectsExpanded && styles.expandedLink
                    // )}
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                
                {
                    // if current path contains projects
                    projectsExpanded && (
                        <div style={styles.insetLinks}>
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/software"
                                text="WEBSITES"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/music"
                                text="SOFTWARE"
                            />
                            <Link
                                containerStyle={styles.insetLink}
                                to="projects/art"
                                text="CHATBOT"
                            />
                        </div>
                    )
                }
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
                
            </div>
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
                {/* <img src={forHire} style={styles.image} alt="" /> */}
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: '48px 0 48px 48px',
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 25,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 5,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 20,
        color:"black"
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
        color:'black',
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '50%',
        cursor:'pointer'
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',

        width: '100%',
    },
};

export default VerticalNavbar;
