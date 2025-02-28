import React from 'react';

import girlRun from '../../../assets/pictures/projects/art/girl-run.gif';
import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>CHATBOT</h1>
            {/* <h3>Endeavors</h3> */}
            <br />
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
               
            </div>
           
          
        </div>
    );
};

export default ArtProjects;
