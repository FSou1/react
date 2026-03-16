import { useSyncExternalStore } from "react";

const useUrlHash = () => {
    const subscribe = (callback: () => void) => {
        window.addEventListener("hashchange", callback);

        return () => {
            window.removeEventListener("hashchange", callback);
        };
    };

    const getSnapshot = () => {
        return window.location.hash;
    };

    return useSyncExternalStore(subscribe, getSnapshot);
};

export default useUrlHash;