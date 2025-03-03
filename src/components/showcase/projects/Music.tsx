import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>SOFTWARE</h1>
            {/* <h3>Ventures</h3> */}
            <br />
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
                
            </div>
           

        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
