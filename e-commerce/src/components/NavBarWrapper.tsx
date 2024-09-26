// NavbarWrapper.js (Server Component)
import Navbar from "@/components/NavBar";
import { cookies } from "next/headers";

export default function NavbarWrapper() {
  const cookiesStore = cookies();
  const tokenCheck = cookiesStore.get("token")?.value;
  return <Navbar tokenCheck={tokenCheck} />;
}
