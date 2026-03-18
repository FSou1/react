const timerStore = {
    subscribe: (callback: () => void) => {
        const intervalId = setInterval(callback, 1000);

        return () => {
            clearInterval(intervalId);
        };
    },

    getSnapshot: () => {
        return new Date().toLocaleTimeString();
    }
};

export default timerStore