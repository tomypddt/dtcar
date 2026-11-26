export type AdLanding = {
  slug: string;
  campaign: string;
  lang: "en" | "vi";
  label: string;
  area: string;
  title: string;
  summary: string;
  imageAlt: string;
  imageNote: string;
  messenger: string;
  action: string;
  details: { label: string; href: string };
  options: [string, string][];
  brief: string[];
  questions: [string, string][];
};

export const adHubPath = "/business/ads/";
export const adPath = (slug: string) => adHubPath + slug + "/";
export const adImage = (slug: string) => "/images/ads/" + slug + ".webp";
export const adMessenger = (page: AdLanding) => "https://m.me/" + page.messenger + "?ref=" + page.campaign + "_web";

export const adLandings: AdLanding[] = [
  {
    slug: "vinfast", campaign: "dtcar_vinfast", lang: "en",
    label: "New VinFast EVs", area: "Metro Manila · VinFast sales",
    title: "Find the right VinFast EV for your daily drive",
    summary: "Compare VinFast models, ask for a written quotation, or request a test drive. Tell DT Car what you drive today and what you need from your next car.",
    imageAlt: "VinFast electric vehicles outside a showroom in the Philippines",
    imageNote: "DT Car photo. Vehicles shown are not a live stock list.",
    messenger: "61550266324189", action: "Ask about a VinFast test drive",
    details: { label: "Compare VinFast options", href: "/business/vinfast-test-drive/" },
    options: [
      ["City driving", "Start with the VF 3 or VF 5 Plus if easy parking and a compact footprint matter most."],
      ["Family, work or longer drives", "Ask which VF 6, VF 7 or seven-seat models fit your passengers, luggage and typical route."],
      ["Know the full cost", "Request the exact variant, what is included, charging options and the handover timeline in writing."],
    ],
    brief: ["Model or number of seats you need", "City, preferred date and time for a test drive", "Budget, preferred colour and whether you want a cash quotation"],
    questions: [
      ["Is a test drive confirmed when I message?", "No. The team will confirm the model, location and available time before you make the trip."],
      ["Can I ask about battery or charging arrangements?", "Yes. Ask for the battery arrangement, charging inclusions and applicable conditions in the quote for your specific variant."],
    ],
  },
  {
    slug: "sell-your-car", campaign: "dtcar_sell_your_car", lang: "en",
    label: "Sell your car to DT Car", area: "Metro Manila · Vehicle appraisal",
    title: "Sell your used car to DT Car in Metro Manila",
    summary: "Send your car details and photos to DT Car We Buy Cars for an appraisal. Selling before a move or still paying off a loan? Ask about a viewing and settlement coordination.",
    imageAlt: "Used vehicle parked for a closer look",
    imageNote: "DT Car vehicle photo, shown as an example.",
    messenger: "61596445001029", action: "Send my car for appraisal",
    details: { label: "Use the vehicle details checklist", href: "/sell-your-car/" },
    options: [
      ["Send the basics", "Share year, make, model, variant, mileage and where the car can be viewed."],
      ["Describe the condition", "Show clear exterior and interior photos and mention any known damage or mechanical issues."],
      ["Review the next step", "Ask if an in-person appraisal is available and what affects a written offer or transfer."],
    ],
    brief: ["Year, make, model, variant and odometer reading", "City, asking price and clear photos", "Ownership or financing status only. Do not send IDs or original papers in the first message."],
    questions: [
      ["Is an estimate a final offer?", "No. A final offer depends on inspection, condition and verification of the vehicle and ownership details."],
      ["Who receives my message?", "The link opens the DT Car We Buy Cars Messenger page for seller enquiries, not the retail sales inbox."],
    ],
  },
  {
    slug: "used-cars", campaign: "dtcar_used_cars", lang: "en",
    label: "Buy a used car", area: "Metro Manila · Pre-owned vehicles",
    title: "Buy a used car in Metro Manila: get a shortlist for your budget",
    summary: "Shop for a sedan, family MPV or SUV. Ask DT Car Quality Car Manila for available units, recent photos, a written quote and a viewing appointment.",
    imageAlt: "Front view of a pre-owned Toyota in the DT Car photo library",
    imageNote: "DT Car vehicle photo, not a current listing or stock promise.",
    messenger: "61550266324189", action: "Ask for current used-car options",
    details: { label: "Read the buyer’s guide", href: "/business/used-cars-manila/" },
    options: [
      ["Choose by use", "Tell us if you need a city runabout, a family car, or more room for passengers and luggage."],
      ["Compare available units", "Request the year, variant, asking price, mileage and recent photos for each car you are considering."],
      ["Check before deciding", "Ask about inspection, test drive arrangements and the documents available for the exact vehicle."],
    ],
    brief: ["Total budget and preferred body style", "Must-have features and acceptable mileage", "City and a suitable time to view the car"],
    questions: [
      ["Is the car in the photo still available?", "This page uses an example photo. The sales team can confirm which vehicles are currently available."],
      ["Can I reserve a viewing?", "Ask for a date, location and confirmation that the specific unit will be available to see."],
    ],
  },
  {
    slug: "hoc-lai-xe", campaign: "dtcar_driving", lang: "vi",
    label: "Học lái xe bằng tiếng Việt", area: "Philippines · Tư vấn lịch học",
    title: "Học lái xe tại Philippines, tư vấn bằng tiếng Việt",
    summary: "Hỏi buổi học lái 1 kèm 1, tập từ số 0 hoặc bổ túc. Nhắn DT Car để xác nhận giáo viên, địa điểm, giờ thực hành và học phí trọn gói.",
    imageAlt: "Hình minh họa buổi học thực hành lái ô tô",
    imageNote: "Hình minh họa, không phải ảnh xác nhận một lớp đang mở.",
    messenger: "dtcarphil", action: "Hỏi lịch học lái",
    details: { label: "Xem thêm về hình thức học", href: "/vi/hoc-lai-xe-philippines/" },
    options: [
      ["Mới bắt đầu", "Hỏi về cách làm quen với xe, điều khiển cơ bản và lộ trình học phù hợp với người chưa từng lái."],
      ["Cần bổ túc", "Nói rõ phần muốn tập thêm: đỗ xe, lùi xe, đi đường đông hoặc làm quen xe số tự động."],
      ["Chọn lịch trước khi đóng phí", "Xác nhận địa điểm, số giờ, loại xe, người hướng dẫn và tổng phí trước khi đăng ký."],
    ],
    brief: ["Khu vực bạn đang ở", "Chưa từng lái hay muốn học bổ túc", "Khung giờ rảnh và loại xe muốn tập"],
    questions: [
      ["Mình chưa lái lần nào có thể hỏi lịch không?", "Có. Nói rõ bạn mới bắt đầu để đội tư vấn trao đổi về lớp, thời gian và yêu cầu phù hợp."],
      ["Học với DT Car có đồng nghĩa được cấp bằng không?", "Không. Học lái và thủ tục cấp bằng là hai việc khác nhau. Hãy hỏi rõ đơn vị dạy, nội dung và giấy tờ của lớp trước khi đăng ký."],
    ],
  },
  {
    slug: "tu-van-bang-lai", campaign: "dtcar_licence", lang: "vi",
    label: "Tư vấn thủ tục bằng lái", area: "Philippines · Hỗ trợ bằng tiếng Việt",
    title: "Tìm hiểu thủ tục bằng lái Philippines bằng tiếng Việt",
    summary: "DT Car tư vấn bằng tiếng Việt về hồ sơ làm bằng mới, đổi bằng nước ngoài, gia hạn hoặc cấp lại. Hỏi checklist LTO, bước cần có mặt và báo phí từng khoản.",
    imageAlt: "Hình minh họa buổi tư vấn hồ sơ tại bàn",
    imageNote: "Hình minh họa. DT Car không phải cơ quan cấp bằng.",
    messenger: "dtcarphil", action: "Hỏi trường hợp của mình",
    details: { label: "Xem hướng dẫn tư vấn", href: "/vi/tu-van-bang-lai-philippines/" },
    options: [
      ["Chưa có bằng", "Trao đổi về mục tiêu học lái và các bước cần xác nhận với đơn vị đào tạo và cơ quan có thẩm quyền."],
      ["Đang có bằng nước ngoài", "Cho biết nước cấp và bằng còn hạn hay không để hỏi về hồ sơ cần kiểm tra cho trường hợp của bạn."],
      ["Gia hạn hoặc cấp lại", "Nói rõ tình trạng bằng để hỏi các bước xác nhận và cách làm việc với LTO."],
    ],
    brief: ["Bạn muốn làm mới, đổi, gia hạn hay cấp lại", "Thành phố đang ở và tình trạng bằng hiện tại", "Chỉ mô tả trường hợp lúc đầu. Không gửi ảnh hộ chiếu, số giấy tờ hoặc ảnh bằng qua tin nhắn đầu tiên."],
    questions: [
      ["DT Car có cấp bằng lái không?", "Không. DT Car hỗ trợ tư vấn. Việc xác định đủ điều kiện và cấp bằng thuộc thẩm quyền của LTO."],
      ["Có cam kết đậu hay bỏ qua thủ tục không?", "Không. Không cam kết kết quả, thời gian cấp bằng hoặc miễn yêu cầu xác minh, học hay thi nếu cơ quan có thẩm quyền yêu cầu."],
    ],
  },
  {
    slug: "tour-philippines", campaign: "dtcar_tours", lang: "vi",
    label: "Tour Philippines theo nhóm riêng", area: "DT Tour · Tư vấn bằng tiếng Việt",
    title: "Lên lịch du lịch Philippines theo nhóm của bạn",
    summary: "Đi từ Việt Nam hoặc gặp đoàn tại Philippines. Gửi ngày đi, số người và kiểu trải nghiệm bạn thích để DT Tour đề xuất tuyến, xe riêng và báo giá theo nhóm.",
    imageAlt: "Khung cảnh du lịch tại Philippines bên vịnh biển",
    imageNote: "Ảnh từ thư viện DT Tour. Tuyến và hoạt động phụ thuộc lịch xác nhận.",
    messenger: "dulichphilippinesdttour", action: "Nhận lịch trình và báo giá tour",
    details: { label: "Xem thêm trải nghiệm của DT Tour", href: "/travel/" },
    options: [
      ["Manila và vùng lân cận", "Hỏi lịch tham quan thành phố, đi trong ngày hoặc xe riêng đón tại sân bay."],
      ["Thiên nhiên và biển đảo", "Cho biết bạn thích đi biển, nghỉ dưỡng hay tham quan thiên nhiên để đội tư vấn lọc tuyến theo mùa và thời lượng."],
      ["Nhóm gia đình hoặc bạn bè", "Nói rõ số người, trẻ em nếu có, hành lý và nhịp đi mong muốn để chọn xe và lịch phù hợp."],
    ],
    brief: ["Ngày dự kiến, số khách và nơi xuất phát", "Số ngày, điểm muốn đến và hoạt động ưu tiên", "Ngân sách dự kiến và nhu cầu xe riêng hoặc đón sân bay"],
    questions: [
      ["Tour có bao gồm vé máy bay và khách sạn không?", "Tùy lịch trình. Yêu cầu bảng báo giá ghi rõ các khoản đã bao gồm và các khoản cần tự đặt trước khi đóng cọc."],
      ["Có tư vấn cho nhóm đang ở Việt Nam không?", "Có thể nhắn bằng tiếng Việt để lên lịch với DT Tour. Gửi thành phố khởi hành và ngày dự kiến để đội tư vấn sắp xếp phương án."],
    ],
  },
];
