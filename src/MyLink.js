/* Defines a page link */

class MyLink {
    constructor(name, path, component, exact=false) {
        this.name = name
        this.path = path
        this.component = component
        this.exact = exact
    }
}
export default MyLink;