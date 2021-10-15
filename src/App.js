import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Agenda cultural</h1>
      </header>
      <div className="events">
        <div className="event">
          <div className="price">¡GRATIS!</div>
          <img
            className="image"
            src="http://placehold.it/80x80"
            alt="La Konga"
          />
          <div className="info">
            <div className="title">Exposición artística</div>
            <div className="date">VIE 17/10 19:30hs.</div>
            <div className="description">
              Exposición artística en el salón de Bellas artes. Invitados
              especiales, cuadros, pinturas y mucho más!
            </div>
            <div className="address">Azcúenaga 1240</div>
            <a
              href="https://wa.me/2477909090?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="whatsapp"
                width="36"
                height="36"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="Compartir vía WhatsApp"
              />
            </a>
          </div>
        </div>

        <div className="event">
          <div className="price">$300</div>
          <img
            className="image"
            src="http://placehold.it/80x80"
            alt="La Konga"
          />
          <div className="info">
            <div className="title">Show La Konga</div>
            <div className="date">SAB 18/10 23:30hs.</div>
            <div className="description">
              Veni a bailar y disfrutar de La Konga oficial.
            </div>
            <div className="address">Bv. Colón 3610</div>
          </div>
        </div>

        <div className="event">
          <div className="price">$300</div>
          <img
            className="image"
            src="http://placehold.it/80x80"
            alt="La Konga"
          />
          <div className="info">
            <div className="title">Show La Konga</div>
            <div className="date">SAB 18/10 23:30hs.</div>
            <div className="description">
              Veni a bailar y disfrutar de La Konga oficial.
            </div>
            <div className="address">Azcúenaga 1240</div>
          </div>
        </div>

        <div className="event">
          <img
            className="image"
            src="http://placehold.it/80x80"
            alt="La Konga"
          />
          <div className="info">
            <div className="title">Show La Konga</div>
            <div className="date">SAB 18/10 23:30hs. $300</div>
            <div className="description">
              Veni a bailar y disfrutar de La Konga oficial.
            </div>
            <div className="address">Azcúenaga 1240</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
