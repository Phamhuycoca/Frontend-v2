import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";
import { PathTileAdmin } from "../../common/Constants";

interface PageHeaderProps {
  customTitles?: { [key: string]: string }; // Tùy chỉnh tiêu đề breadcrumb
}

const PageHeader: React.FC<PageHeaderProps> = () => {
  const location = useLocation();
  const pathnames = location.pathname.replace(/^\/admin/, "").split("/").filter((x) => x);

  const breadcrumbItems = [
    {
      title: (
        <Link to="/admin">
          <HomeOutlined /> Trang quản trị
        </Link>
      ),
    },
    ...pathnames.map((name, index) => {
      const routeTo = `/admin/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        title: <Link to={routeTo}>{PathTileAdmin.find(x=>x.key===name)?.label}</Link>,
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default PageHeader;