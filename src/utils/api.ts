export async function getPersons(query: string | null) {
    const queryParams = query ? `?search=${query}` : '';
    const res = await fetch(`https://swapi.dev/api/people/${queryParams}`);
    if (res.status === 404) {
        throw new Response('Not Found', { status: 404 });
    }
    return res.json();
}

export async function getDetails(personId: string) {
    const res = await fetch(`https://swapi.dev/api/people/${personId}`);
    if (res.status === 404) {
        throw new Response('Not Found', { status: 404 });
    }
    return res.json();
}
