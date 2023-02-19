import Navbar from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app_wrapper">
      <Navbar />
      <main className="main_content">{children}</main>
      <Footer />
    </div>
  );
}
