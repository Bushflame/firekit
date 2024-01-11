import { browser } from '$app/environment';
import { writable } from 'svelte/store';

//search token for getting listings by title
export let getByTitles = writable('Ardvark');

export const userKey = writable();
//test for existing listing
export const hasListing = writable(true);
export const formNum = writable('form-1');
export const formsData = writable();
export const editing = writable('');
export const editingKey = writable('');

//local storage cookie for creating doc with user.id
// const docId = localStorage.doc_id
// export const doc_id = writable(docId || 'doc id')
// doc_id .subscribe((value) => localStorage.doc_id = value)'

// Get the value out of storage on load.

export const docId = writable('');

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
	docId.subscribe((value) => (localStorage.docId = value || 'hello world'));
}
// hide content when guide is shown
// to prevent content jumping up when guides are closed, a delay on showing content is added
// export const img_on = writable(false); //temp
// export const showingImgGuide = writable(true);
// export const showingTitleGuide = writable();
// export const showingParaGuide = writable(false);
// export const showingListGuide = writable(false);
