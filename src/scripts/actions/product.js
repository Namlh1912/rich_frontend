const product = {
  id: "1",
  category: "1",
  title: "Burger",
  image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
  description:
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
}

export function getProduct(id, cate) {
  if (id && cate) {
    return dispatch => {
      dispatch({
        type: "GET_PRODUCT_SUCCESS",
        res: product
      })
    }
  }

  return dispatch => {
    dispatch({
      type: "GET_PRODUCT_FAILURE",
      error: "Invalid Product!"
    })
  }
}
