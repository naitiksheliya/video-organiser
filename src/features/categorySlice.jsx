import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  categorys: [
    {
      id: nanoid(),
      name: "Education",
      cards: [
        {
          title: "card1",
          link: "link1",
        },
        {
          title: "card1",
          link: "link2",
        },
        {
          title: "card1",
          link: "link3",
        },
        {
          title: "card1",
          link: "link4",
        },
        {
          title: "card2",
          link: "link5",
        },
        {
          title: "card3",
          link: "link6",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Environment",
      cards: [
        {
          title: "card2",
          link: "linkvsdf",
        },
      ],
    },
  ],
};
export const categorysSlice = createSlice({
    name: "categorys",
    initialState,
    reducers: {
    }
})
export const allCategory = (state) => state.categorys.categorys
export const {} = categorysSlice.actions
export default categorysSlice.reducer
