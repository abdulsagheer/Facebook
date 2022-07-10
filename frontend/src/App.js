function App() {

  const get = async() => {
    const res = await fetch("http://localhost:8000/");
    console.log(res)
  }
  get();

  return (
    <div className="App">
      Welcome to frontend
      <div className="trash_icon"></div>
    </div>
  );
}

export default App;
