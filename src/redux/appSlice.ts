import { createSlice } from "@reduxjs/toolkit"
import { DefaultCityType } from "../components/DefaultCities/includes/DefaultCity/DefaultCity"

export interface AppState {
  defaultCities: DefaultCityType[]
}

const initialState: AppState = {
  defaultCities: [],
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addDefaultCity(state, action) {
      state.defaultCities.push(action.payload)
    }
  }
})

export default appSlice.reducer
export const { addDefaultCity } = appSlice.actions