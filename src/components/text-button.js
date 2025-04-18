export default function ButtonText({
  btnClass = "",
  btnContent,
  onClick,
  btnValue,
}) {
  return (
    <>
      <button className={btnClass} onClick={onClick} data-active={btnValue}>
        {btnContent}
      </button>
    </>
  );
}
