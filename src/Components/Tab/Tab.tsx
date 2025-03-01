import { Link } from "react-router";

const Tab = ({ active, tabs }: { active: string; tabs: { name: string; path: string }[] }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted flex">
        <div className="tab"></div>
        {tabs.map((tab) => (
          <Link
            key={tabs?.indexOf(tab)}
            to={tab.path}
            className={`tab ${tab.name.toLocaleLowerCase() === active.toLocaleLowerCase() ? "tab-active" : ""}`}
          >
            {tab.name}
          </Link>
        ))}
        <div className="tab flex-grow"></div>
      </div>
    </div>
  );
};

export default Tab;
