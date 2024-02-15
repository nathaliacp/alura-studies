import style from "./Button.module.scss";

function Button({children}) {

	return (
		<button className={ style.button }>
			{ children }
		</button>
	);
}

export default Button;