export default function ButtonIcon({
  btnClass = "",
  alt = "",
  src = "",
  switchTheme,
  theme
}) {
  return (
    <>
      <button className={btnClass} onClick={() => switchTheme()}>
        <img src={src} alt={alt} />
      </button>
    </>
  );
}
