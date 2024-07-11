import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import software from '../../assets/pictures/projects/software.gif';
import music from '../../assets/pictures/projects/music.gif';
import chatbots from '../../assets/pictures/chatbots_icon.jpg';
import website from '../../assets/pictures/websites.jpg';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    const isMobile = window.innerWidth <= 600;

    const projectLinkStyle: React.CSSProperties = {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'flex-start',
        justifyContent: 'space-between',
    };

    const projectLinkLeftStyle: React.CSSProperties = {
        marginLeft: isMobile ? 0 : 16,
        alignItems: 'center',
        textAlign: isMobile ? 'center' : 'left',
    };

    const projectLinkImageStyle: React.CSSProperties = {
        width: 48,
        marginRight: isMobile ? 0 : 38,
        marginBottom: isMobile ? 10 : 0,
    };

    const projectTextStyle: React.CSSProperties = {
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: isMobile ? 'center' : 'left',
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={projectLinkStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={projectLinkLeftStyle}>
                <img
                    src={icon}
                    style={{ ...projectLinkImageStyle, ...iconStyle }}
                    alt=""
                />
                <div style={projectTextStyle}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <p>
                Click on one of the areas below to check out some of my favorite
                projects I've done in that field. I spent a lot of time to
                include a lot of visuals and interactive media to showcase each
                project. Enjoy!
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={website}
                    iconStyle={styles.computerIcon}
                    title="Websites"
                    subtitle=""
                    route="software"
                />
                <ProjectBox
                    icon={software}
                    iconStyle={styles.SoftwareIcon}
                    title="Software"
                    subtitle=""
                    route="Software"
                />
                <ProjectBox
                    icon={chatbots}
                    iconStyle={styles.chatbots}
                    title="Chatbot"
                    subtitle=""
                    route="Chatbot"
                />
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkRight: {},
    computerIcon: {
        width: 56,
        height: 56,
    },
    musicIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 42,
        height: 74,
    },
};

export default Projects;
