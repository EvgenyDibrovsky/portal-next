import React, { useState } from "react";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    // Логика поиска: можно добавить вызов API или другую логику
    console.log("Поиск:", searchTerm, country, category);
  };

  return (
    <div className="container">
      <div className="hero-search flex gap-2 bg-white/50 p-[0.5rem] w-full shadow-md focus:outline-0">
        <input type="text" placeholder="Поиск..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="py-[1rem] px-[1.5rem] w-full focus:outline-0" />
        <select value={country} onChange={(e) => setCountry(e.target.value)} className="py-[1rem] px-[1.5rem] w-full focus:outline-0 cursor-pointer">
          <option value="">Выберите страну</option>
          <option value="Russia">Россия</option>
          <option value="USA">США</option>
          <option value="Poland">Польша</option>
          {/* Дополнительные страны */}
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="py-[1rem] px-[1.5rem] w-full focus:outline-0 cursor-pointer">
          <option value="">Выберите категорию</option>
          <option value="tech">Технологии</option>
          <option value="health">Здравоохранение</option>
          <option value="finance">Финансы</option>
          {/* Дополнительные категории */}
        </select>
        <button onClick={handleSearch} className="bg-sky-600 px-[1.5rem] w-[40rem] text-white font-medium duration-300 hover:bg-sky-500">
          Поиск
        </button>
      </div>
    </div>
  );
}
