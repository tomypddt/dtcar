import {extraTours} from "./dt-tour-extra";
import {tourMedia,type TourPhoto} from "./dt-tour-media";
export const tourRoot="/products-services/tour-philippines/";
export const tourPath=(slug:string)=>tourRoot+slug+"/";
type TourBrochure={href:string;label:string};
type Tour={slug:string;name:string;heading:string;duration:string;summary:string;stops:[string,string][];photo?:TourPhoto;gallery?:TourPhoto[];brochure?:TourBrochure;note:string};
const existing:Tour[]=[
 {slug:"south-cebu",name:"Nam Cebu",heading:"Tour riêng Nam Cebu 3 ngày 2 đêm",duration:"3 ngày 2 đêm",summary:"Moalboal, Kawasan và Oslob, chọn hoạt động theo tuổi, khả năng bơi và lịch bay của cả nhóm.",
 brochure:{href:"/documents/dt-tour/south-cebu.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Ngày 1 · Cebu → Moalboal","Đón theo chuyến bay đã chốt, đi Moalboal và nhận phòng. Nếu đến đủ sớm và biển phù hợp, có thể lặn ngắm đàn cá mòi; nếu đến muộn, đảo thứ tự hoạt động."],["Ngày 2 · Kawasan → Oslob","Tham quan Kawasan, chọn canyoneering hoặc phương án nhẹ hơn tùy nhóm. Sau chương trình, di chuyển và nghỉ đêm ở Oslob."],["Ngày 3 · Oslob → Tumalog → Cebu","Có thể đi trải nghiệm ngắm cá mập voi buổi sớm, ghé Tumalog rồi về Cebu City hoặc sân bay. Xác nhận hoạt động và giờ bay trước khi chốt."]],
 photo:{src:"/images/editorial/cebu-hay-bohol-du-lich-tu-viet-nam-cover.webp",caption:"Ảnh Oslob, Cebu từ Page DT Tour",source:"https://www.facebook.com/photo.php?fbid=122189980394790161"},
 gallery:[{src:"/images/editorial/du-lich-cebu-cho-nguoi-viet-chon-ngay-di-thanh-pho-hay-ngay-nghi-bien-cover.webp",caption:"Góc dưới nước tại Oslob, Cebu",source:"https://www.facebook.com/photo.php?fbid=122189980358790161"}],
 note:"Không bảo đảm gặp động vật hoang dã hoặc các điểm luôn mở. Có phương án nhẹ hơn nếu đi cùng trẻ em hoặc người lớn tuổi."},
 {slug:"manila-boracay",name:"Manila – Boracay",heading:"Tour Manila – Boracay 5 ngày 4 đêm",duration:"5 ngày 4 đêm",summary:"Kết hợp nghỉ biển Boracay với một vòng phố cổ Intramuros ở Manila. Lịch mẫu có thể đảo theo chuyến bay nội địa.",
 brochure:{href:"/documents/dt-tour/manila-boracay.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Ngày 1 · Đến Manila","Đón theo giờ bay rồi nhận phòng. Thời gian còn lại tùy giờ đến."],["Ngày 2 · Manila → Caticlan → Boracay","Bay nội địa tới Caticlan, nối phương tiện ra đảo và nhận phòng."],["Ngày 3 · Khám phá Boracay","Đi đảo tùy điều kiện: hỏi về Puka, Balanghai, Coral Garden, Ilig-Iligan hoặc Crocodile Island. Crystal Cove và Magic Island là lựa chọn, không mặc định có trong giá."],["Ngày 4 · Boracay → Manila","Thời gian nghỉ hoặc hoạt động tự chọn trước khi chuyển về Manila theo chuyến bay nội địa."],["Ngày 5 · Intramuros và về","Có thể ghé Manila Cathedral, Plaza de Gobernador, San Agustin hoặc Casa Manila rồi ra sân bay, tùy giờ bay."]],
 photo:{src:"/images/editorial/lich-manila-nua-ngay-intramuros-khach-viet-cover.webp",caption:"Ảnh Intramuros, chặng Manila của tour, từ Page DT Tour",source:"https://www.facebook.com/photo.php?fbid=122190087002790161"},
 gallery:[{src:"/images/editorial/tour-intramuros-cho-nguoi-viet-thich-chup-anh-kien-truc-cover.webp",caption:"Kiến trúc Intramuros trong chặng Manila",source:"https://www.facebook.com/photo.php?fbid=122190087068790161"}],
 note:"Xác nhận riêng vé nội địa, tàu ra đảo, hành lý, bữa ăn và phí hoạt động trong báo giá."},
 {slug:"el-nido",name:"El Nido",heading:"Tour El Nido 4 ngày 3 đêm",duration:"4 ngày 3 đêm",summary:"Khám phá đảo và đầm phá El Nido với hai ngày đi biển, theo lịch mẫu nối qua Puerto Princesa.",
 brochure:{href:"/documents/dt-tour/el-nido.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Ngày 1 · Puerto Princesa → El Nido","Đến Puerto Princesa, di chuyển đến El Nido và nhận phòng theo giờ của khách sạn."],["Ngày 2 · Tour A","Tuyến mẫu gồm Big Lagoon, Shimizu Island, Payong-Payong và 7 Commando. Chốt điểm tới theo giấy phép, lịch tàu và thời tiết."],["Ngày 3 · Tour C","Tuyến mẫu có Secret Beach, Helicopter Island, khu vực Matinloc, Star Beach hoặc Talisay, tùy điều kiện."],["Ngày 4 · El Nido → Puerto Princesa","Chuyển về Puerto Princesa để khớp chuyến bay. Hỏi giờ khởi hành và thời gian dự phòng trước khi tự mua vé."]],
 note:"Tour A và Tour C đi vào hai ngày riêng và có thể đổi thứ tự theo thời tiết, giấy phép và lịch tàu. Hỏi rõ tàu ghép hay riêng, phí vào đầm, bữa trưa, thiết bị, xe đưa đón và khách sạn có trong giá hay không."},
 {slug:"coron",name:"Coron",heading:"Tour Coron 4 ngày 3 đêm",duration:"4 ngày 3 đêm",summary:"Đề nghị lịch Coron riêng quanh hồ, đầm phá và trải nghiệm biển. DT Tour xác nhận thứ tự và điểm dừng trong lịch gửi theo đoàn.",
 stops:[["Thị trấn Coron","Hỏi về thời gian ở Coron Town, ngắm cảnh tại Mt. Tapyas hoặc đi suối nóng Maquinit nếu phù hợp."],["Hồ và đầm phá","Chọn điểm muốn ưu tiên như Kayangan Lake, Barracuda Lake hoặc Twin Lagoon. Các điểm trên được dùng để lên lịch, không phải danh sách cam kết."],["Trải nghiệm biển","Hỏi điểm ngắm san hô, thời gian đi tàu, khả năng bơi, lựa chọn tàu ghép/riêng và phương án nếu biển động."]],
 note:"Các điểm trên là lựa chọn để tư vấn. Thứ tự theo ngày, điểm có thể đi và các khoản bao gồm sẽ ghi trong lịch xác nhận."},
 {slug:"luzon",name:"Luzon",heading:"Tour vòng quanh Luzon 4 ngày 3 đêm",duration:"4 ngày 3 đêm",summary:"Batangas, Tagaytay và Subic trong một tuyến đi từ Manila, có thể điều chỉnh điểm nghỉ theo giờ đón.",
 brochure:{href:"/documents/dt-tour/luzon.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Ngày 1 · Manila → Batangas","Đi Little Boracay ở Batangas, rồi nghỉ theo chương trình. Đây là điểm bãi cát ở Batangas, không phải đảo Boracay."],["Ngày 2 · Suối nóng → Tagaytay","Sắp xếp suối nóng và tiếp tục tới Tagaytay. Hỏi điểm dừng và khách sạn phù hợp với nhóm."],["Ngày 3 · Tagaytay → Subic","Di chuyển đến Subic. Có thể hỏi thêm du thuyền ngắm hoàng hôn nếu lịch và điều kiện phù hợp."],["Ngày 4 · Subic → Manila","Quay về Manila hoặc sân bay. Thống nhất điểm trả, giờ đến và thời gian dự phòng trước khi đặt vé."]],
 photo:{src:"/images/editorial/tour-tagaytay-trong-ngay-tu-manila-cho-gia-dinh-viet-cover.webp",caption:"Ảnh khu vực Tagaytay và Taal từ Page DT Tour",source:"https://www.facebook.com/photo.php?fbid=122192738564790161"},
 note:"Du thuyền và các điểm có phí chỉ được tính vào chương trình khi báo giá liệt kê. Hỏi phương án thay thế theo thời tiết."},
 {slug:"bohol",name:"Bohol theo yêu cầu",heading:"Tour riêng Bohol và Panglao theo yêu cầu",duration:"Lịch linh hoạt",summary:"Dành thời gian cho Panglao, đi biển hay tham quan trong đảo. Đặt riêng hoặc hỏi cách ghép với Cebu theo giờ tàu.",
 stops:[["Biển Panglao và Balicasag","Hỏi phương án đi tàu và ngắm rùa hoặc san hô tại Balicasag khi điều kiện phù hợp."],["Trải nghiệm theo sở thích","Có thể hỏi thêm Pamilacan, đàn cá mòi ở Napaling hoặc dành một ngày tham quan trong đảo, ví dụ Chocolate Hills."],["Ghép tuyến Cebu – Bohol","Nếu muốn ghép, báo giờ đến/về và hành lý để đội tư vấn kiểm tra tàu, xe nối chuyến và đêm nghỉ. Bohol không mặc định bao gồm trong tour Nam Cebu."]],
 photo:{src:"/images/editorial/tour-bohol-panglao-gia-dinh-tu-viet-nam-cover.webp",caption:"Ảnh Virgin Island, Bohol từ Page DT Tour",source:"https://www.facebook.com/photo.php?fbid=122190995594790161"},
 gallery:[{src:"/images/editorial/tour-bohol-cho-nhom-co-tre-ngu-trua-dat-lich-rieng-the-nao-cover.webp",caption:"Vùng nước nông ở Virgin Island, Bohol",source:"https://www.facebook.com/photo.php?fbid=122190995582790161"}],
 note:"Lịch riêng theo nhu cầu, không công bố số ngày cố định. Không bảo đảm nhìn thấy động vật hoang dã."},
 {slug:"tagaytay-trong-ngay",name:"Tagaytay",heading:"Tour Tagaytay trong ngày từ Manila",duration:"1 ngày",summary:"Ngắm hồ Taal từ Tagaytay, ăn trưa và về Manila trong ngày theo giờ đoàn chọn.",
 brochure:{href:"/documents/dt-tour/tagaytay-trong-ngay.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Sáng · Manila → Tagaytay","Đón tại Metro Manila theo giờ đã chốt. Chọn điểm ngắm từ trên bờ, kiểm tra thời tiết và khoảng đi bộ phù hợp với nhóm."],["Trưa và chiều · Tagaytay → Manila","Nghỉ ăn, thêm một điểm ngắn nếu còn thời gian và quay lại Manila. Hỏi giờ về nếu cần nối chuyến hoặc có hẹn tối."]],
 photo:{src:"/images/editorial/tour-tagaytay-trong-ngay-tu-manila-cho-gia-dinh-viet-cover.webp",caption:"Hồ Taal nhìn từ Tagaytay. Ảnh Page DT Tour",source:"https://www.facebook.com/photo.php?fbid=122192738564790161"},
 note:"Lịch tham khảo. Không bao gồm mặc định các hoạt động xuống hồ, vé điểm tham quan hay bữa ăn."},
 {slug:"hidden-valley",name:"Hidden Valley",heading:"Tour Hidden Valley trong ngày",duration:"1 ngày",summary:"Một ngày nghỉ gần thiên nhiên, ưu tiên thời gian tại điểm thay vì ghép nhiều điểm xa.",
 brochure:{href:"/documents/dt-tour/hidden-valley.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Sáng · Xe đón từ Manila","Chốt khu vực đón, giờ xuất phát và loại xe theo số người. DT Tour kiểm tra lại điểm đến, giờ vào và suất còn chỗ."],["Ban ngày · Nghỉ tại Hidden Valley","Hỏi gói vào cửa gồm những khu vực nào, có bữa ăn, khăn hoặc chỗ thay đồ không. Chốt giờ về và phương án nếu mưa."]],
 note:"Chương trình tham khảo, cần xác nhận điểm tham quan, vé, bữa ăn và xe riêng trước khi đặt."},
 {slug:"subic-du-thuyen",name:"Du thuyền Subic",heading:"Tour du thuyền ngắm hoàng hôn ở Subic",duration:"1 ngày",summary:"Đi từ Manila đến Subic, sắp xếp buổi trên vịnh theo giờ tàu và thời tiết.",
 brochure:{href:"/documents/dt-tour/subic-du-thuyen.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Trước giờ tàu · Manila → Subic","Tính giờ xe theo nơi đón, ăn uống và thời gian tập trung tại bến. Xin tên bến, địa chỉ đón và người phụ trách."],["Buổi chiều · Trải nghiệm trên vịnh","Hỏi thời lượng, số khách, áo phao, thức ăn hoặc đồ uống và điều kiện đổi lịch khi gió lớn. Sau khi về bến, ăn tối hoặc trở lại Manila tùy lịch."]],
 note:"Không mặc định thuê tàu riêng hay có suất theo giờ cố định. Chỉ xác nhận giờ tàu sau khi nhà vận hành duyệt."},
 {slug:"santorini-trong-ngay",name:"Santorini",heading:"Tour Santorini trong ngày",duration:"1 ngày",summary:"Tuyến chụp ảnh và nghỉ trong ngày mà DT Tour có thể tư vấn cho nhóm khởi hành từ Manila.",
 brochure:{href:"/documents/dt-tour/santorini-trong-ngay.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Trước khi đặt · Chốt địa điểm","Nhắn ngày đi, số khách và điểm đón. DT Tour xác nhận cơ sở có tên Santorini trong báo giá, địa chỉ, quyền vào và hoạt động cụ thể."],["Trong ngày · Tham quan và nghỉ","Dành khung giờ chụp ảnh, nghỉ và ăn. Nếu muốn dùng hồ bơi hoặc tiện ích khác, hỏi từng hạng mục có mở và được tính trong giá không."]],
 note:"Santorini ở đây là tên tuyến tại Philippines. Không xác nhận địa điểm, vé hoặc dịch vụ đi kèm cho đến khi có báo giá."},
 {slug:"little-boracay-batangas",name:"Little Boracay, Batangas",heading:"Tour Little Boracay, Batangas trong ngày",duration:"1 ngày",summary:"Từ Manila đến bờ biển Batangas và hỏi lịch ra điểm cát theo thủy triều.",
 brochure:{href:"/documents/dt-tour/little-boracay-batangas.pdf",label:"Tải lịch trình tham khảo"},
 stops:[["Sáng · Manila → Batangas","Xác nhận giờ đón, bến hoặc điểm dừng, số ghế và số kiện hành lý. Đây không phải đảo Boracay và không cần đặt chuyến bay Caticlan cho tuyến này."],["Trưa và chiều · Trải nghiệm biển","Hỏi bến, hình thức ra điểm cát, áo phao, thời điểm thủy triều, bữa ăn và giờ xe về. Nhà tổ chức cần xác nhận phương án khi không thể ra biển."]],
 note:"Điểm cát và hoạt động phụ thuộc thủy triều, thời tiết và xác nhận của bến trong ngày."},
];

export const tours:Tour[]=[...existing,...extraTours].map(t=>{
 const photos=tourMedia[t.slug]??[];
 return {...t,photo:photos[0],gallery:photos.slice(1),brochure:{href:"/documents/dt-tour/"+t.slug+".pdf?revision=00ee4bf",label:"Tải lịch trình tham khảo"}};
});
