
import {getByTitles} from '$lib/stores/store'
import { get } from "svelte/store";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore();
	/**
	 * @type {unknown}
	 */
let titleRef = get(getByTitles);

export async function load() {
    /**
   * @type {import("@firebase/firestore").DocumentData[]}
   */


    let results = []
    let objects

    const q = query(collection(db, "listings"), where("title_1a", "==", titleRef));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

    //combine doc data and doc id 
    objects = doc.data()
    objects.id = doc.id
    // add to array of objects
    results.push(objects)

    });

    //console.log('data', data)
    //console.log('concats',concats)
	return {
        results
	};
}
