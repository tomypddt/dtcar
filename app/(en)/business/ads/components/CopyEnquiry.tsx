"use client";
import { useId, useRef, useState } from "react";
import css from "./campaign-details.module.css";

export default function CopyEnquiry({text,vi}:{text:string;vi:boolean}){
  const area=useRef<HTMLTextAreaElement>(null);
  const [status,setStatus]=useState("");
  const id=useId();
  async function copy(){
    try{await navigator.clipboard.writeText(text);setStatus(vi?"Đã sao chép.":"Copied.");}
    catch{area.current?.focus();area.current?.select();setStatus(vi?"Đã chọn nội dung. Hãy sao chép bằng trình duyệt.":"Text selected. Use your browser’s Copy command.");}
  }
  return <div className={css.copy}><label htmlFor={id}>{vi?"Mẫu tin nhắn để bạn sửa và gửi":"Copy, fill in and send this message"}</label>
    <textarea id={id} ref={area} readOnly value={text} rows={4}/>
    <div><button type="button" onClick={copy}>{vi?"Sao chép mẫu":"Copy message"}</button> <span role="status">{status}</span></div></div>;
}
