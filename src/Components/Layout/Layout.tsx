import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import {
  CachedOutlined,
  DashboardOutlined,
  HowToRegOutlined,
  Inventory2Outlined,
} from "@mui/icons-material";
import AMDashboard from "Components/AssetManager/AssetManagerDashboard/Dashboard";

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <AMDashboard/>;
      case "2":
        return <div>Approval Request Content</div>;
      case "3":
        return <div>Assets Recovery Content</div>;
      case "4":
        return <div>Inventory All Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="demo-logo-vertical"
          style={{ width: "100%", height: "6vh", padding: 5 }}
        >
          <img
            src={"assets/asset_white1.png"}  // #57c9d9
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <HowToRegOutlined />,
              label: "Approval Request",
            },
            {
              key: "3",
              icon: <CachedOutlined />,
              label: "Assets Recovery",
            },
            {
              key: "4",
              icon: <Inventory2Outlined />,
              label: "Inventory",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
