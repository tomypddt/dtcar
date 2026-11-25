const english = {
  quick: "Quick answer", contents: "On this page", checklist: "Your preparation checklist", sources: "Sources and further reading",
  next: "Take the next step", read: "Read the guide", home: "Home", guides: "Guides", related: "Related guides",
  archive: "DT Car used-car archive photo.", checked: "Information checked", travel: "Request a private transport quote",
  services: "DT Car services", contact: "Contact and language options", calculator: "EV energy cost calculator",
  about: "About these guides", policy: "Editorial policy", message: "Contact DT Car", continue: "View service details"
};
const translations: Record<string, typeof english> = {
  vi: {
    quick:"Trả lời nhanh", contents:"Trong bài này", checklist:"Danh sách cần chuẩn bị", sources:"Nguồn và thông tin liên quan", next:"Trao đổi với DT Car", read:"Đọc hướng dẫn", home:"Trang chủ", guides:"Hướng dẫn", related:"Bài liên quan", archive:"Ảnh tư liệu xe cũ của DT Car.", checked:"Ngày đối chiếu thông tin", travel:"Hỏi giá qua DT Tour", services:"Dịch vụ DT Car", contact:"Liên hệ theo ngôn ngữ", calculator:"Tính chi phí điện cho xe", about:"Về nội dung hướng dẫn", policy:"Chính sách biên tập", message:"Liên hệ đội tiếng Việt", continue:"Xem dịch vụ"
  },
  "fil-PH": {
    quick:"Maikling sagot", contents:"Sa gabay na ito", checklist:"Checklist bago magpatuloy", sources:"Mga sanggunian", next:"Kausapin ang DT Car", read:"Basahin ang gabay", home:"Home", guides:"Mga gabay", related:"Iba pang gabay", archive:"Larawan mula sa koleksyon ng DT Car.", checked:"Huling sinuri", travel:"Humingi ng quote sa DT Tour", services:"Mga serbisyo ng DT Car", contact:"Makipag-ugnayan sa DT Car", calculator:"Kalkulahin ang gastos sa pag-charge", about:"Tungkol sa mga gabay", policy:"Patakaran sa pagsulat", message:"Makipag-ugnayan sa DT Car", continue:"Tingnan ang detalye ng serbisyo"
  },
  "zh-Hans": {
    quick:"简要回答", contents:"本文目录", checklist:"准备清单", sources:"资料来源", next:"联系 DT Car", read:"阅读指南", home:"首页", guides:"实用指南", related:"相关指南", archive:"照片来自 DT Car 二手车资料库。", checked:"资料核对日期", travel:"向 DT Tour 询价", services:"DT Car 服务", contact:"按语言选择联系方式", calculator:"电动车用电成本计算器", about:"关于这些指南", policy:"编辑方针", message:"联系中文团队", continue:"查看服务详情"
  },
  ko: {
    quick:"먼저 확인할 내용", contents:"목차", checklist:"준비 목록", sources:"참고 자료", next:"DT Car에 문의하기", read:"가이드 읽기", home:"홈", guides:"이용 가이드", related:"관련 가이드", archive:"DT Car 중고차 자료 사진입니다.", checked:"정보 확인일", travel:"DT Tour에 견적 문의", services:"DT Car 서비스", contact:"언어별 문의 채널", calculator:"전기차 충전 비용 계산기", about:"가이드 안내", policy:"편집 방침", message:"한국어 상담팀에 문의", continue:"서비스 안내 보기"
  }
};
export const guideLabels = (language: string) => translations[language] ?? english;
export const guideLocale = (language: string) => ({"zh-Hans":"zh_CN",ko:"ko_KR",vi:"vi_VN","fil-PH":"fil_PH"}[language] ?? "en_PH");
