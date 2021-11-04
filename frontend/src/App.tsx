import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/Datatable";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>
        <NavBar />

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
