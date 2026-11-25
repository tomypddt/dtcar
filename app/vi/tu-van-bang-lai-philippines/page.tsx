import Link from "next/link";
import { PageHero, SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";

const image = "/images/tu-van-bang-lai-philippines.jpg";
const messenger = "https://m.me/dtcarphil";

export const metadata = pageMetadata({
  path: "/vi/tu-van-bang-lai-philippines/",
  title: "Hỗ trợ thủ tục bằng lái tại Philippines bằng tiếng Việt | DT Car",
  description: "Hỏi DT Car về hồ sơ làm bằng lần đầu hoặc đổi bằng lái nước ngoài tại Philippines. Nhận hướng dẫn bằng tiếng Việt và báo phí theo trường hợp.",
  locale: "vi_VN",
  image,
});

export default function LicenceSupportPage() {
  return (
    <SubPage>
      <PageHero
        label="DT CAR PHILIPPINES"
        title="Hỗ trợ thủ tục bằng lái cho người Việt tại Philippines"
        text="Bạn đã có bằng Việt Nam hay muốn làm bằng lần đầu? Đội DT Car có thể hướng dẫn bằng tiếng Việt và báo phí theo hồ sơ của bạn."
        image={image}
      />
      <section className="detailIntro"><div>
        <a className="primary darkPrimary" href={messenger} data-enquiry-service="licence">
          Hỏi DT Car qua Messenger
        </a>
        <h2>Bắt đầu từ trường hợp của bạn</h2>
        <p><strong>Đã có bằng lái.</strong> Cho biết nước cấp bằng, bằng còn hạn hay đã hết hạn và thành phố bạn đang ở. Đội sẽ cùng bạn kiểm tra hướng đổi bằng và các giấy tờ cần đối chiếu.</p>
        <p><strong>Muốn làm bằng lần đầu.</strong> Cho biết bạn đang ở đâu, đã học lái hay chưa và khung giờ thuận tiện. Bạn có thể hỏi riêng về hồ sơ, phần đào tạo và lịch cần có mặt.</p>
        <h2>Bạn sẽ nhận được gì khi hỏi?</h2>
        <p>Hãy yêu cầu danh sách giấy tờ, nơi cần đến, các bước bạn phải trực tiếp thực hiện và báo giá tách phí dịch vụ của DT Car với lệ phí nhà nước. Land Transportation Office (LTO) là cơ quan xét hồ sơ và cấp bằng.</p>
        <p>Bạn có thể nhắn “Mình ở [thành phố], [đã có bằng Việt Nam còn hạn / muốn làm bằng lần đầu]. Cho mình hỏi cần chuẩn bị gì và phí từng khoản.” Chỉ cần mô tả trường hợp khi hỏi lần đầu.</p>
        <p><a className="primary darkPrimary" href={messenger} data-enquiry-service="licence">Nhắn đội tư vấn tiếng Việt</a></p>
        <p><a href="https://lto.gov.ph/">Xem thông tin chính thức của LTO</a> · <Link href="/vi/hoc-lai-xe-philippines/">Hỏi lịch học thực hành</Link></p>
        <small>Ảnh đầu trang là hình minh họa cho buổi tư vấn.</small>
      </div></section>
    </SubPage>
  );
}
