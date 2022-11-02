import create from "zustand";

import createFirstSlice from "./firstStore";

const useGlobalStore = create()((...a) => ({
  ...createFirstSlice(...a),
}));

export default useGlobalStore;
