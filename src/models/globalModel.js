import reducers from '../utils/reducers';

const namespace = 'globalModel';
// const selectState = (state) => state[namespace];

export default {
  namespace,
  state: {
    testText: 'this is from redux',
  },
  reducers,
  effects: {
    *error({payload}) {
      const {e} = payload;
      console.log('error', e);
    },
  },
};
