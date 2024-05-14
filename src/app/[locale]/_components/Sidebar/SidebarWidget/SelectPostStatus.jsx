"use client";
import { useState } from "react";

export default function SelectPostStatus() {
  const [selectedFilters, setSelectedFilters] = useState({
    mostRead: false,
    mostCommented: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div>
      <h3 className="text-[1.2rem] font-medium mb-5">Фильтр</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-4">
          <input type="checkbox" name="mostRead" checked={selectedFilters.mostRead} onChange={handleCheckboxChange} />
          Самые читаемые
        </label>
        <label className="flex items-center gap-4">
          <input type="checkbox" name="mostCommented" checked={selectedFilters.mostCommented} onChange={handleCheckboxChange} />
          Самые комментируемые
        </label>
      </div>
    </div>
  );
}
