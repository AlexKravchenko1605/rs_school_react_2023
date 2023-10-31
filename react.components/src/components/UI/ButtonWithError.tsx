import { Component, ReactNode } from 'react';
interface ButtonWidthErrorProps {
  hasError: boolean;
}
class ButtonWithError extends Component<object, ButtonWidthErrorProps> {
  constructor(props: ButtonWidthErrorProps) {
    super(props);
    this.state = { hasError: false };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <button
        className="btn_error"
        onClick={() => {
          this.setState({ hasError: true });
        }}
      >
        Show Error
      </button>
    );
  }
}
export default ButtonWithError;
