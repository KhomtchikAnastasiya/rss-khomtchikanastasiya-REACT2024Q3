import styles from './PersonItem.module.css';
import { Person } from '../../types/types';

interface Props {
    personData: Person;
}

function PersonItem({ personData }: Props) {
    return (
        <div className={`block ${styles.wrapper}`}>
            <h4 className={styles.name}>{personData.name}</h4>
            <p>{personData.homeworld}</p>
            <h3 className={styles.title}>Films:</h3>
            <div>
                {personData.films}
                {personData.films.map((film, index) => (
                    <div key={index}>{film}</div>
                ))}
            </div>
            <h3 className={styles.title}>Starships:</h3>
            <div>
                {personData.starships}
                {personData.starships.map((ship, index) => (
                    <div key={index}>{ship}</div>
                ))}
            </div>
        </div>
    );
}

export default PersonItem;
