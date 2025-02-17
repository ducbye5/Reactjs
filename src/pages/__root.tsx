import * as React from "react";
import {
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

// export const Route = createRootRoute({
//   component: rootComponent,
// });

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: rootComponent,
});

function rootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
