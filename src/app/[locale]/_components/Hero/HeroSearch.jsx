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
    <div>
      <input type="text" placeholder="Поиск..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="p-[0.5rem] " />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Выберите страну</option>
        <option value="Russia">Россия</option>
        <option value="USA">США</option>
        <option value="Poland">Польша</option>
        {/* Дополнительные страны */}
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Выберите категорию</option>
        <option value="tech">Технологии</option>
        <option value="health">Здравоохранение</option>
        <option value="finance">Финансы</option>
        {/* Дополнительные категории */}
      </select>
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
}
