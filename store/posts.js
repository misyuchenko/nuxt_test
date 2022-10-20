export const state = () => ({
  posts: [
    { id: 1, title: "Wow, hello", content: "New content" },
    { id: 2, title: "Wow, hello", content: "New content" },
    { id: 3, title: "Wow, hello", content: "New content" },
    { id: 4, title: "Wow, hello", content: "New content" },
    { id: 5, title: "Wow, hello", content: "New content" },
    { id: 6, title: "Wow, hello", content: "New content" },
    { id: 7, title: "Wow, hello", content: "New content" },
    { id: 8, title: "Wow, hello", content: "New content" },
    { id: 9, title: "Wow, hello", content: "New content" },
    { id: 10, title: "Hey,hello", content: "New content" },
    { id: 11, title: "Hey,hello", content: "New content" },
    { id: 12, title: "Hey,hello", content: "New content" },
    { id: 13, title: "Hey,hello", content: "New content" },
    { id: 14, title: "Hey,hello", content: "New content" },
    { id: 15, title: "Hey,hello", content: "New content" },
    { id: 16, title: "Hey,hello", content: "New content" },
    { id: 17, title: "Hey,hello", content: "New content" },
    { id: 18, title: "Hey,hello", content: "New content" },
  ],
});

export const mutations = {
  setTasks(state, payload) {
    state.tasks = payload;
  },
  deleteTask(state, { id }) {
    const index = state.tasks.findIndex((task) => task.id === id);
    state.tasks.splice(index, 1);
  },
  addNewTask(state, task) {
    task.status = false;
    state.tasks.push(task);
  },
  changeStat(state, task) {
    task.status = !task.status;
  },
  setStatusAllTasks(state, newStatus) {
    state.tasks.forEach((task) => {
      task.status = newStatus;
    });
  },
  changeFilter(state, filter) {
    state.filter = filter;
  },
};

export const getters = {
  GET_POSTS(state) {
    return state.posts;
  },
};

export const actions = {};
