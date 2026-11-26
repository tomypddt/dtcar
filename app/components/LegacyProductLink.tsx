"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function LegacyProductLink({destination}:{destination:string}){
  useEffect(()=>{
    window.location.replace(destination+window.location.search+window.location.hash);
  },[destination]);
  return <main style={{padding:"3rem 6vw"}}><h1>This page has moved</h1><p>Continue to <Link href={destination}>Products / Services →</Link></p></main>;
}
