export default function ButtonText({ btnClass = "", btnContent }) {
  return (
    <>
      <button className='button--text'>{btnContent}</button>
    </>
  );
}
