import Login from "./components/Login";
// import TeamGrid from "./components/TeamGrid";

function App() {
  return (
    <div className="container mt-4">
      <img
        src="alkemyblanco.png"
        className="img-fluid mx-auto d-block"
        alt="logo alkemy"
      />
      <h1 className="text-center mt-1">Super Heroes Team</h1>
      <hr />
      <Login />
      {/* <TeamGrid /> */}
    </div> //fin container
  );
}

export default App;
