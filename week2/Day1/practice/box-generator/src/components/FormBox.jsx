import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const FormBox  = (props) => {
    const [color, setColor] = useState("");
    const addBox = (e) => {
        e.preventDefault();
        const newBox = {
            size: 100,
            color,
        };
        props.addBox(newBox);
        setColor("");
    };

    return (
        <div>
            <form  onSubmit={addBox}>
                <label>Color</label>
                <input  type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                <button type="submit" class="btn btn-primary" >ADD</button>
            </form>
        </div>
    );
};

export default FormBox;