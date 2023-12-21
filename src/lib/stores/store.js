import { browser } from '$app/environment';
import { writable } from 'svelte/store';

//search token for getting listings by title
export let getByTitles = writable('Ardvark');
export const userKey = writable()
