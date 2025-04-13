export default function Extention({ extention }) {
  return (
    <>
      <div className="extention-box">
        <div className="extention-bot--top">
          <span>
            <img src={extention.logo} alt={extention.name} />
          </span>
        </div>
        <div className="extention-bot--bottom"></div>
      </div>
    </>
  );
}
