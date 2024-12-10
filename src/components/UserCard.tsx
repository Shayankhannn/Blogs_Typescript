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
            <FaUserCircle className="text-3xl mr-3text-gray-500"/>
            <span>{person.name}</span>
        </section>
        <button >{person.following ? 'Following' : 'Follow'}</button>
    </div>
  )
}

export default UserCard