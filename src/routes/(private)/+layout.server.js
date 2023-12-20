export function load({ locals }) {
    console.log('locals.user.id', locals.user)
    return {
        isLoggedIn: locals.user !== null
    }
}