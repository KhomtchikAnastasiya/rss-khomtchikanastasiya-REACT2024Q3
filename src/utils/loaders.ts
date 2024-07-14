import { LoaderFunctionArgs } from 'react-router-dom';
import { Person, ResposeData } from '../types/types';
import { getDetails, getPersons, getPersonsByPage } from './api';

export async function rootLoader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const persons: ResposeData = await getPersons(search);
    return { persons, search };
}

export async function pageLoader({ params }: LoaderFunctionArgs) {
    const persons: ResposeData = await getPersonsByPage(
        params.pageId ? params.pageId : ''
    );
    return { persons };
}

export async function detailsLoader({ params }: LoaderFunctionArgs) {
    const personData: Person = await getDetails(
        params.personId ? params.personId : ''
    );
    return { personData };
}
