# Cập Nhật Portfolio V2

## Những Thay Đổi Mới

### 1. Three.js 3D Background
- **Hero 3D**: Thêm sphere 3D với material distortion
- **Auto-rotate**: Tự động xoay với OrbitControls
- **Theme-aware**: Màu sắc thay đổi theo theme

### 2. Background Minimal cho Light Mode
- **Bỏ ảnh ngôi sao**: Light mode có background sạch sẽ, minimal
- **Decorative Elements**: Thêm icons code, symbols nhỏ xung quanh
- **Floating Circles**: Các vòng tròn gradient di chuyển nhẹ nhàng
- **Grid Pattern**: Pattern lưới tinh tế ở background

### 3. Snap Scroll
- **Scroll to Section**: Khi scroll sẽ tự động snap đến section tiếp theo
- **Smooth Transition**: Chuyển động mượt mà giữa các sections
- **CSS Scroll Snap**: Sử dụng native CSS scroll-snap

### 4. Featured Projects - Horizontal Layout
- **Carousel Design**: Projects hiển thị theo dạng carousel ngang
- **Navigation**: Nút prev/next và dots indicator
- **Full Description**: Mỗi project có mô tả đầy đủ
- **Split Layout**: Ảnh bên trái, nội dung bên phải
- **Smooth Animations**: Chuyển đổi mượt mà với spring animation

### 5. Animations Cải Tiến
- **Smoother Transitions**: Tất cả transitions đều mượt hơn
- **Hover Effects**: Scale, translate với timing tốt hơn
- **Stagger Animations**: Các elements xuất hiện lần lượt
- **Spring Physics**: Sử dụng spring animation cho carousel

### 6. Background Elements
- **Code Symbols**: </>, { }, <div>, fn(), λ, ∞, ⚡
- **Geometric Shapes**: ★, ◆, ●, ▲, ◉
- **Floating Animation**: Di chuyển lên xuống nhẹ nhàng
- **Opacity Control**: Khác nhau giữa light/dark mode
- **Grid Pattern**: Lưới chấm tinh tế

## Công Nghệ Mới

### Three.js Stack
```bash
npm install three @react-three/fiber @react-three/drei
```

- **three**: Core Three.js library
- **@react-three/fiber**: React renderer cho Three.js
- **@react-three/drei**: Helper components (OrbitControls, Float, etc.)

## Components Mới

### Hero3D.tsx
- Canvas với 3D sphere
- MeshDistortMaterial với distortion effect
- Float animation
- OrbitControls với auto-rotate

### BackgroundElements.tsx
- Decorative icons và symbols
- Floating circles với gradient
- Grid pattern
- Theme-aware opacity

## Cải Tiến UX

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

### Smooth Transitions
- Tất cả transitions: 200ms
- Hover effects: 150ms
- Cubic-bezier easing: (0.4, 0, 0.2, 1)

## Performance

### Optimizations
- Three.js canvas chỉ render khi cần
- Background elements sử dụng CSS transforms
- Lazy loading cho images
- Debounced scroll events

### Bundle Size
- Three.js: ~600KB (gzipped: ~150KB)
- @react-three/fiber: ~100KB (gzipped: ~30KB)
- @react-three/drei: ~200KB (gzipped: ~60KB)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Design

### Breakpoints
- Mobile: < 640px - Stack layout
- Tablet: 641-1024px - Adjusted spacing
- Desktop: 1025px+ - Full layout

### Projects Carousel
- Touch swipe support
- Keyboard navigation
- Responsive image sizes

## Accessibility

- Keyboard navigation cho carousel
- ARIA labels cho buttons
- Focus indicators
- Semantic HTML

## Next Steps

### Để chạy:
```bash
npm install
npm run dev
```

### Để build:
```bash
npm run build
```

## Tùy Chỉnh

### Thay đổi 3D sphere color:
```typescript
// src/components/Hero3D.tsx
<MeshDistortMaterial
  color={theme === 'dark' ? '#667eea' : '#0EA5E9'}
  distort={0.4} // Tăng để distort nhiều hơn
  speed={2} // Tăng để animation nhanh hơn
/>
```

### Thêm background elements:
```typescript
// src/components/BackgroundElements.tsx
const icons = [
  { icon: '💻', top: '10%', left: '5%', delay: 0, size: 'text-3xl' },
  // Thêm icons mới...
];
```

### Điều chỉnh snap scroll:
```css
/* src/index.css */
html {
  scroll-snap-type: y proximity; /* Thay mandatory thành proximity để ít strict hơn */
}
```

## Known Issues

- Three.js có thể lag trên mobile cũ
- Snap scroll có thể conflict với smooth scroll libraries
- Background elements nhiều có thể ảnh hưởng performance

## Solutions

- Disable 3D trên mobile: Check window.innerWidth
- Reduce background elements: Giảm số lượng icons
- Use will-change CSS: Optimize animations
