const key = 'profile';

export default (state) => ({
  data: state[key].data,
  loaded: state[key].loaded,
  failed: state[key].failed,
});
