import React from 'react';

interface TabSwitcherProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => (
  <div className="tab-switcher">
    <button onClick={() => onTabChange('clients')} className={activeTab === 'clients' ? 'active' : ''}>По клиентам</button>
    <button onClick={() => onTabChange('branches')} className={activeTab === 'branches' ? 'active' : ''}>По филиалам</button>
  </div>
);

export default TabSwitcher;
