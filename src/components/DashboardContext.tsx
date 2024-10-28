import React, { createContext, useContext, useState, useMemo } from "react";
import { data as initialData } from "../data";

export interface FilterType {
  subdivision: string;
  holding: string;
  company: string;
}

interface DashboardContextType {
  data: typeof initialData;
  filteredData: typeof initialData;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
  sankeyData: { nodes: any[]; links: any[] };
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterType>({
    subdivision: "",
    holding: "",
    company: "",
  });

  const filteredData = useMemo(() => {
    return initialData.filter(
      (item) =>
        (!filters.subdivision || item.subdivision === filters.subdivision) &&
        (!filters.holding || item.holding === filters.holding) &&
        (!filters.company || item.company === filters.company)
    );
  }, [filters]);

  const generateSankeyData = (filteredData: typeof initialData) => {
    const nodes: any[] = [{ name: "Total" }];
    const links: any[] = [];
    const branchLinks: Record<string, number> = {};

    filteredData.forEach((item) => {
      item.sankeyNodes.forEach((node) => {
        if (!nodes.some((existingNode) => existingNode.name === node.name)) {
          nodes.push(node);
        }
      });

      const branchNode = item.sankeyNodes[0].name;
      if (!branchLinks[branchNode]) {
        branchLinks[branchNode] = 0;
      }
      item.sankeyLinks.forEach((link) => {
        branchLinks[branchNode] += link.value;
        links.push(link);
      });
    });

    Object.keys(branchLinks).forEach((branch) => {
      links.push({
        source: "Total",
        target: branch,
        value: branchLinks[branch],
      });
    });

    return { nodes, links };
  };

  const sankeyData = useMemo(
    () => generateSankeyData(filteredData),
    [filteredData]
  );

  return (
    <DashboardContext.Provider
      value={{
        data: initialData,
        filteredData,
        filters,
        setFilters,
        sankeyData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
