// action types
export const SET_DEALS = "SET_DEALS";
export const SET_COMMENTS = "SET_COMMENTS";
export const REMOVE_FROM_DEAL = "REMOVE_FROM_DEAL";
export const REMOVE_FROM_FORUM = "REMOVE_FROM_FORUM";

// actions creator functions
export const setDeals = (dealId) => {
  return {
    type: SET_DEALS,
    payload: {
      dealId
    }
  }
}

export const setComment = (commentId) => {
  return {
    type: SET_COMMENTS,
    payload: {
      commentId
    }
  }
}

export const removeFromDeal = (commentId) => {
  return {
    type: REMOVE_FROM_DEAL,
    payload: {
      commentId
    }
  }
}

export const removeFromForum = (commentId, quantity) => {
  return {
    type: REMOVE_FROM_FORUM,
    payload: {
      commentId,
      quantity
    }
  }
}