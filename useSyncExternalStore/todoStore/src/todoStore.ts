let todos = [];
let listeners = [];

export const todoStore = {
    todos: [],

    addTodo: () => {
        todos = [...todos, { id: Date.now(), text: `Todo ${todos.length + 1}` }];
        emitChange();
    },

    clearAll: () => {
        todos = [];
        emitChange();
    },

    removeFirst: () => {
        todos = todos.slice(1);
        emitChange();
    },

    removeLast: () => {
        todos = todos.slice(0, -1);
        emitChange();
    },

    subscribe: (callback: () => void) => {
        listeners.push(callback);

        return () => {
            const index = listeners.indexOf(callback);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    },

    getSnapshot: () => {
        return todos;
    }
};

function emitChange() {
    listeners.forEach((listener) => listener());
}