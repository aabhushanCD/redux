import { useSelector } from "react-redux";
import Controls from "../controls";
import Display from "../displayCounterValue";
import Privacy from "../privacy";
const Container = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="  text-center">
        <h2>Counter App</h2>
        <div className="col-lg-6 mx-auto">
          {privacy ? <Privacy /> : <Display />}
          <Controls></Controls>
        </div>
      </div>
    </>
  );
};

export default Container;
