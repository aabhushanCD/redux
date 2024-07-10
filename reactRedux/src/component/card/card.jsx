function Card({ children }) {
  return (
    <>
      <center>
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">{children}</div>
        </div>
      </center>
    </>
  );
}
export default Card;
