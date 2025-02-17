import * as React from "react";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
// import { fetchPosts } from "../../constants/api";

// const usersQueryOptions = queryOptions({
//   queryKey: ["posts"],
//   queryFn: () => fetchPosts(),
// });

export const Route = createFileRoute("/user/$userId/update")({
  // loader: async ({ context: { queryClient }, params: { userId } }) => {
  //   await queryClient.ensureQueryData(usersQueryOptions);
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const params = Route.useParams();
  // const usersQuery = useSuspenseQuery(usersQueryOptions);
  // const users = usersQuery.data;
  // console.log(users);
  return (
    <>
      <div>Hello "/user/{userId}/update"!</div>
      <div>Hello "/user/{params.userId}/update"!</div>
    </>
  );
}
