import { FaUserCircle } from "react-icons/fa";


interface userCardProps {
index:number;
person:string;
}

const UserCard  = ({index,person}: userCardProps) => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <FaUserCircle className="text-3xl mr-3text-gray-500"/>
        </div>
    </div>
  )
}

export default UserCard