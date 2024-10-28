import React from "react";
import { useDashboard } from "./DashboardContext";

const FilterPanel: React.FC = () => {
  const { filters, setFilters } = useDashboard();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filter-panel">
      <select
        name="subdivision"
        value={filters.subdivision}
        onChange={handleChange}
      >
        <option value="">ПОДРАЗДЕЛЕНИЕ/ФИЛИАЛ:</option>
        <option value="Филиал 1">Филиал 1</option>
        <option value="Филиал 2">Филиал 2</option>
      </select>
      <select name="holding" value={filters.holding} onChange={handleChange}>
        <option value="">ХОЛДИНГ:</option>
        <option value="Холдинг 1">Холдинг 1</option>
        <option value="Холдинг 2">Холдинг 2</option>
      </select>
      <select name="company" value={filters.company} onChange={handleChange}>
        <option value="">КОМПАНИЯ:</option>
        <option value="Компания 1">Компания 1</option>
        <option value="Компания 2">Компания 2</option>
      </select>
    </div>
  );
};

export default FilterPanel;
