import { useState } from "react";
import "./App.css";
import Gif from "./assets/love-kiss.gif";

function App() {
  const [zgodzilaSie, setZgodzilaSie] = useState(true);
  const [count, setCount] = useState(0);

  const skalaDuza = 1 + count / 15;
  const skalaMala = 1 - count / 50;

  const takStyle = {
    transform: `scale(${skalaDuza})`,
  };

  const nieStyle = {
    transform: `scale(${skalaMala})`,
  };

  let component;

  switch (count) {
    case 0:
      component = <></>;
      break;
    case 1:
      component = <>Na pewno?</>;
      break;
    case 2:
      component = <>100%?</>;
      break;
    case 3:
      component = <>Jestes pewna?</>;
      break;
    case 4:
      component = <>Pomysl o tym</>;
      break;
    case 5:
      component = <>Przemysl dokladnie</>;
      break;
    case 6:
      component = <>To jest powazna oferta</>;
      break;
    case 7:
      component = <>Zastanow sie jeszcze raz</>;
      break;
    case 8:
      component = <>Dawaj</>;
      break;
    case 9:
      component = <>No pls</>;
      break;
    case 10:
      component = <>Uda ci sie</>;
      break;
    case 11:
      component = <>Kurwo jebana</>;
      break;
    case 12:
      component = <>Po prostu kliknij tak</>;
      break;
    case 13:
      component = <>klikaj</>;
      break;
    case 14:
      component = <>raus</>;
      break;
    case 15:
      component = <>zgodz sie</>;
      break;
    case 16:
      component = <>prosze no</>;
      break;
    case 17:
      component = <>serio</>;
      break;
    case 18:
      component = <>to jest mega mocna propozycja</>;
      break;
    case 19:
      component = <>ja jestem serio spk</>;
      break;
    case 20:
      component = <>klikaj tak</>;
      break;
    case 21:
      component = <>ehhh</>;
      break;
    case 22:
      component = <>no dalej</>;
      break;
    case 23:
      component = <>.</>;
      break;
  }

  return (
    <>
      <div id="main">
        {zgodzilaSie ? (
          <>
            <img className="gif" src={Gif}></img>
            <h1>Chcesz byc mojom walentynkom?</h1>
            <div className="card">
              <button
                style={takStyle}
                className={`Tak`}
                onClick={() => setZgodzilaSie(false)}
              >
                Tak 🥰
              </button>
              <button
                style={nieStyle}
                onClick={() => setCount((prevcount) => prevcount + 1)}
                className={`Nie`}
              >
                Nie 😔
              </button>
              <div id="tekst">{component}</div>
            </div>
          </>
        ) : (
          <>
            <div className="zgodzilaSie">
              <h1>Hit me up</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
