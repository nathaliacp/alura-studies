import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
	children: React.ReactNode, 
	type?: "button" | "submit" | "reset" | undefined,
	onClick?: () => void }> {

	render(): React.ReactNode {
		const { type = "button", onClick } = this.props;

		return(
			<button 
				type={type} 
				className={ style.button }
				onClick={ onClick }>
				{ this.props.children }
			</button>
		);
	}
}

export default Button;