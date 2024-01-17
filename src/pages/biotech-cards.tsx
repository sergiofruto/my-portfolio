const biotechcards = [
  {
    name: "Leaf Infiltration in Plant Science",
    image: "url1",
    color: "somecolor1",
    label: "phyllotaxy",
    length: "5 minutes read",
  },
  {
    name: "Recombinant DNA Technology and Biosafety",
    image: "url2",
    color: "somecolor2",
    label: "genetics",
    length: "2 minutes read",
  },
  {
    name: "Efficient and Sustainable Water Purification",
    image: "url3",
    color: "somecolor3",
    label: "hydrology",
    length: "3 minutes read",
  },
];

const BiotechCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {biotechcards.map((card, index) => (
        <div
          key={index}
          className={`bg-${card.color} p-6 rounded-lg shadow-md`}
        >
          <img
            src={card.image}
            alt={card.name}
            className="mb-4 w-full h-32 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold text-white mb-2">{card.name}</h2>
          <p className="text-sm text-gray-200 mb-2">{card.label}</p>
          <p className="text-xs text-gray-300">{`Length: ${card.length}`}</p>
        </div>
      ))}
    </div>
  );
};

export default BiotechCards;
