import { useParams} from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useGetPostByIdQuery } from '@/services/PostService';

const PostDescription: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    let index: number;
    if(params.id) {
        index = parseInt(params.id);
    }

    const {data: postArray} = useGetPostByIdQuery();

    return (<>
            <MyButton  clickHandler={() =>navigate(`/post`)}>go back</MyButton>
            
            <div className='wrapper-book'>
                {
                    [...postArray].map(item => {
                        if(item.id === index) {
                            console.log(item)
                            return  <div key={item.id}>
                                        <h1>{item.title}</h1> 
                                        <h2>{item.body}</h2>
                                    </div>
            
                        }
                    })
                }
            </div>
  
    </>
        
    );
};

export default PostDescription;