import UserCard from "./UserCard"



const peoplesTofollow  = [
    {name:"Allen Gouse",following:false},
    {name:"Ruben Bator",following:true},
    {name:"Aspen Stantum",following:false},
    {name:"Jack Mike",following:false},
]
const PeopleToFollow = () => {
  return (
    <div className="shadow rounded-lg bg-white p-4">
<h3 className="font-semibold mb-4 text-lg">
People To Follow
</h3>
<div className="space-y-4">
    {peoplesTofollow.map((person,index)=>(
        <UserCard index={index} person={person}/>
    ))}
</div>
    </div>
  )
}

export default PeopleToFollow