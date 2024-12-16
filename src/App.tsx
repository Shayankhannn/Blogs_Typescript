import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./Shared/BlogContext";
import { useState } from "react";
import { Blog } from "./Shared/Types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";

const App = () => {

const [isModalOpen,setIsModalOpen] = useState(false)
const [editingBlog,setEditingBlog] = useState<Blog | null>(null)

const openModalForNewBlog = ()=>{
  setEditingBlog(null)
  setIsModalOpen(true)
}

const openModalForEdit = ()=>{
  setEditingBlog(blog)
  setIsModalOpen(true)
}

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button onClick={openModalForNewBlog} className="ml-[7rem] bg-black flex items-center justify-center text-white px-4 py-2 rounded mb-4">
                Add New Blog <IoMdAddCircle className="ml-[.5rem]"/>
              </button>
              {/* article list  */}

              {isModalOpen && <Modal onClose={()=>setIsModalOpen(false)}>
                
                <BlogForm
                existingBlog={editingBlog}
                onClose={()=>setIsModalOpen(false)}
                />

                </Modal>}

            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
