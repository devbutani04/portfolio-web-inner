import React from 'react';
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
    return (
        <div className="site-page-content">
            <h1>Websites</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            {/* <ResumeDownload /> */}
            <br />
            <div className="text-block">
                <h2>henryheffernan.com</h2>
                <br />
                <p>
                    henryheffernan.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2022, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at school and if you are reading this, it's
                    pretty much done!
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
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://henryheffernan.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                {/* <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.com"
                        >
                            <p>
                                <b>[3D Site]</b> - henryheffernan.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - henryheffernan.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul> */}
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/henryheffernan"
                    >
                        @henryheffernan
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>GyanVani</h2>
                <br />
                <p>
                Project GyanVani addresses academic stress and mental health issues among students by developing a chatbot based on the teachings of the Bhagavad Gita. Using modern technologies such as machine learning, natural language processing (NLP) and the Flutter framework, GyanVani offers a unique combination of traditional wisdom with modern educational support. This chat room offers real-time help, answers academic questions and provides ethical and spiritual guidance based on the principles of the Bhagavad Gita.The methodology included a multidisciplinary approach that combined software engineering, artificial intelligence and educational psychology. 
                </p>
                <br />
                {/* <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Guntattchment Saga Gameplay
                                demo, featuring the main character along with a
                                few of our grunt and dasher enemies.
                            </sub>
                        </p>
                    </div>
                </div> */}
                <p>
                The GyanVani chat room is designed to address the many challenges students face, including academic stress, social pressure and mental health issues. These challenges are exacerbated by the increasing academic demands placed on students and societal expectations. Although valuable, traditional support systems often fail to meet the growing needs of students. Although effective, counselors and peer support groups are limited by their availability and accessibility. In addition, there is a significant stigma associated with seeking mental health support that prevents many students from getting the help they need.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/quillixsolutions/GyanVani"
                        >
                            <p>
                                <b>[GitHub]</b> https://github.com/quillixsolutions/GyanVani
                            </p>
                        </a>
                    </li>
                   
                </ul>
                <p>
                    Unfortunately, the game currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes, however, a link to the game will be added here.
                </p>
            </div>
            <div className="text-block">
                <h2>Metro-App</h2>
                <br />
                <p>
                    While working at Hover, I spent a lot of time on GitHub
                    issue pages looking for answers and solutions to problems I
                    had run into. I would always find myself sifting though the
                    comments trying to find the right answer, which usually had
                    the most upvotes and positive reactions. With that
                    information, I decided to create a very simple chrome
                    extension that would sift through all the comments on the
                    page, sort them by positive reactions, and then allow you to
                    traverse them from most positive reactions to least positive
                    reactions.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skip the Scroll in action, finding
                            the highest rated comments and scrolling right to
                            them
                        </sub>
                    </p>
                </div> */}
                <p>
                    The extension is open source and currently released on the
                    Chrome web store. Skip the Scroll is obviously not a project
                    with massive scope, but was fun to make and dive into the
                    world of browser extensions. I wanted to showcase since it's
                    a developer tool and I wanna give it some visibility for
                    those who might find it useful.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/quillixsolutions/Metro-App"
                        >
                            <p>
                                <b>[GitHub]</b> https://github.com/quillixsolutions/Metro-App
                            </p>
                        </a>
                    </li>
                    
                </ul>
                {/* <p>
                    If you are a developer and have also found yourself
                    scrolling through github comment after github comment saying
                    "i also have this problem...", then I highly recommend you
                    check out Skip the Scroll to save you some of your precious
                    time. If you like it, feel free to star it on GitHub and
                    rate it on the Chrome web store.
                </p> */}
            </div>
            {/* <ResumeDownload /> */}
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
};

export default SoftwareProjects;
