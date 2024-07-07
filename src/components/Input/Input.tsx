import { ChangeEvent, Component, ReactNode } from 'react';
import styles from './Input.module.css';

type Props = {
    text: string;
    changeRequest: (e: string | ChangeEvent) => void;
};

class Input extends Component<Props> {
    constructor(props: Props) {
        super(props);
        props.text;
    }
    render(): ReactNode {
        return (
            <input
                type={this.props.text}
                placeholder="Enter the name"
                className={styles.input}
                onChange={(event) =>
                    this.props.changeRequest(event.target.value)
                }
            />
        );
    }
}

export default Input;
