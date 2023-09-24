function BtnCreator({ ...props }) {
  return (
    <button onClick={props.onClick} className={props.style}>
      {props.text}
    </button>
  );
}

export default BtnCreator