import styles from "./Button.module.css";
function Button() {
  const handleClick = (e) => {
    console.log(e);
    e.target.textContent = "Ouch!!";
  };

  return (
    <button onDoubleClick={(e) => handleClick(e)} className={styles.button}>
      Click me
    </button>
  );
}
export default Button;
