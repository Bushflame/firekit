export function load({ locals }) {
    console.log('locals.user.id', locals.user.id)
    return {
        isLoggedIn: locals.user !== null
    }
}