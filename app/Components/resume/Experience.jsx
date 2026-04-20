import React from "react";

const Experience = () => {
  const educationData = [
    {
      title: "That Works Agency - Shopify Premier Partner",
      university: "Senior Shopify Developer",
      year: "Oct-2025 – Feb 2026",
      description:
        "Developed Shopify theme sections using Liquid, HTML5, Vue, and Tailwind CSS, enabling customers to swiftly integrate new features and Figma-based designs into five different Shopify shops.",
    },
    {
      title: "Create Circus",
      university: "Shopify Developer",
      year: "May 2021 – Aug 2025",
      description:
        "Built and launched custom reusable content blocks for a Shopify Plus store using a custom theme, improving merchandising flexibility and reducing reliance on developer support for storefront updates.",
    },
    {
      title: "Holum Studio",
      university: "Lead developer",
      year: "Feb 2020 – Aug 2023",
      description:
        "Developed and maintained custom themes for Shopify Plus stores with custom requirements",
    },
  ];

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
        <div className="border-l-2 border-green">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-neutral-900 p-6 mb-4 border-b border-neutral-800"
            >
              {/* Left Green Icon */}
              <div className="absolute -left-[-5px] top-8.5 w-3 h-3 bg-green rotate-45"></div>
              <div className="absolute -left-[10px] top-8 w-5.5 h-4 bg-green"></div>

              <h3 className="text-lg font-bold text-white">{edu.title}</h3>
              <p className="text-gray-400 text-sm">
                {edu.university} / {edu.year}
              </p>
              <p className="text-gray-400 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
