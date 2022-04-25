// import { useState } from "react";
import Gentleman from "./components/Gentleman/Gentleman";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import gentlemens from "./gentlemen";

function App() {
  // const [gentlemen, setGentlemen] = useState(gentlemens);

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
          <ul className="gentlemen">
            {gentlemens.map((gentleman) => {
              return <Gentleman gentleman={gentleman} />;
            })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
