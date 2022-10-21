export const state = () => ({
  products: [],
});

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload.products;
  },
};

export const getters = {
  GET_PRODUCTS(state) {
    return state.products;
  },
};

export const actions = {
  FETCH_PRODUCTS(context) {
    this.$axios.get().then((response) => {
      context.commit("SET_PRODUCTS", response.data);
    });
  },
};
