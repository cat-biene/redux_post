import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/Post";

export const loadPosts = createAsyncThunk(
    "post/loadPosts",
    async () => {
        const resp = await fetch("https://dummyjson.com/posts");
        const data = await resp.json();
        return data;
    }
)

const initialState: {value: Post[], status: string} = {
    value: [],
    status: "loading"
};

const postsSlice = createSlice ({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(loadPosts.pending, (state) => {
            state.status = "loading";
        })
        .addCase(loadPosts.fulfilled, (state, {payload}) => {
            state.value.push(...payload.posts);
            state.status = "ready";
        })
        .addCase(loadPosts.rejected, (state) => {
            state.status = "error";
        })
    }
});

export default postsSlice.reducer;