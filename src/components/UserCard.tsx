import { FaUserCircle } from "react-icons/fa";


interface userCardProps {
  index:number;
person:{
  name: string;
    following: boolean;
};
}

const UserCard  = ({index,person}: userCardProps) => {
  return (
    <div className="flex items-center justify-between">
        <section className="flex items-center">
            <FaUserCircle className="text-3xl mr-3 text-gray-500"/>
            <span>{person.name}</span>
        </section>
        <button className={`px-4 py-1 rounded-xl text-sm bg-black text-white ${person.following ? 'bg-gray-500' : 'bg-black'}`}>{person.following ? 'Following' : 'Follow'}</button>
    </div>
  )
}

export default UserCard