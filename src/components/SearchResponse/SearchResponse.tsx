import { useEffect, useState } from 'react';
import { Person, ResposeData } from '../../types/types';
import styles from './SearchResponse.module.css';
import PersonItem from '../PersonItem/PersonItem';

interface Props {
    searchRequest: string;
}

function SearchResponse({ searchRequest }: Props) {
    const [persons, setPersons] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (searchRequest === '') {
            fetch('https://swapi.dev/api/people/')
                .then((res) => {
                    return res.json();
                })
                .then((data: ResposeData) => {
                    setIsLoading(false);
                    setPersons(data.results);
                });
        } else {
            fetch(`https://swapi.dev/api/people/?search=${searchRequest}`)
                .then((res) => {
                    return res.json();
                })
                .then((data: ResposeData) => {
                    setIsLoading(false);
                    setPersons(data.results);
                });
        }
    }, [searchRequest]);

    return (
        <div className={`block ${styles.wrapper}`}>
            {isLoading && (
                <>
                    <span></span>
                    <span className={styles.spinner}></span>
                </>
            )}
            {persons.map((person) => (
                <PersonItem personData={person} key={person.name} />
            ))}
        </div>
    );
}

export default SearchResponse;
