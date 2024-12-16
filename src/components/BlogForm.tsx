import React, { FC, useEffect, useState } from "react";
import { useBlog } from "../Shared/BlogContext";
import { Blog } from "../Shared/Types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm: FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlog();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = ()=>{
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingBlog) {
      updateBlog(blog)
    }else{
      addBlog(blog)
    }
    onClose();

  }

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto ">
      <h3 className="font-semibold text-xl mb-4 text-gray-800">
        {existingBlog ? "Edit Blog" : "Add Blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full resize-none  p-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 resize-none h-32 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          placeholder="Image Url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      
        <section className="flex justify-end mt-6 space-x-6">
          <button
            className="px-6 py-2 font-semibold bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700  focus:outline-none "
            onClick={handleSubmit}
          >
            {existingBlog ? "Update" : "Add"}
          </button>
          <button
            className="px-6 py-2 font-semibold bg-red-600 text-white rounded-xl shadow-sm hover:bg-red-700  focus:outline-none "
            onClick={onClose}
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogForm;
