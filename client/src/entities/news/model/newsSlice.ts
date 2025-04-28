import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData_SnippetNews } from './types';

interface IState {
  data: IData_SnippetNews | null;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/mock.json');
      if (!response.ok) throw new Error('Ошибка загрузки');
      const data = await response.json();
      return Array.isArray(data) ? data[0] : (data as IData_SnippetNews);
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Неизвестная ошибка'
      );
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<IData_SnippetNews>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
