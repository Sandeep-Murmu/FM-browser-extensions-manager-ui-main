export default function ButtonIcon({ btnClass = "", alt = "", src = "" }) {
  return (
    <>
      <button className={btnClass}>
        <img src={src} alt={alt} />
      </button>
    </>
  );
}
