import { useState } from "react";
import "./App.css";
import { FaUndo, FaRedo } from "react-icons/fa";

export default function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  const handleCircle = (e) => {
    // console.log("-->", e);
    const { clientX, clientY } = e;
    console.log(setPoints([...points, { x: clientX, y: clientY }]));
  };
  const handleUndo = () => {
    const newPoints = [...points];
    const poppedPoints = newPoints.pop();
    setPopped([...popped, poppedPoints]);
    setPoints(newPoints);
  };
  const handleRedo = () => {
    const lastPopped = popped[popped.length - 1];
    if (lastPopped) {
      const newPoints = [...points, lastPopped];
      const newPopped = popped.slice(0, popped.length - 1);
      setPoints(newPoints);
      setPopped(newPopped);
    }
  };
  return (
    <>
      <button onClick={handleUndo}>
        <FaUndo /> Undo
      </button>
      <button onClick={handleRedo}>
        <FaRedo /> Redo
      </button>
      <div className="App" onClick={handleCircle}>
        {points.map((point) => (
          <div
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>{" "}
    </>
  );
}
