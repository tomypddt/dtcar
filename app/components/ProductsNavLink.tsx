"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductsNavLink(){
  const path=usePathname();
  if(path==="/news" || path?.startsWith("/news/")) return null;
  return <Link href="/products-services/" prefetch={false} data-product-nav="">Products / Services</Link>;
}
