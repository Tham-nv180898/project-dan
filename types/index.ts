export interface Panel {
  id: string;           // "MA-01"
  slug: string;         // "ma-01"
  title: string;
  shortTitle: string;   // "MẢNG ẢNH 1: ĐẢNG CỘNG SẢN..."
  description: string;
  content: string;      // Bài thuyết minh chi tiết
  imageSrc: string;     // Ảnh mảng ảnh
  audioSrc?: string;    // File âm thanh thuyết minh
  audioDuration?: string; // "13:55"
  badge?: string;       // "Âm thanh"
  roomLabel: string;    // "PHÒNG HỒ CHÍ MINH"
}
