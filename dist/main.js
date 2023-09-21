class State {
    static setState(newState) { this.state = newState; }
    static useState(initialState) {
        if (this.state === null) {
            this.state = initialState;
        }
        const setState = (newState) => { this.setState(newState); };
        return [this.state, setState];
    }
}
State.state = null;
export default function useState(initialState) {
    return State.useState(initialState);
}
