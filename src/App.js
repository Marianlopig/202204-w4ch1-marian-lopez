import { useState } from "react";
import Gentleman from "./components/Gentleman/Gentleman";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import gentlemenData from "./gentlemen";

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenData);

  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Text
            number={gentlemen.filter((gentleman) => gentleman.selected).length}
          />
          <Button />
        </section>
        <main className="main">
          <ul className="gentlemen">
            {gentlemen.map((gentleman) => {
              return (
                <Gentleman
                  key={gentlemen.id}
                  gentleman={gentleman}
                  action={() => {
                    gentleman.selected = !gentleman.selected;
                    setGentlemen([...gentlemen]);
                  }}
                />
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
