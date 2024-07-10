import Controls from "../controls";
import Display from "../displayCounterValue";

const Container = () => {
  return (
    <>
      <div className="  text-center">
        <h2>Counter App</h2>
        <div className="col-lg-6 mx-auto">
          <Display></Display>
          <Controls></Controls>
        </div>
      </div>
    </>
  );
};

export default Container;
