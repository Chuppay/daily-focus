import React from "react";
import createPersistedState from "use-persisted-state";
import Body from "./components/Body";
import Header from "./components/Header";
import "./App.css";

const useWidgetState = createPersistedState("selectedWidgets");

function App() {
    const [selectedWidgets, setSelectedWidgets] = useWidgetState([]);

    return (
        <div className="App">
            <Header />
            <Body selectedWidgets={selectedWidgets} setSelectedWidgets={setSelectedWidgets} />
        </div>
    );
}

export default App;
