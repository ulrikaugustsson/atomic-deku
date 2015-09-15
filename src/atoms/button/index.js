/* eslint-disable no-unused-vars*/
import element from 'virtual-element';
/* eslint-enable no-unused-vars*/

const Button = {
  render(component) {
    const {props} = component;

    const classes = `Button ${props.classes || ''}`;

    return (
      <button
        class={classes.trim()}
        {...props}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
