import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import image1 from '../../assets/pictures/blog1.jpg';
import image2 from '../../assets/pictures/blog2.jpg';
import { Grid} from '@mui/material';
import axios from 'axios';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavTitle = styled.h1`
    font-size: 24px;
    margin: 0;
`;

const NavLinks = styled.div`
    a {
        text-decoration: none;
        font-size: 16px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    // padding: 60px;
    // position: relative;
    // margin-left: 110px;
    // margin: auto;
`;

const Card = styled.div<{ isFixed?: boolean }>`
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 300px;
    display: flex;
    flex-direction: column;

    ${props => props.isFixed && css`
        position: fixed;
        right: 30px;
        top: 100px; /* Adjust this value based on the height of the navbar */
        z-index: 10;
    `}
`;

const CardImage = styled.div<{ imageUrl: string }>`
    height: 250px;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.imageUrl});
`;

const CardContent = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const CardCategory = styled.span`
    display: inline-block;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #eceff1;
    font-size: 14px;
`;

const CardTitle = styled.h3`
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: bold;
`;

const CardDescription = styled.p`
    flex-grow: 1;
    font-size: 16px;
    color: #616161;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #9e9e9e;
`;

const CardAuthor = styled.span`
    &::before {
        content: url('url-to-author-avatar');
        margin-right: 5px;
        border-radius: 50%;
    }
`;

const Blog: React.FC = () => {
    let [Search , setSearch] = useState('');

    const cards = [
        {
            category: 'Technology',
            title: "WHAT'S YOUR STORY?",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
            author: 'Jane Doe',
            time: '2h ago',
            imageUrl: image1,
            isFixed: false
        },
        {
            category: 'Technology',
            title: 'My Blog',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
            author: 'Jony Doe',
            time: 'Yesterday',
            imageUrl: image2,
            isFixed: false
        }
    ];
    

    return (
        <div className="site-page-content">
            {/* <Navbar>
                <NavTitle>My Blog</NavTitle>
                <NavLinks>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </NavLinks>
            </Navbar> */}
                <h2>My Blog</h2><br/><br/>
                <input style={styles.formItem} type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            <GalleryContainer>
            <Grid container spacing={3}>
                {cards.filter((card1 , i1)=>{
                    if (card1.title.match(Search)) {
                        return card1
                    }
                })
                .map((card, index) => (
                    <Grid item xs={12} sm={6} md={4}>
                    <Card key={index} isFixed={card.isFixed}>
                        <CardImage imageUrl={card.imageUrl} />
                        <CardContent>
                            <CardCategory>{card.category}</CardCategory>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                            <CardFooter>
                                <CardAuthor>{card.author}</CardAuthor>
                                <span>{card.time}</span>
                            </CardFooter>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </GalleryContainer>
            
        </div>
    );
}
const styles: { [key: string]: React.CSSProperties } = {
    formItem: {
        marginTop: 4,
        marginBottom: 16,
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    }
}

export default Blog;
