import { errorCatch } from './../../api/api.helper';
import { AuthService } from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { toastError } from "utils/toast-error";
import { IAuthResponse, IEmailPAssword } from "./user.interface";


export const register = createAsyncThunk<IAuthResponse, IEmailPAssword>(
  'auth/register',
  async ({ email, password }, thunkApi) => {
    try {
      const respose = await AuthService.register(email, password)
      toastr.success('Registration', 'Completed successful')

      return respose.data
    } catch (err) {
      toastError(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPAssword>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const respose = await AuthService.login(email, password)
      toastr.success('Login', 'Completed successful')

      return respose.data
    } catch (err) {
      toastError(err)
      return thunkApi.rejectWithValue(err)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', () => {
  AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPAssword>(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const respose = await AuthService.getNewTokens()

      return respose.data
    } catch (err) {
      if (errorCatch(err) === 'jwt expired') {
        toastError('Logout', 'Your authorization is finished, plz sign in again!')
        thunkApi.dispatch(logout())
      }
      return thunkApi.rejectWithValue(err)
    }
  }
)