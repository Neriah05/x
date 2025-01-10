import React from "react";

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q1 2025",
      title: "Platform Launch",
      items: [
        "Official X Token Platform Launch",
        "Integration with Major Exchanges",
        "AI-Powered Trading Features",
        "Community Governance Implementation",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Ecosystem Expansion",
      items: [
        "Mobile App Release",
        "Cross-Chain Bridge Development",
        "Smart Contract Upgrades",
        "Partnership Program Launch",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Innovation Phase",
      items: [
        "AI Neural Network Integration",
        "Decentralized Identity System",
        "Advanced Trading Tools",
        "Global Marketing Campaign",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Global Scale",
      items: [
        "Metaverse Integration",
        "Enterprise Solutions Launch",
        "International Expansion",
        "Enhanced Security Features",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-purple-500">2025 Roadmap</h2>
        <p className="text-gray-400 mt-4">
          Our strategic vision for growth and innovation
        </p>
      </div>

      {/* Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:shadow-purple-500"
          >
            <h3 className="text-lg font-semibold text-purple-400">
              {item.quarter}
            </h3>
            <h4 className="text-xl font-bold mt-2">{item.title}</h4>
            <ul className="mt-6 space-y-4 text-left text-gray-300">
              {item.items.map((listItem, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-blue-400 mr-2">›</span>
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
