import { reducer } from "./reducer";
const { createStore } = require("redux");

export const store = createStore(reducer);