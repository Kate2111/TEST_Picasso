
import { useFetchAllPostsQuery } from '@/app/services/PostService';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect, useRef, useState } from 'react';
import { IPostItem } from '@/modules/PostItem';


const PostList: React.FC = () => {
    const [page, setPage] = useState(1);
    
    const {data: postArray, isLoading} = useFetchAllPostsQuery(page);
    const [allPosts, setAllPosts] = useState<IPostItem[]>([]);

    const lastChild = useRef<HTMLDivElement>(null);
    const totalPage = page < 10;


const observer = useRef<IntersectionObserver>();

useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cbObserver: IntersectionObserverCallback = (entries) => { 
        if (entries[0].isIntersecting && totalPage) {
            setPage(prevPage => prevPage + 1)
        }
    }
    observer.current = new IntersectionObserver(cbObserver)
    if((lastChild.current)) observer.current.observe(lastChild.current)

}, [isLoading]) 


useEffect(() => {
    if (postArray) {
        setAllPosts((prevPosts) => [...prevPosts, ...postArray]);
    }
}, [postArray]);

   
    return (
        <TransitionGroup>
            {   
                allPosts.map(item=>{
                        return  <CSSTransition
                                    key={item.id}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <PostItem 
                                        id = {item.id}
                                        title = {item.title}
                                        body = {item.body}
                                    />
                                </CSSTransition>
                })
            }
            <div ref={lastChild} style={{ width: '100%', height: '1px'}}></div>
        </TransitionGroup>
    );
};

export default PostList;
