import { useFetchAllPostsQuery } from '@/app/services/PostService';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList: React.FC = () => {
    const {data: postArray} = useFetchAllPostsQuery();

    return (
        <TransitionGroup>
            {   
                postArray && postArray.map(item=>{
                        return  <CSSTransition
                                    key={item.id}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <PostItem
                                        id={item.id}
                                        title={item.title}
                                        body={item.body}
                                    />
                                </CSSTransition>
                })
            }
        </TransitionGroup>
    );
};

export default PostList;