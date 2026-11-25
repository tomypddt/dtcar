import Link from "next/link";
import { guides, guidePath } from "@/app/data/guides";
import { PageHero, SubPage } from "@/app/components/Subpage";
import { pageMetadata } from "@/app/data/site";

const lessonImage = "/images/hoc-lai-thuc-hanh.jpg";

export const metadata = pageMetadata({
  path: "/vi/hoc-lai-xe-philippines/",
  title: "Học lái xe ở Philippines cho người Việt | DT Car",
  description: "Liên hệ DT Car bằng tiếng Việt để hỏi lịch học lái xe 1 kèm 1, địa điểm thực hành, loại xe và học phí theo nhu cầu.",
  locale: "vi_VN",
  image: lessonImage,
});

export default function DrivingLessonsPage() {
  return <SubPage>
    <PageHero label="DT CAR PHILIPPINES" title="Học lái xe ở Philippines cho người Việt"
      text="Bạn có thể nhắn đội DT Car tiếng Việt để hỏi lớp phù hợp, kể cả khi chưa từng cầm lái."
      image={lessonImage} />
    <section className="detailIntro"><div>
      <h2>Hỏi lớp nào phù hợp với mình?</h2>
      <p>Trong bài giới thiệu ngày 8/10/2026, DT Car Xe chất Philippines mô tả hình thức học một kèm một và sắp xếp ca thực hành theo lịch của học viên. Khi liên hệ, hãy cho biết thành phố đang ở, kinh nghiệm cầm lái, loại xe muốn tập và những ngày bạn rảnh.</p>
      <p>Nếu đã lái xe nhưng còn ngại lùi chuồng hoặc đi đường đông, hãy nói rõ tình huống muốn luyện. Nếu mới bắt đầu, bạn có thể hỏi buổi đầu học ở đâu, dùng xe gì và giáo viên hướng dẫn bằng ngôn ngữ nào.</p>
      <h2>Trước khi đặt lịch</h2>
      <p>Xin xác nhận nơi tập, người phụ trách, tổng số buổi, thời lượng thực hành mỗi buổi, học phí trọn gói và cách đổi lịch. Nếu cần học để chuẩn bị hồ sơ thi bằng, hỏi rõ đơn vị đào tạo, giấy tờ được cấp và yêu cầu hiện hành của cơ quan cấp phép trước khi thanh toán.</p>
      <h2>Mẫu tin nhắn hỏi lớp</h2>
      <p>“Mình đang ở [thành phố], đã lái xe được [kinh nghiệm] và muốn tập [kỹ năng]. Mình rảnh [ngày/giờ]. Bên mình có lớp nào phù hợp? Cho mình xin địa điểm, loại xe, thời lượng và học phí nhé.”</p>
      <a className="primary darkPrimary" href="https://m.me/dtcarphil">Hỏi lịch học bằng tiếng Việt</a>
      <p>Nếu đã có bằng lái nước ngoài, xem <Link href="/vi/tu-van-bang-lai-philippines/">hướng dẫn hỏi thủ tục đổi bằng</Link>.</p>
      <p><a href="https://www.facebook.com/dtcarphil">Nguồn thông tin lớp học · DT Car Xe chất Philippines</a></p>
    <h2>Câu hỏi trước khi đặt lịch</h2>
      <ul>{guides.filter(g => g.service === "driving-lessons").map(g => <li key={g.slug}><Link href={guidePath(g.slug)}>{g.title}</Link></li>)}</ul>
    </div></section>
  </SubPage>;
}
