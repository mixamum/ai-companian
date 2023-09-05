const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-full items-center">{children}</div>
  );
};

export default Layout;
