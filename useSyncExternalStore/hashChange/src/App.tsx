import useUrlHash from "./useUrlHash";

export default function App() {
  const urlHash = useUrlHash();
  
  return <h1>{urlHash}</h1>;
}
