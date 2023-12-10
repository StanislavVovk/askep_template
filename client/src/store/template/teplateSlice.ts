import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type TemplateResponse } from 'common/interfaces/TemplateResponse'
import { getAllTemplates } from 'store/template/actions/actions'


export interface ITemplateSliceInitialState {
  errors: any
  isLoading: boolean
  templates: TemplateResponse[]
}

const TemplateSliceInitialState: ITemplateSliceInitialState = {
  errors: undefined,
  isLoading: false,
  templates: []
}


export const templateSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(getAllTemplates.fulfilled, (state, {payload}: PayloadAction<TemplateResponse[]>) => {
    state.templates = payload
      state.errors = undefined
      state.isLoading = false
    })

    builder.addCase(getAllTemplates.pending, (state) => {
      state.templates = []
      state.isLoading = true
      state.errors = undefined
    })
    builder.addCase(getAllTemplates.rejected, (state, action) => {
      state.templates = []
      state.isLoading = false
      state.errors = action.error.message
    } )
  },
  initialState: TemplateSliceInitialState,
  name: "templateSlice",
  reducers: {}
})


export default templateSlice.reducer
