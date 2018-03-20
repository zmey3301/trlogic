export function set (name, data) {
    return localStorage.setItem(name, JSON.stringify(data))
}
export function get (name) {
    return JSON.parse(window.localStorage.getItem(name))
}
export function remove (name) {
    return window.localStorage.removeItem(name)
}
