import { Navbar } from "./index";

const Layout = ({ children }) => {
  return (
    <div className="xl:block bg-custom-light">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
