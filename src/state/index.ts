import {createSlice, PayloadAction } from "@reduxjs/toolkit";

// global state, reducers that have 2 functions that determine if the sidebar is close or if its darkMode


/*this is the type for the initial state (global probs) */
export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

/* initial state: type */
const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false, 
}
// store our data global;;  with the name global
export const globalSlice = createSlice ({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    }
})

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;