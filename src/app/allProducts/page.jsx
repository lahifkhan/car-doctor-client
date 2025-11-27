// SERVER COMPONENT (NO "use client")

import AllProductsPage from "./allProductsPage/page";

export const metadata = {
  title: "All Products | Car Doctor",
  description:
    "Browse all car products including parts, accessories, and essentials.",
};

export default function Page() {
  return <AllProductsPage></AllProductsPage>;
}
