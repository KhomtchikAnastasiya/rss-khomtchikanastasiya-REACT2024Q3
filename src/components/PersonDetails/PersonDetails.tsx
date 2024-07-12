import {
    useLoaderData,
    useNavigate,
    useNavigation,
    useParams,
} from 'react-router-dom';
import styles from './PersonDetails.module.css';
import { Person } from '../../types/types';

function PersonDetails() {
    const { personData } = useLoaderData() as { personData: Person };
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { pageId } = useParams();

    return (
        <div
            className={
                navigation.state === 'loading'
                    ? `block ${styles.wrapper} ${styles.loading}`
                    : `block ${styles.wrapper}`
            }
        >
            <div className={styles.close}>
                <img
                    src="/src/assets/img/close_icon.svg"
                    height={30}
                    onClick={() => {
                        navigate(pageId ? `/page/${pageId}` : '/');
                    }}
                />
            </div>
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

export default PersonDetails;
