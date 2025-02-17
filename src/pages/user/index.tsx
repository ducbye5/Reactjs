import {
  createFileRoute,
  Link,
  retainSearchParams,
  ErrorComponent,
  Outlet,
  useLoaderData,
} from "@tanstack/react-router";
import { getUsers } from "../../service/user";

type sortOptions = "asc" | "desc";

type query = {
  page: number;
  filter: string;
  sort: sortOptions;
};

export const Route = createFileRoute("/user/")({
  validateSearch: (search: Record<string, unknown>): query => {
    return {
      page: Number(search?.page ?? 3),
      filter: (search.filter as string) || "name",
      sort: (search.sort as sortOptions) || "asc",
    };
  },
  search: {
    // middlewares: [retainSearchParams(query)]
  },
  loaderDeps: ({ search: { page, filter, sort } }) => ({ page, filter, sort }),
  loader: async () => {
    return await getUsers();
  },
  // onError: ({ error }) => {
  //   console.error(error);
  // },
  // onCatch: ({ error, errorInfo }) => {
  //   // Log the error
  //   console.error(error);
  // },
  errorComponent: ({ error }) => {
    // Render an error message
    // return <div>{error.message}</div>;
    // if (error instanceof MyCustomError) {
    //   // Render a custom error message
    //   return <div>{error.message}</div>
    // }

    // Fallback to the default ErrorComponent
    return <ErrorComponent error={error} />;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { page, filter, sort } = Route.useSearch();
  const users = useLoaderData({ from: "/user/" });

  return (
    <>
      <div>
        Hello "/user/"!. Filter: page - {page}, filter - {filter}, sort - {sort}
      </div>
      <div>
        <Link
          from={Route.fullPath}
          to="."
          search={(prev) => ({ ...prev, page: (prev.page ?? 1) + 1 })}
        >
          Next Page
        </Link>
      </div>

      <div>
        <h1>Users List</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              <Link
                to="/user/$userId/edit"
                params={{
                  userId: user.id,
                }}
                preload="intent"
              >
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
