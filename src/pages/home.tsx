import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "antd";
const { Content } = Layout;

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

function RouteComponent() {
  return <Content style={contentStyle}>Home Page</Content>;
}
