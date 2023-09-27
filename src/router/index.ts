import PostPage from '@/pages/PostPage';
import PostDescription from '@/components/PostDescription';

export interface IRoute {
    path: string,
    element: React.ComponentType,
    exact?: boolean
}

export enum RouterNames {
    MAIN_PAGE = '/post',
    POST_ID = '/post/:id'
}

export const routes: IRoute[] = [
    {path: RouterNames.MAIN_PAGE, exact: true, element: PostPage},
    {path: RouterNames.POST_ID, exact: true, element: PostDescription}
]