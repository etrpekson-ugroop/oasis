import { USER_DATA_STORE } from 'appConstants';
import { SAMPLE_API, GET_MESSAGE } from 'apis/constants';

export const CONFIG = {
  name: SAMPLE_API,
  requests: {
    [GET_MESSAGE]: ({ name }) => {
      console.log({ name });
      return `Hello ${name}, welcome to Oasis!`;
    },
  },
  processResult: {
    [GET_MESSAGE]: hello => {
      console.log({ hello });
      return { hello };
    },
  },
  setValue: {
    hello: [USER_DATA_STORE, 'hello'],
  },

  manuallySubscribe: true, // will not auto-subscribe to all values in `@@values`
};
