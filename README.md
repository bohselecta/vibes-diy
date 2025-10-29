# Vibes DIY - Redesign

A stunning redesign of vibes.diy with Apple-inspired glassmorphism, animated WebGL background, and premium typography.

## 🎨 Features

- ✨ **Apple Glassmorphism Design** - Frosted glass effects with backdrop blur
- 🎬 **Animated WebGL Background** - Custom shader-based flowing animation
- 🎯 **Interactive Elements** - Mouse-responsive background effects
- 📱 **Fully Responsive** - Mobile-first design
- 🎭 **Animated Gradient Logo** - Beautiful rotating gradient border
- 💎 **Premium Typography** - SF Pro Display/Text fonts

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
vibes-diy/
├── src/
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── Threads.jsx       # WebGL animated background
│   ├── Threads.css       # Threads component styles
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎯 Key Components

### App.jsx
Main application component featuring:
- Sidebar navigation with glassmorphism
- Header with animated logo
- Hero section with gradient text
- Category pill selection
- Prompt input with glassmorphism effect
- Featured vibes grid

### Threads.jsx
WebGL-powered animated background with:
- Custom GLSL shaders (vertex + fragment)
- Perlin noise-based wave animation
- Mouse interaction (optional)
- GPU-accelerated rendering
- Automatic cleanup on unmount

## 🎨 Customization

### Change Background Color

In `src/App.jsx`:

```jsx
<Threads 
  color={[0.4, 0.49, 0.92]}     // RGB values (0-1)
  amplitude={1.2}                // Wave height
  distance={0.15}                // Line spacing
  enableMouseInteraction={true}  // Mouse effects
/>
```

### Adjust Glassmorphism

In `src/App.css`:

```css
.sidebar {
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
```

### Modify Logo Animation

In `src/App.css`:

```css
.logo-gradient-border {
  background: linear-gradient(45deg, #ff6b9d, #c06c84, #ff8fab, #ff6b9d);
  background-size: 300% 300%;
  animation: gradientRotate 3s ease infinite;
}
```

## 🔧 Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **OGL** - WebGL library
- **GLSL** - Shader programming

## 📦 Build Output

Production build creates an optimized bundle in the `dist/` directory:
- Minified JS/CSS
- Code splitting
- Asset optimization
- Source maps

## 🌐 Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Requirements

- WebGL support
- CSS backdrop-filter
- ES6+ JavaScript

## 🎓 Development Notes

### Hot Module Replacement
Vite automatically watches and hot-reloads:
- All JSX files
- All CSS files
- Asset files

### Performance

The Threads component is optimized for:
- 60fps rendering
- Efficient shader compilation
- Smooth mouse interaction
- Proper cleanup on unmount

### Project Organization

All source files are in the `src/` directory following standard React conventions.

## 📄 License

This is a redesign project for educational/portfolio purposes.

---

Built with ❤️ for a clean, professional, Apple-inspired aesthetic.
