import Footer from "./footer";
import Header from "./header";
import "./layout.sass";

type TProps = { children: React.ReactNode };

function Layout({ children }: TProps) {
  return (
    <div className="layout">
      <div className="layout__inner">
        <div className="layout__body">
          <div className="layout__header">
            <Header />
          </div>
          <div className="layout__page">{children}</div>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
