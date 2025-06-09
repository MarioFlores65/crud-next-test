import nextConfig from "@/next.config";
import carts from "@/app/components/carts";
import Cart from "@/app/components/carts";
import Header from "@/app/components/header";
import UsersList from "./components/userlist";
export default function Home() {
  return (
    <>
    <Cart/>
    </>
  );
}

export function Intentalo() {
  return(
    <div>
      <h3>Intentalo como sea</h3>
    </div>
  )
}

