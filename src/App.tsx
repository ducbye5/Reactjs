import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import notFoundPage from "./components/pages/404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import jaJP from "antd/locale/ja_JP";
import { store, persistor } from "./stores/index.ts";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: notFoundPage,
  // Enable prefetching of resources to improve performance
  // defaultPreload: "intent",
  // defaultPreloadStaleTime: 0,
  // scrollRestoration: true,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={jaJP}>
            <RouterProvider router={router} />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
