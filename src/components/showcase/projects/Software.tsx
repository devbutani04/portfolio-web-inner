import React, { useState } from 'react';
// @ts-ignore
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import VideoAsset from '../../general/VideoAsset';

import website1 from './website1.jpg';
import website2 from './website2.jpg';
import website3 from './website3.jpg';
import website4 from './website4.jpg';
import website6 from './website6.jpg';
import website7 from './website7.jpg';
import website8 from './website8.jpg';


export interface SoftwareProjectsProps { }

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
            <div className="text-block">
                <h2>quillixadx.com</h2>
                <br />
                <p>
                    Quillix AD-X is a digital marketing and Shopify development agency specializing in e-commerce growth strategies. The website features a sleek, modern design with a data-driven approach, emphasizing business scaling, strategic marketing, and expert Shopify solutions. It is fully responsive, ensuring seamless access across desktop, tablet, and mobile devices.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://quillixadx.com' target='_blank'>
                        <img src={website1} style={styles.image} alt="website1" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>quillixacademy.com</h2>
                <br />
                <p>
                    Quillix Academy is an IT institute offering IT and tech-focused courses, including AI, Machine Learning, Web Development, Data Science, and Cybersecurity. The website has a modern, professional design, emphasizing hands-on training and 100% job placement assistance to help learners kickstart their tech careers. The platform is fully responsive and provides expert-led courses tailored to industry demands.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://quillixacademy.com' target='_blank'>
                    <img src={website2} style={styles.image} alt="website2" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>eyesark.in</h2>
                <br />
                <p>
                    EYESARK AD TECH PVT LTD is a digital billboard advertising company based in Surat, Gujarat, India. Established in October 2023, it specializes in cost-effective and impactful digital advertising solutions to help businesses enhance their brand visibility. The company focuses on strategic ad placements, dynamic billboards, and client-centric marketing strategies under the motto: "Connect, Impact, Grow."
                </p>
                <br />
                <div style={styles.width}>
                    <a href="https://eyesark.in" target='_blank'>
                    <img src={website3} style={styles.image} alt="website3" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>mafatpani.com</h2>
                <br />
                <p>
                    Mafat Pani is a social initiative based in Surat, Gujarat, dedicated to providing free mineral water to communities. By partnering with businesses, they offer advertising opportunities on their water bottles, allowing brands to gain visibility while supporting public health. Water is distributed at high-traffic locations such as malls, traffic intersections, and community events. For more information or to get involved, visit their official website at mafatpani.com.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://mafatpani.com' target='_blank'>
                    <img src={website4} style={styles.image} alt="website4" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>snugdy.in</h2>
                <br />
                <p>
                    Snugdy.in is an online retail platform based in Surat, Gujarat, India. The website features a modern design with categories such as Handmade Murti, Unique Products, Home Decor, Table Clock, Bags, etc. Additionally, Snugdy.in provides free worldwide shipping with no minimum purchase required.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://snugdy.in' target='_blank'>
                    <img src={website8} style={styles.image} alt="website8" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>amritdesignerstudio.in</h2>
                <br />
                <p>
                    Amrit Designer Studio is an online fashion retailer, specializing in women's ethnic wear. Their collection includes sarees, kurta sets, and silk sarees, featuring premium quality fabrics and exclusive designs. The studio emphasizes perfect fit and luxurious materials, making their attire ideal for festive occasions, weddings, and parties. They offer cash on delivery and free shipping options.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://amritdesignerstudio.in' target='_blank'>
                    <img src={website7} style={styles.image} alt="website7" />
                    </a>
                </div>
            </div>
            <div className="text-block">
                <h2>whiterosejewellers.com</h2>
                <br />
                <p>
                    White Rose Jewellers is an online jewelry retailer offering a diverse collection of fashion jewelry, including bracelets, earrings, necklaces, and jewelry sets. They emphasize assured quality and craftsmanship, aiming to provide elegant designs suitable for various occasions.
                </p>
                <br />
                <div style={styles.width}>
                    <a href='https://whiterosejewellers.com' target='_blank'>
                    <img src={website6} style={styles.image} alt="website3" />
                    </a>
                </div>
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
    btn: {
        backgroundColor: "rgb(62, 150, 151)",
        padding: 10,
        width: '10%',
        color: 'white',
        border: 'none'
    },
    width: {
        width: '100%',
    },
    image: {
        height: 'auto',
        width: '100%',
        objectFit: 'cover',  // Correctly typed value for objectFit

    }
};


export default SoftwareProjects;
