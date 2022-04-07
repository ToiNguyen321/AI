import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
    language: 'vi' | 'en'
}

const initialState: LanguageState = {
    language: 'vi',
}

export const languageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction< 'vi' | 'en'>) => {
      state.language = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer