import useGlobalStore from "../stores/globalStore";

export default function LocalStorageMessage() {
  /* Local state */
  const state = useGlobalStore((state) => state.state);
  const setState = useGlobalStore((state) => state.setState);

  /* Functions */
  const handleStateChange = (e) => {
    e.preventDefault();
    setState(e.target[0].value);
    localStorage.setItem("myState", e.target[0].value);
  };

  return (
    <div>
      <div className="state-message">
        <h3>State message:</h3>
        <p>{state}</p>
      </div>

      <form onSubmit={(e) => handleStateChange(e)}>
        <input type="text" defaultValue={state} />
        <button type="submit">Update state</button>
      </form>
    </div>
  );
}
