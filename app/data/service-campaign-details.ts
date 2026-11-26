type Item = {title:string; text:string; image?:string; imageAlt?:string};
type Contact = { label:string; href:string; method?:string };
type Detail = {
  focus: string; blocksTitle: string; blocks: Item[]; stepsTitle: string; steps: Item[];
  sample: string; source?: Contact[]; contacts?:Contact[];
  note:string; cross?:Contact;
};
export const serviceCampaignDetails: Record<string,Detail|undefined> = {
  "sell-your-car":{
    focus:"Moving out, upgrading or selling a spare car? Start with a few photos. The DT Car We Buy Cars team will tell you what it needs for a valuation and help arrange the next step.",
    blocksTitle:"Sell on a timeline that works for you",
    blocks:[
      {title:"Upgrading your car",text:"Tell us when you want to move on from your current vehicle. Ask for a purchase offer and compare it with your other options before you decide.",image:"/images/ads/used-cars.webp",imageAlt:"Pre-owned Toyota SUV from the DT Car photo library"},
      {title:"Moving or leaving the Philippines",text:"Share the last date you can present the car and where it can be inspected. Ask the team to confirm the inspection, handover and payment arrangements before you travel.",image:"/images/ads/sell-your-car.webp",imageAlt:"Pre-owned Ford from the DT Car photo library"},
      {title:"Your bank loan is still open",text:"We can discuss settlement coordination as part of a sale. The lender must confirm the payoff figure and document release. This is not an instalment sales or loan offer."},
    ],
    stepsTitle:"From your first message to the handover",
    steps:[
      {title:"Send the car details",text:"Send model, variant, model year, mileage, location, asking price and recent photos. Include any known damage or repairs."},
      {title:"Arrange an inspection",text:"The appraiser will tell you whether to arrange a viewing. Confirm the time, meeting place and the ownership documents to have available."},
      {title:"Decide after you see the offer",text:"The offer depends on inspection and verification. Confirm who pays what, how settlement is handled if applicable, and when the car and paperwork are handed over."},
    ],
    sample:"Hi DT Car, I’d like to sell my car. Make/model/variant: __. Year: __. Mileage: __ km. City: __. Asking price: ₱__. Paid off or financed: __. Preferred sale date: __. I’ll attach recent photos.",
    contacts:[
      {label:"Call the We Buy Cars team · +63 975 325 7482",href:"tel:+639753257482",method:"phone"},
      {label:"Tiếng Việt · Telegram @Dtcarjohn",href:"https://t.me/Dtcarjohn"},
      {label:"Tiếng Việt · +63 906 018 5666",href:"tel:+639060185666",method:"phone"},
      {label:"한국어 · Aurore",href:"https://t.me/Dtcaraurore"},
      {label:"한국어 · Mindy",href:"https://t.me/dtcarmindy"},
      {label:"中文 · Jessie",href:"https://t.me/dtcarjessie8"},
      {label:"中文 · Aurore",href:"https://t.me/dtcaraurore"},
      {label:"中文 · Best Car",href:"https://t.me/bestcar123"},
    ],
    source:[{label:"DT Car – We Buy Cars on Facebook",href:"https://www.facebook.com/profile.php?id=61596445001029"}],
    note:"Photos are examples from DT Car’s vehicle library. Asking us to appraise a car does not commit you to selling it. Use the official inbox and do not post IDs, bank documents or full registration details in public comments.",
  },
  "used-cars":{
    focus:"Shopping for a city car, a family MPV or an SUV? Send your budget and must-haves. We’ll check the current list and confirm a specific unit before you go to see it.",
    blocksTitle:"What kind of car fits your week?",
    blocks:[
      {title:"City commute: compact cars and sedans",text:"Tell us where you park, whether you need automatic transmission and how much you want to spend in total. Ask which current options fit those limits.",image:"/images/ads/buyer-sedan.webp",imageAlt:"Honda sedan from DT Car’s pre-owned vehicle photo library"},
      {title:"Family use: an MPV or crossover",text:"Tell us how many seats you need and whether you carry a stroller or luggage. Ask to see the actual cabin and boot with the seats in the arrangement you will use.",image:"/images/ads/buyer-mpv.webp",imageAlt:"Cabin of a pre-owned Toyota Avanza from a DT Car Page post"},
      {title:"Longer trips: SUV or pickup",text:"Prioritise passenger room, driving needs and running costs. Ask for a written quotation and recent photos of the exact vehicle, not just the same model.",image:"/images/ads/buyer-suv.webp",imageAlt:"Pre-owned Toyota SUV from DT Car’s vehicle photo library"},
    ],
    stepsTitle:"Check the specific car before committing",
    steps:[
      {title:"Ask for a current shortlist",text:"For each car, ask for the year, variant, mileage, asking price and recent photos. Confirm the unit is not already sold or reserved."},
      {title:"Book the right viewing",text:"Confirm the unit and meeting point before travelling. Ask about a test drive or independent inspection before paying a reservation fee."},
      {title:"Review condition and documents",text:"Ask which service records, ownership and registration documents are available to review. Get the itemised price, any extra charges and written reservation terms before committing."},
    ],
    sample:"Hi Quality Car Manila, I’m looking for a pre-owned car. Total budget: ₱__. Model or body style: __. Seats: __. Transmission: __. City: __. Can you send the price, year, mileage and recent photos of the units currently available?",
    contacts:[{label:"Other languages and contact options",href:"/contact/"}],
    source:[{label:"DT Car – Quality Car Manila on Facebook",href:"https://www.facebook.com/profile.php?id=61550266324189"}],
    note:"Vehicle photos are real examples from DT Car’s pages and library, not a live stock list. Price, condition, documents and availability are confirmed for the individual vehicle.",
  },
  "hoc-lai-xe":{
    focus:"Chưa từng cầm lái, muốn luyện thêm cho tự tin, hay chỉ rảnh vài ngày? Hỏi đội DT Car về buổi thực hành 1 kèm 1 và khung giờ phù hợp với mình.",
    blocksTitle:"Chọn buổi học theo mục tiêu",
    blocks:[
      {title:"Bắt đầu từ số 0",text:"Hỏi buổi đầu tập những gì: chỉnh ghế và gương, làm quen ga phanh, bắt đầu và dừng xe. Bài Page của DT Car giới thiệu hình thức 1 kèm 1 với giáo viên người Việt. Nhắn để xác nhận giáo viên và xe cho ca của bạn."},
      {title:"Bổ túc kỹ năng còn yếu",text:"Chọn tình huống cụ thể: lùi chuồng, đỗ xe, quay đầu hoặc xử lý đường đông. Cho biết đang quen số tự động hay số sàn để hỏi xe phù hợp."},
      {title:"Ít ngày rảnh",text:"Gửi các khoảng thời gian còn trống để hỏi khả năng ghép ca. Xác nhận địa điểm, hôm nào thực hành được, bao nhiêu giờ thực lái và điều kiện dời lịch."},
    ],
    stepsTitle:"Hỏi đúng trước khi đăng ký",
    steps:[
      {title:"Nói mình đang ở đâu và cần tập gì",text:"Gửi thành phố, kinh nghiệm cầm lái, loại xe muốn học và ngày giờ rảnh."},
      {title:"Xác nhận giáo viên, xe và địa điểm",text:"Hỏi xe tập có sẵn không, có phanh phụ không và buổi đầu diễn ra ở đâu. Nếu học để nộp hồ sơ LTO, hỏi riêng về đơn vị đào tạo và giấy tờ của khóa học."},
      {title:"Xin học phí bằng văn bản",text:"So sánh tổng phí, số buổi, số giờ thực hành mỗi buổi, các khoản phát sinh và quy định đổi hoặc hủy lịch trước khi đặt."},
    ],
    sample:"Chào DT Car, mình ở __, hiện [chưa từng lái / muốn học bổ túc]. Mình muốn tập __, rảnh __, ưu tiên xe __. Cho mình xin địa điểm, số giờ thực lái, xe học, lịch phù hợp và học phí trọn gói.",
    source:[{label:"DT Car Xe chất Philippines trên Facebook",href:"https://www.facebook.com/dtcarphil"},{label:"Học liệu chính thức của LTO",href:"https://portal.lto.gov.ph/ords/f?p=ELEARNING%3AHOME"}],
    cross:{label:"Cần hỏi về hồ sơ bằng lái? Xem trang tư vấn riêng",href:"/products-services/tu-van-bang-lai/"},
    note:"Ảnh thực hành từ bài Page ngày 8/10/2026. Kèm lái thực hành không thay thế khóa học hoặc chứng nhận do LTO yêu cầu. Xác nhận với đơn vị đào tạo trước khi đóng phí nếu học để làm hồ sơ.",
  },
  "tu-van-bang-lai":{
    focus:"Bạn có bằng Việt Nam, chưa có bằng, hay cần xử lý bằng Philippines đã hết hạn hoặc thất lạc? DT Car tư vấn bằng tiếng Việt để bạn biết hỏi đúng nơi, chuẩn bị gì và dự trù chi phí ra sao.",
    blocksTitle:"Bạn đang ở trường hợp nào?",
    blocks:[
      {title:"Chưa có bằng",text:"Hỏi lộ trình từ học lái và Student Permit đến hồ sơ xin bằng. Ghi rõ bạn đã học gì để đội tư vấn phân biệt phần cần học với các bước nộp hồ sơ tại LTO."},
      {title:"Có bằng Việt Nam hoặc bằng nước ngoài",text:"Cho biết nước cấp, hạng bằng và còn hạn không. Đối chiếu danh mục LTO cho trường hợp chuyển đổi; hỏi về giấy tờ cư trú, bản dịch chính thức nếu cần và bước nào phải có mặt."},
      {title:"Có bằng Philippines cần gia hạn hoặc cấp lại",text:"Cho biết bằng hết hạn, bị mất hay cần sửa thông tin. Đội tư vấn giúp bạn tìm đúng nhóm thủ tục và biết phải xác nhận gì trước khi đến LTO."},
    ],
    stepsTitle:"Nhận một danh sách rõ ràng cho hồ sơ của bạn",
    steps:[
      {title:"Mô tả nhu cầu, chưa gửi giấy tờ",text:"Nhắn thành phố, loại hồ sơ, tình trạng bằng và thời gian thuận tiện. Không gửi số hộ chiếu, ảnh giấy tờ, mã xác minh hay thông tin tài khoản trong tin mở đầu."},
      {title:"Kiểm tra phần nào làm tại LTO",text:"Yêu cầu checklist, nơi nộp và các bước bạn cần tự thực hiện. Có thể đối chiếu trực tiếp với LTMS hoặc tài liệu LTO bên dưới."},
      {title:"Tách rõ các khoản phí",text:"Xin báo giá phân biệt phí tư vấn của DT Car, lệ phí nhà nước và các khoản từ bên thứ ba nếu có. Hỏi khoản nào bắt buộc và nhận chứng từ gì trước khi thanh toán."},
    ],
    sample:"Chào DT Car, mình đang ở __ và muốn [làm bằng lần đầu / đổi bằng __ / gia hạn / cấp lại]. Tình trạng bằng hiện tại là __. Cho mình xin checklist, các bước phải có mặt và báo phí tách từng khoản.",
    source:[{label:"Cổng LTMS chính thức",href:"https://portal.lto.gov.ph/"},{label:"Checklist LTO: đổi bằng nước ngoài",href:"https://www.lto.gov.ph/wp-content/uploads/2023/09/9-CC2024-DL-CONVERSION.pdf"}],
    cross:{label:"Chưa tự tin cầm lái? Hỏi về buổi học thực hành",href:"/products-services/hoc-lai-xe/"},
    note:"DT Car hỗ trợ tư vấn, không cấp bằng, không hứa đậu hoặc miễn thi và không cam kết thời gian xử lý. LTO quyết định điều kiện, hồ sơ và kết quả. Ảnh minh họa.",
  },
};
