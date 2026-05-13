# 🔥 BẠNG ĐIỂM BẠN BÈ 🔥

Một website React + Vite với thiết kế vui nhộn, hiển thị ảnh bạn bè kèm theo các dòng meme trêu trọc hài hước!

## ✨ Tính Năng

- 🎨 **Giao diện hiện đại**: Gradient màu sắc rực rỡ, design vui nhộn kiểu meme/social card
- 👥 **Danh sách bạn bè**: Mỗi người có ảnh đại diện, tên, biệt danh hài hước, meme trêu chọc
- 📊 **Chỉ số đánh giá**:
  - Độ báo 🚨 (tính khó tính, nóng tính)
  - Độ lầy 🤪 (tính lầy, hài hước)
  - Độ simp 💕 (tính simp)
  - Độ nguy hiểm 💣 (tính nguy hiểm)
- 🎲 **Random Meme**: Nút để đổi câu meme ngẫu nhiên cho từng bạn
- 🔍 **Tìm kiếm**: Tìm kiếm bạn theo tên hoặc biệt danh
- 🏷️ **Filter**: Lọc bạn theo mức độ "báo" (Bình thường, Hơi báo, Báo động đỏ)
- 📱 **Responsive**: Hiển thị tốt trên desktop, tablet, mobile
- ✅ **Không backend**: Chỉ frontend, dữ liệu lưu trong mảng JSON
- 🎯 **Dễ tùy chỉnh**: Thêm/sửa bạn bè bằng cách chỉnh sửa mảng `FRIENDS_DATA` trong `App.jsx`

## 🚀 Cách Chạy

### Prerequisites
- Node.js (v16+)
- npm hoặc yarn

### Cài đặt & Chạy

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Truy cập http://localhost:5173/
```

## 📝 Cách Thêm/Sửa Bạn Bè

Mở file `src/App.jsx` và tìm mảng `FRIENDS_DATA`. Mỗi bạn bè là một object:

```javascript
{
  id: 1,
  name: 'Tên Bạn',           // Tên hiển thị
  nickname: 'Biệt Danh',     // Biệt danh hài hước
  avatar: 'URL_AVATAR',      // Link ảnh (dùng dicebear.com để random)
  baoDegree: 'normal',       // 'normal' | 'warning' | 'dangerous'
  layDegree: 50,             // 0-100
  simpDegree: 50,            // 0-100
  dangerDegree: 50,          // 0-100
  memes: [
    'Câu meme 1...',
    'Câu meme 2...',
    'Câu meme 3...',
  ],
}
```

### Tùy chọn Avatar:
- Dùng dicebear.com: `https://api.dicebear.com/9.x/avataaars/svg?seed=TenBan`
- Hoặc link ảnh khác tùy thích

## 🎨 Cấu Trúc Project

```
src/
├── App.jsx          # Main component, chứa FRIENDS_DATA
├── App.css          # Styles (dùng Tailwind CSS)
├── main.jsx         # Entry point
└── index.css        # Global styles & Tailwind directives
tailwind.config.js   # Tailwind configuration
postcss.config.js    # PostCSS configuration
```

## 🛠️ Build Production

```bash
npm run build        # Build optimized
npm run preview      # Preview build
```

## 💡 Tips

- Nút **Random Meme** sẽ chọn ngẫu nhiên từ mảng `memes` của mỗi người
- Thanh tìm kiếm tìm được cả theo `name` lẫn `nickname`
- Filter **"Báo động đỏ"** chỉ hiển thị những người có `baoDegree: 'dangerous'`
- Màu sắc của stat bars tự động căn cứ vào giá trị percentage

## 🌟 Highlight

- Hover vào card sẽ có hiệu ứng scale + glow
- Avatar trong card có hover animation
- Nút bộ lọc đổi màu khi được chọn
- Gradient nền sinh động

## 📄 License

MIT - Tự do sử dụng, sửa đổi, chia sẻ


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
