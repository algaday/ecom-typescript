import { createSlice } from '@reduxjs/toolkit'

type User = {
  email: string
  uid: string
}

type State = {
  user: User
}

const initialState: State = {
  user: {
    email: '',
    uid: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
