
// import Chat from '../chat/chat'
// import Field from '../field/field'

export function superUsefull() {

}

class App {
    constructor({
        el,
        data,
    }) {
        this.el = el;
    }

    render() {
        this.el.append(`
            <h1>Приложение запущено</h1>
        `);
    }
}

export default App;