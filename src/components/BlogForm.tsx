import React, { FC, useState } from 'react'
import { useBlog } from '../Shared/BlogContext'
import { Blog } from '../Shared/Types'

interface BlogFormProps {
    existingBlog?:Blog
}


const BlogForm : FC<BlogFormProps> = ({existingBlog,onClose}) => {
  
    const {addBlog,updateBlog} = useBlog()
    const [title,setTitle] = useState()
  
    return (
    <div>

    </div>
  )
}

export default BlogForm