/**
 * Class representing a state container.
 */
class State {
    private static state: any = null;

    /**
     * Sets the state to a new value.
     * @param {any} newState - The new state value.
     */
    static setState(newState: any): void { this.state = newState; }

    /**
     * Retrieves the current state and a function to update it.
     * @param {any} initialState - The initial state.
     * @returns {[any, (newState: any) => void]} - An array containing the current state and a function to update it.
     */
    static useState(initialState: any): [any, (newState: any) => void] {
        if (this.state === null) { this.state = initialState; }
        const setState = (newState: any): void => { this.setState(newState); };
        return [this.state, setState];
    }
}

/**
 * Hook to provide state and a function to update it.
 * @param {any} initialState - The initial state.
 * @returns {[any, (newState: any) => void]} - An array containing the current state and a function to update it.
 */
export default function useState(initialState: any): [any, (newState: any) => void] {
    return State.useState(initialState);
}
