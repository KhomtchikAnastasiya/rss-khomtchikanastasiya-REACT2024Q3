import { Component, ReactNode } from 'react';
import Button from '../Button/Button';
import styles from './SearchRequest.module.css';

interface Props {
    changeRequest: (newRequest: string) => void;
    changeTrigger: () => void;
    storageRequest: string | null;
}

class SearchRequest extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): ReactNode {
        return (
            <>
                <div className={styles.wrapper}>
                    <input
                        type="text"
                        placeholder={
                            this.props.storageRequest
                                ? this.props.storageRequest
                                : 'Search'
                        }
                        defaultValue={
                            this.props.storageRequest
                                ? this.props.storageRequest
                                : ''
                        }
                        className={styles.input}
                        onChange={(event) =>
                            this.props.changeRequest(event.target.value)
                        }
                    />
                    <Button
                        text="Search"
                        changeTrigger={this.props.changeTrigger}
                    />
                </div>
            </>
        );
    }
}

export default SearchRequest;
