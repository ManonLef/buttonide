function BtnCreator({ onClick, text, style }) {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}

export default BtnCreator