import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const value = useRef();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const hanleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    const num = value.current.value;
    dispatch({ type: "ADD", payload: { num } });

    value.current.value = "";
  };
  const handleSub = () => {
    const num = value.current.value;
    dispatch({
      type: "SUBTRACT",
      payload: {
        num,
      },
    });

    value.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={hanleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-secondary" onClick={handlePrivacy}>
          Privacy Mode
        </button>
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "5px" }}>
        <input type="text" ref={value} placeholder="Enter Number " />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
