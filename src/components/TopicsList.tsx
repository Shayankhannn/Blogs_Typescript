const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading",
];

const TopicsList = () => {
  return (
    <div className="bg-white  rounded-lg p-4 shadow mt-8">
      <h3 className="font-semi-bold text-lg mb-4">Topics For You</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer
           hover:bg-gray-200">
            {topic}

           </span>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
