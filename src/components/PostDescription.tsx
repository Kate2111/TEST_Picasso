import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams} from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useGetPostByIdQuery } from '@/app/services/PostService';


const PostDescription: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{id: any}>(); 
    const index: number = parseInt(id);

    const { data: post } = useGetPostByIdQuery(index);

    return (<>
            
            <div className='wrapper__post'>
                <MyButton  clickHandler={() =>navigate(`/TEST_Picasso`)}>go back</MyButton>
                
                {
                    post && <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {`Post number ${post.id}`}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                }
            </div>
        </>
    );
};

export default PostDescription;