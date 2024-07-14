import { Person } from '../../types/types';
import styles from './CardList.module.css';
import Card from '../Card/Card';

interface Props {
    persons: Person[];
}

function CardList({ persons }: Props) {
    if (persons.length === 0)
        return (
            <div className={`block ${styles.wrapper}`}>
                No persons available.
            </div>
        );

    return (
        <div className={`block ${styles.wrapper}`}>
            {persons.map((person) => (
                <Card personData={person} key={person.name} />
            ))}
        </div>
    );
}

export default CardList;
