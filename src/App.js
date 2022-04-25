import Button from "./components/Text/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Text />
          <Button />
        </section>
        <main className="main">
          <ul className="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}

export default App;
