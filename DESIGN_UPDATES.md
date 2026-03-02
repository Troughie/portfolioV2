# Cập Nhật Thiết Kế Portfolio

## Tổng Quan Thay Đổi

Trang web portfolio đã được thiết kế lại hoàn toàn với các cải tiến sau:

### 1. Hệ Thống Theme Hiện Đại

- **Chế độ Sáng/Tối**: Người dùng có thể chuyển đổi giữa light mode và dark mode
- **Màu Sắc Hiện Đại**: Sử dụng bảng màu gradient từ xanh dương đến tím
- **CSS Variables**: Dễ dàng tùy chỉnh màu sắc trong `src/theme.ts`

### 2. Thiết Kế Experience Mới

- **Full Screen Layout**: Section Experience chiếm trọn khung hình
- **Card Design**: Mỗi kinh nghiệm được hiển thị trong card riêng biệt
- **Interactive Elements**: Hover effects và animations mượt mà
- **Better Typography**: Phân cấp thông tin rõ ràng hơn

### 3. Responsive Design Cải Tiến

- **Mobile First**: Tối ưu cho màn hình nhỏ trước
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 641px - 1024px
  - Desktop: > 1025px
- **Flexible Layouts**: Grid và Flexbox responsive

### 4. Components Được Cập Nhật

#### Home (HomeV2.tsx)
- Avatar với gradient border
- Animated background elements
- Smooth scroll indicator

#### About (About.tsx)
- Two-column layout
- Quote card với styling đẹp
- Contact info cards
- Statistics section

#### Skills (Skills.tsx)
- Card-based layout
- Hover effects trên tech badges
- Organized categories

#### Experience (Experience.tsx)
- Full-screen centered layout
- Large interactive cards
- Tech stack badges
- Time badges với icons

#### Projects (Projects.tsx)
- Improved image showcase
- Better card design
- Tech stack display
- Action buttons

#### Contact (Contact.tsx)
- Centered form layout
- Modern input styling
- Success modal animation

#### Footer (Footer.tsx)
- Gradient background
- Social links với hover effects
- Copyright info

### 5. Tính Năng Mới

- **Theme Toggle Button**: Nút chuyển đổi theme ở góc trên bên phải
- **Smooth Animations**: Framer Motion animations
- **Custom Scrollbar**: Scrollbar với màu theme
- **Focus States**: Accessibility improvements
- **Loading States**: Better loading indicators

## Cách Sử Dụng

### Chuyển Đổi Theme

Click vào nút mặt trời/mặt trăng ở góc trên bên phải để chuyển đổi giữa chế độ sáng và tối.

### Tùy Chỉnh Màu Sắc

Chỉnh sửa file `src/theme.ts` để thay đổi màu sắc:

```typescript
export const lightTheme = {
  accent: {
    primary: '#0EA5E9',  // Màu chính
    secondary: '#06B6D4', // Màu phụ
    tertiary: '#8B5CF6',  // Màu thứ ba
  }
};
```

### Responsive Testing

Trang web đã được tối ưu cho:
- iPhone (375px)
- iPad (768px)
- Desktop (1024px+)

## Công Nghệ Sử Dụng

- **React 19**: UI framework
- **TypeScript**: Type safety
- **TailwindCSS 4**: Styling
- **Framer Motion**: Animations
- **Zustand**: State management
- **React Scroll**: Smooth scrolling

## Cải Tiến Performance

- CSS Variables cho theme switching nhanh
- Lazy loading cho images
- Optimized animations
- Reduced bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Keyboard navigation
- Focus indicators
- ARIA labels
- Semantic HTML
- Color contrast ratios

## Next Steps

Để chạy dự án:

```bash
npm install
npm run dev
```

Để build production:

```bash
npm run build
```
