import { Component, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
    text: string;
    changeTrigger: () => void;
};

class Button extends Component<Props> {
    constructor(props: Props) {
        super(props);
        props.text;
    }
    render(): ReactNode {
        return (
            <button
                type="button"
                className={styles.button}
                onClick={() => this.props.changeTrigger()}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
