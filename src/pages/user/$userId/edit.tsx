import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { getUserDetail } from "../../../service/user";

export const Route = createFileRoute("/user/$userId/edit")({
  loader: ({ params }) => {
    return getUserDetail(params.userId);
  },
  component: RouteComponent,
});

function RouteComponent() {
  // const { userId } = Route.useParams();
  const user = useLoaderData({ from: "/user/$userId/edit" });

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{user.id}</h4>
      <div className="text-sm">{user.name}</div>
    </div>
  );
}
