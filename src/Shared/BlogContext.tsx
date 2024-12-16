import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Blog } from "./Types";

interface BlogsContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogsContextType | undefined>(undefined);

export const  BlogProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const addBlog = (blog: Blog) => {
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
    };

    const updateBlog = (updatedBlog: Blog) => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
        );
    };

    const deleteBlog = (id: number) => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = ()=>{
    const context = useContext(BlogContext)

    if(!context){
        throw new Error("useblog must be use within BlogProvider");
        
    }

    return context;
}