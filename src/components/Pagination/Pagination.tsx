import { NavLink, useLoaderData } from 'react-router-dom';
import styles from './Pagination.module.css';
import { ResposeData } from '../../types/types';

function Pagination() {
    const { persons } = useLoaderData() as {
        persons: ResposeData;
    };

    const numberItemsPerPage = 10;
    const numberPages = Math.ceil(persons.count / numberItemsPerPage);
    const pagesArray = [];
    for (let i = 1; i <= numberPages; i++) {
        pagesArray.push(i);
    }

    return (
        <div className={styles.wrapper}>
            {pagesArray.map((page) => (
                <NavLink to={`/page/${page}`} key={page}>
                    {page}
                </NavLink>
            ))}
        </div>
    );
}

export default Pagination;
