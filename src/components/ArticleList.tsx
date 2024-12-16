import React from 'react'
import { Blog } from '../Shared/Types'
import { useBlog } from '../Shared/BlogContext';
import ArticleCard from './ArticleCard';

interface ArticleListProp {
    onEdit: (blog: Blog)=>void;
}

const ArticleList: React.FC<ArticleListProp> = ({onEdit}) => {
  
  const {blogs,deleteBlog} = useBlog()
    return (
    <div className='ml-[5rem]'>
{blogs.map(blog =>(
<ArticleCard key={blog.id} article={blog} onDelete={()=>deleteBlog(blog.id)} onEdit={()=>onEdit(blog)}   /> 
))}
    </div>
  )
}

export default ArticleList