import { Component, ReactNode } from 'react';
import { Person, ResposeData } from '../../types/types';
import styles from './SearchResponse.module.css';
import PersonItem from '../PersonItem/PersonItem';

interface Props {
    searchRequest: string;
}

interface IState {
    persons: Array<Person>;
    spinner: boolean;
}

class SearchResponse extends Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            persons: [],
            spinner: false,
        };
    }

    componentDidMount() {
        this.setState((prevState) => ({ ...prevState, spinner: true }));
        if (this.props.searchRequest === '') {
            fetch('https://swapi.dev/api/people/')
                .then((res) => {
                    return res.json();
                })
                .then((data: ResposeData) => {
                    this.setState({ persons: data.results, spinner: false });
                });
        } else {
            fetch(
                `https://swapi.dev/api/people/?search=${this.props.searchRequest}`
            )
                .then((res) => {
                    return res.json();
                })
                .then((data: ResposeData) => {
                    this.setState({ persons: data.results, spinner: false });
                });
        }
    }

    render(): ReactNode {
        return (
            <div className={`block ${styles.wrapper}`}>
                {this.state.spinner && (
                    <>
                        <span></span>
                        <span className={styles.spinner}></span>
                    </>
                )}
                {this.state.persons.map((person) => (
                    <PersonItem personData={person} key={person.name} />
                ))}
            </div>
        );
    }
}

export default SearchResponse;
