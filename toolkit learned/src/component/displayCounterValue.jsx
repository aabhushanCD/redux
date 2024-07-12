import { useSelector } from "react-redux";

function Display() {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <>
      <p className="lead mb-4">This the current counter value: {counterVal} </p>
    </>
  );
}

export default Display;
