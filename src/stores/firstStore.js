
const createFirstSlice = (set) => ({
  state: localStorage.getItem("myState") ?? "My state...",
  setState: (newState) => {
    set(() => ({
      state: newState,
    }));
  },
});

export default createFirstSlice;
