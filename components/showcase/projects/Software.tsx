import React, { useState } from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="site-page-content">
            <h1>Websites</h1>
            {/* <h3>Projects</h3> */}
            <br />
            <div className="text-block">
                <h2>quillix.in</h2>
                <br />
                <p>
                   
                At Quillix Solutions, we transform your digital dreams into reality. With a passion for innovation and a commitment to excellence, we specialize in creating stunning, user-friendly websites that help your business stand out in the digital landscape.
                Quillix Solutions is a team of dedicated professionals with expertise in web design, web development, application development and digital marketing. Our mission is to deliver tailor-made web solutions that meet the unique needs of each client, ensuring a seamless and engaging online experience for their audience.
                    {/* quillix.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2022, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at school and if you are reading this, it's
                    pretty much done! */}
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
               
                <button style={styles.btn} onClick={toggleVisibility}>Note :</button>
                {isVisible && <p>Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe.The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.</p>}
    
</div>
  
                <br />
                
            </div>
    );
};



const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
    btn:{
        backgroundColor:"rgb(62, 150, 151)",
        padding:10,
        width:'10%',
        color:'white',
        border:'none'
    }
};


export default SoftwareProjects;
