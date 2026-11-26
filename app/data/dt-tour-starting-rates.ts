type TourStartingRate = { slug: string | null; label: string; amount: number };
// DT Tour's customer-facing June 2026 starting-price poster, approved for current use by the owner on 26 November 2026.
export const tourStartingRates: readonly TourStartingRate[] = [
  {slug:"boracay-3n2d",label:"Boracay 3 ngày 2 đêm",amount:32000},
  {slug:"el-nido-3n2d",label:"El Nido 3 ngày 2 đêm",amount:32000},
  {slug:"coron-3n2d",label:"Coron 3 ngày 2 đêm",amount:32000},
  {slug:"south-cebu",label:"Cebu 3 ngày 2 đêm",amount:35000},
  {slug:"subic-du-thuyen",label:"Du thuyền Subic",amount:6500},
  {slug:"suoi-nong-tagaytay",label:"Suối nước nóng – Tagaytay",amount:7000},
  {slug:"tagaytay-trong-ngay",label:"Tagaytay",amount:5500},
  {slug:"santorini-trong-ngay",label:"Santorini",amount:7000},
  {slug:"little-boracay-batangas",label:"Little Boracay",amount:6500},
  {slug:"fortune-island",label:"Đảo Hy Lạp · Fortune Island",amount:5000},
  {slug:null,label:"Đảo Bàn Tay",amount:6500},
  {slug:null,label:"Biển Subic",amount:6000},
  {slug:null,label:"Matabungkay",amount:5000},
  {slug:null,label:"Thành cổ – Safari",amount:7500},
];
export function startingRateFor(slug:string) { return tourStartingRates.find(row=>row.slug===slug); }
export function formatTourRate(amount:number) { return "₱" + amount.toLocaleString("en-PH"); }
export const tourRateTerms = "Dành cho khách đang ở Philippines. Nhắn DT Tour để xác nhận cách tính, giá cho ngày đi và các khoản bao gồm trước khi đặt.";
