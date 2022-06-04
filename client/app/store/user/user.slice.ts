import { createSlice } from '@reduxjs/toolkit'
import { getStoreLocal } from 'utils/local-storage'
import { checkAuth, login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
  isLoading: false,
  user: getStoreLocal('user')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, state => {
      state.isLoading = true
    }).addCase(register.fulfilled, (state, { payload: { user } }) => {
      state.isLoading = false
      state.user = user
    }).addCase(register.rejected, state => {
      state.isLoading = false
      state.user = null
    }).addCase(login.pending, state => {
      state.isLoading = true
    }).addCase(login.fulfilled, (state, { payload: { user } }) => {
      state.isLoading = false
      state.user = user
    }).addCase(login.rejected, state => {
      state.isLoading = false
      state.user = null
    }).addCase(logout.fulfilled, (state) => {
      state.isLoading = false
      state.user = null
    }).addCase(checkAuth.fulfilled, (state, { payload: { user } }) => {
      state.isLoading = false
      state.user = user
    })
  }
})

export const { reducer } = userSlice