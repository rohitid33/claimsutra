import { useState } from "react";

interface CategoryProps {
  onSelect: (category: string) => void;
  selected: string;
}

export default function Categories({ onSelect, selected }: CategoryProps) {
  const categories = [
    {
      id: "insurance",
      name: "Insurance Claims",
      icon: "⚖️",
    },
    {
      id: "loan",
      name: "Loan Disputes",
      icon: "💰",
    },
    {
      id: "consumer",
      name: "Consumer Disputes",
      icon: "🛡️",
    },
    {
      id: "banking",
      name: "Banking Issues",
      icon: "🏦",
    },
    {
      id: "credit",
      name: "Credit Card",
      icon: "💳",
    },
  ];

  return (
    <div className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelect(category.id)}
                className="flex flex-col items-center min-w-[100px]"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 transition-colors ${
                    selected === category.id
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 border"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="text-sm text-center font-medium whitespace-nowrap">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}