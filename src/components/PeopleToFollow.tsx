import UserCard from "./UserCard"

const peopleTofollow = [
    {name:"Allen Gouse",Following:false},
    {name:"Ruben Bator",Following:true},
    {name:"Aspen Stantum",Following:false},
    {name:"Jack Mike",Following:false}
]
const PeopleToFollow = () => {
  return (
    <div className="shadow rounded-lg bg-white p-4">
<h3 className="font-semibold mb-4 text-lg">
People To Follow
</h3>
<div className="space-y-4">
    {peopleTofollow.map((index,person)=>(
        <UserCard key={index} person={person}/>
    ))}
</div>
    </div>
  )
}

export default PeopleToFollow