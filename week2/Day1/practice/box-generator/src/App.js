import "./App.css";
import FormBox from "./components/FormBox";
import Box from "./components/Boxgenerator";
import { useState } from "react";

function App() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([newBox, ...boxes]);
    };

    return (
        <div className="App">
            <FormBox addBox={addBox} />

            {boxes.map((box, index) => (
                <Box key={index} size={box.size} color={box.color} />
            ))}
        </div>
    );
}

export default App;