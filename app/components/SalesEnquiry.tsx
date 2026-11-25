"use client";

import { useRef, useState } from "react";

type Props = {
  initialMessage: string;
  topic: string;
  vietnamese: boolean;
  team: string;
  messenger: string;
  buttonLabel: string;
  service: string;
};

export function SalesEnquiry({ initialMessage, topic, vietnamese, team, messenger, buttonLabel, service }: Props) {
  const [message, setMessage] = useState(initialMessage);
  const [status, setStatus] = useState("");
  const field = useRef<HTMLTextAreaElement>(null);
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus(vietnamese ? "Đã sao chép. Mở Messenger rồi dán tin nhắn." : "Copied. Open Messenger and paste your message.");
    } catch {
      field.current?.focus();
      field.current?.select();
      setStatus(vietnamese ? "Đã chọn nội dung. Dùng lệnh sao chép trên thiết bị." : "Text selected. Use your device’s copy command.");
    }
  }
  const email = "mailto:management@dtcar.ph?subject=" + encodeURIComponent(team + " · " + topic) + "&body=" + encodeURIComponent(message);
  return <section className="salesEnquiry">
    <h2>{vietnamese ? "Gửi yêu cầu cho " + team : "Contact " + team}</h2>
    <label htmlFor="enquiry-message">{vietnamese ? "Điền chỗ trống rồi sao chép vào Messenger, hoặc gửi qua email." : "Fill in the blanks, then copy your message to Messenger or send it by email."}</label>
    <textarea id="enquiry-message" ref={field} rows={4} value={message} onChange={event => { setMessage(event.target.value); setStatus(""); }} />
    <div className="enquiryActions">
      <button type="button" onClick={copyMessage} disabled={!message.trim()}>{vietnamese ? "Sao chép tin nhắn" : "Copy message"}</button>
      <a className="guideAction" href={messenger} data-enquiry-service={service}>{buttonLabel} →</a>
      <a href={email} data-enquiry-service={service}>{vietnamese ? "Mở email đã điền sẵn" : "Open email draft"}</a>
    </div>
    <small role="status">{status}</small>
  </section>;
}
