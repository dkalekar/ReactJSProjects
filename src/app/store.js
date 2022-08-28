// Store is a source of truth for entire application

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
