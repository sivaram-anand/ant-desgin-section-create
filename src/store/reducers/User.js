import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "users",
	initialState: { value: { name: "" } },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
			console.log("the reducer output " + action.payload);
		},
	},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
