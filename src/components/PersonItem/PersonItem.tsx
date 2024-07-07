import { Component, ReactNode } from 'react';
import styles from './PersonItem.module.css';
import { Person } from '../../types/types';

interface Props {
    personData: Person;
}

class PersonItem extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className={`block ${styles.wrapper}`}>
                <h4 className={styles.name}>{this.props.personData.name}</h4>
                <p>{this.props.personData.homeworld}</p>
                <h3 className={styles.title}>Films:</h3>
                <p>
                    {this.props.personData.films}
                    {this.props.personData.films.map((film, index) => (
                        <div key={index}>{film}</div>
                    ))}
                </p>
                <h3 className={styles.title}>Starships:</h3>
                <p>
                    {this.props.personData.starships}
                    {this.props.personData.starships.map((ship, index) => (
                        <div key={index}>{ship}</div>
                    ))}
                </p>
            </div>
        );
    }
}

export default PersonItem;
