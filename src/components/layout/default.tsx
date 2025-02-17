import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Layout, Flex } from "antd";
const { Header, Footer, Sider } = Layout;

export const Route = createRootRoute({
  component: rootComponent,
});

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: "calc(50% - 8px)",
};

function rootComponent() {
  return (
    <React.Fragment>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Outlet />
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
