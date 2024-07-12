import { Person } from '../../types/types';
import styles from './SearchResponse.module.css';
import PersonItem from '../PersonItem/PersonItem';

interface Props {
    persons: Person[];
}

function SearchResponse({ persons }: Props) {
    return (
        <div className={`block ${styles.wrapper}`}>
            {persons.map((person) => (
                <PersonItem personData={person} key={person.name} />
            ))}
        </div>
    );
}

export default SearchResponse;
