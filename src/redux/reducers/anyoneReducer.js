import { Add_Comment, Add_Like, Enroll } from "../types/types";

const intial = { AddComment: [], addLike: [], enroll: [], loading: true };
export const ReducerForAnyOne = (state = intial, action) => {
  switch (action.type) {
    case Add_Comment: {
      return { ...state, AddComment: action.data, loading: false };
    }
    case Add_Like: {
      return { ...state, addLike: action.data, loading: false };
    }
    case Enroll: {
      return { ...state, enroll: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
