import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="hidden xl:block bg-custom-light">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
