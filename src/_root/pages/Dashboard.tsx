
import Authentication from "../../lib/components/Authentication";

const Dashboard = () => {
  

  return (
    <header>
      <div className="flex items-center justify-between p-4 bg-white text-white">
        <Authentication />
      </div>
    </header>
  );
};

export default Dashboard;