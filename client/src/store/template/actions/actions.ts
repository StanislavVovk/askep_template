import { createAsyncThunk } from '@reduxjs/toolkit'
import { type TemplateResponse } from 'common/interfaces/TemplateResponse'
import { type TemplateService } from 'services/Template/Template.service'
import { TemplateActionType } from 'store/template/actions/ActionType'

export const getAllTemplates = createAsyncThunk<
  TemplateResponse[],
  string | undefined,
  {
    extra: { service: {Template: TemplateService}},
    rejectWithValue: any
  }
  >(
  TemplateActionType.GET_ALL_TEMPLATES,
  async (filter = '', { extra: {
    service: {Template}}, rejectWithValue }) => {
    return await Template.getTemplates(filter)
      .then(data => data)
      .catch(e => {
        return rejectWithValue(e)
      })
  }
)
