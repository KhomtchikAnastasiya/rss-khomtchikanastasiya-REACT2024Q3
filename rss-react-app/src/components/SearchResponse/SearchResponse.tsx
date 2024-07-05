import { Component, ReactNode } from 'react';
// import styles from './SearchResponse.module.css';
import { Person, ResposeData } from '../../types/types';

interface IState {
    persons: Array<Person>;
}

class SearchResponse extends Component {
    state: IState = {
        persons: [],
    };

    componentDidMount() {
        fetch('https://swapi.dev/api/people/')
            .then((res) => {
                return res.json();
            })
            .then((data: ResposeData) => {
                console.log(data);
                this.setState({ persons: data.results });
            });
    }

    render(): ReactNode {
        return (
            <>
                {this.state.persons.map((person) => (
                    <div key={person.name}>{person.name}</div>
                ))}
            </>
        );
    }
}

export default SearchResponse;
