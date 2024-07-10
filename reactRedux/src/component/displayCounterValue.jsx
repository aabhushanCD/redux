import { useSelector } from "react-redux";

function Display() {
  const counter = useSelector((store) => store.counter);

  return (
    <>
      <p className="lead mb-4">This the current counter value: {counter}</p>
    </>
  );
}

export default Display;
