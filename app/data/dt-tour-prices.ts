export const dtTourRateDate = "10/06/2026";
export const dtTourRateNote = "Mức tham khảo theo bảng giá DT Tour ngày 10/06/2026 cho khách Việt đang ở Philippines. Bảng chia theo số khách, không ghi rõ đơn vị tính của từng dòng. Nhắn DT Tour xác nhận cách tính, giá mới nhất và phần bao gồm trước khi đặt.";
export const dtTourRateBands = [4,8,15] as const;
export const dtTourRateRows = [
 ["boracay-3n2d","Boracay 3 ngày 2 đêm",[37000,33000,32000]],
 ["el-nido-3n2d","El Nido 3 ngày 2 đêm",[37000,33000,32000]],
 ["coron-3n2d","Coron 3 ngày 2 đêm",[38000,33000,32000]],
 ["south-cebu","Cebu 3 ngày 2 đêm",[43000,37000,35000]],
 ["subic-du-thuyen","Du thuyền Subic",[8500,7500,6500]],
 ["suoi-nong-tagaytay","Suối nước nóng – Tagaytay",[9000,8000,7000]],
 ["tagaytay-trong-ngay","Tagaytay",[7500,6500,5500]],
 ["santorini-trong-ngay","Santorini",[9000,8000,7000]],
 ["little-boracay-batangas","Little Boracay",[8500,7500,6500]],
 ["fortune-island","Đảo Hy Lạp",[7000,6000,5000]],
 [null,"Đảo Bàn Tay",[8500,7500,6500]],
 [null,"Biển Subic",[8000,7000,6000]],
 [null,"Matabungkay (bảng ghi Makabungkay)",[7000,6000,5000]],
 [null,"Thành cổ + Safari",[9500,8500,7500]],
] as const;
export const pesos = (value:number) => "₱"+value.toLocaleString("en-PH");
export const findTourRates=(slug:string)=>dtTourRateRows.find(r=>r[0]===slug)?.[2];
