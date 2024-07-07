import { Component, ReactNode } from 'react';
// import Button from '../Button/Button';
import styles from './SearchRequest.module.css';

interface Props {
    changeRequest: (newRequest: string) => void;
}

interface IState {
    inputData: string;
}

class SearchRequest extends Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            inputData: '',
        };
    }

    storageRequest = localStorage.getItem('search');

    render(): ReactNode {
        return (
            <div className={`block ${styles.wrapper}`}>
                <input
                    type="text"
                    placeholder={
                        this.storageRequest ? this.storageRequest : 'Search'
                    }
                    className={styles.input}
                    onChange={(event) =>
                        this.setState({ inputData: event.target.value })
                    }
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={() =>
                        this.props.changeRequest(this.state.inputData.trim())
                    }
                >
                    Search
                </button>
            </div>
        );
    }
}

export default SearchRequest;
