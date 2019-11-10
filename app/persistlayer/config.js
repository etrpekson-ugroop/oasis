import { LOCAL_USER_STORE, OASISSTORE_KEY_PREFIX } from 'appConstants';
import localForage from 'localforage';

export const config = {
  whitelist: [LOCAL_USER_STORE],
  keyPrefix: OASISSTORE_KEY_PREFIX,
  debounce: 1000,
  storage: localForage,
};
