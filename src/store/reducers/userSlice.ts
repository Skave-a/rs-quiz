import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Roles = 'admin' | 'user';

export interface IUser {
  id: string;
  name: string;
  role: Roles;
}

interface IUserState {
  user: IUser | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: IUserState = {
  user: null,
  token: null,
  isAuth: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser, setToken, setIsAuth } = userSlice.actions;
