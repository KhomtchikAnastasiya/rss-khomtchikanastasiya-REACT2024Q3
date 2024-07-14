import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
// import { Person } from '../../types/types';

describe('group', () => {
    it('should render no cards when the persons array is empty', () => {
        render(<CardList persons={[]} />);

        expect(screen.getByText(/no persons/i)).toBeInTheDocument();
    });
    // it('should render a list of persons', () => {
    //     const persons: Person[] = [
    //         {
    //             name: 'User1',
    //             height: '172',
    //             mass: '77',
    //             hair_color: 'blond',
    //             skin_color: 'fair',
    //             eye_color: 'blue',
    //             birth_year: '19BBY',
    //             gender: 'male',
    //             homeworld: 'https://swapi.dev/api/planets/1/',
    //             films: ['film1', 'film2'],
    //             species: [],
    //             vehicles: ['vehicle1', 'vehicle2'],
    //             starships: ['ship1', 'ship2'],
    //             created: '2014-12-09T13:50:51.644000Z',
    //             edited: '2014-12-20T21:17:56.891000Z',
    //             url: 'https://swapi.dev/api/people/1/',
    //         },
    //         {
    //             name: 'User2',
    //             height: '172',
    //             mass: '77',
    //             hair_color: 'blond',
    //             skin_color: 'fair',
    //             eye_color: 'blue',
    //             birth_year: '19BBY',
    //             gender: 'male',
    //             homeworld: 'https://swapi.dev/api/planets/1/',
    //             films: ['film1', 'film2'],
    //             species: [],
    //             vehicles: ['vehicle1', 'vehicle2'],
    //             starships: ['ship1', 'ship2'],
    //             created: '2014-12-09T13:50:51.644000Z',
    //             edited: '2014-12-20T21:17:56.891000Z',
    //             url: 'https://swapi.dev/api/people/1/',
    //         },
    //     ];
    //     render(<CardList persons={persons} />);

    //     persons.forEach((person) => {
    //         const link = screen.getAllByRole('link', { name: person.name });
    //         expect(link).toBeInTheDocument();
    //     });
    // });
});
