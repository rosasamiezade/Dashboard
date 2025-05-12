import Table from "./components/Table";
import EmployeeDashboard from "./components/EmployeeDahboard";
function App() {
  return (
    <div className="w-screen flex justify-between">
      <div className="w-[calc(80%-100px)] mx-auto">
        <EmployeeDashboard />
        <Table />
      </div>
      <div className="w-[calc(20%-50px)] bg-blue-100"></div>
    </div>
  );
}

export default App;
