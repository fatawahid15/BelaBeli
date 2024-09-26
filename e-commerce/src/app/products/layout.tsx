import NavbarWrapper from "@/components/NavBarWrapper";

type NavBarProps = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: NavBarProps) => {
  return (
    <section>
      <NavbarWrapper />
      <main className="w-full h-full bg-black dark:bg-zinc-900/30 p-4">{children}</main>
    </section>
  );
};

export default ProductLayout;
