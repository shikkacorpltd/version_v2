# SchoolxNow - Enterprise School Management Solutions

A comprehensive digital transformation platform for educational institutions, built with React, TypeScript, and Tailwind CSS.

## 🎯 Overview

SchoolxNow is a modern, responsive web application showcasing enterprise-grade school management solutions. The platform features a complete suite of educational technology modules designed to streamline operations, enhance academic excellence, and drive institutional growth.

## ✨ Features

### Core Functionality
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Multi-page Application** - Complete website with routing and navigation
- **Blog System** - Dynamic blog with categories, search, and filtering
- **Contact Management** - Advanced contact forms with analytics tracking
- **Dashboard** - Admin dashboard for analytics and content management

### Pages & Sections
- **Home** - Hero section, features, testimonials, and statistics
- **Products** - 37+ solution modules organized by category
- **Services** - Professional services and support tiers
- **About** - Company information, team, and journey
- **Blog** - Educational technology insights and articles
- **Contact** - Multi-location contact information and forms
- **Get Started** - Multi-step onboarding wizard
- **Dashboard** - Analytics and lead management (protected)

### Technical Features
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Modern icon library
- **Analytics Integration** - Google Analytics 4 and Facebook Pixel
- **SEO Optimized** - Meta tags and structured content
- **Performance Optimized** - Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd schoolxnow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Home.jsx         # Homepage component
│   ├── Products.jsx     # Products showcase
│   ├── Services.jsx     # Services information
│   ├── About.jsx        # About page
│   ├── Contact.jsx      # Contact forms
│   ├── BlogList.jsx     # Blog listing
│   ├── BlogPost.jsx     # Individual blog posts
│   ├── GetStarted.jsx   # Onboarding wizard
│   ├── Dashboard.jsx    # Admin dashboard
│   ├── Login.jsx        # Authentication
│   ├── Navbar.jsx       # Navigation
│   └── Footer.jsx       # Footer
├── data/                # Static data
│   └── blogPosts.js     # Blog content
├── lib/                 # Utilities
│   └── utils.ts         # Helper functions
├── App.tsx              # Main application
├── App.css              # Global styles
├── index.css            # Tailwind imports
└── main.tsx             # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: Emerald (600-800)
- **Secondary**: Blue (600-900)
- **Accent**: Teal, Purple, Orange
- **Neutral**: Gray scale (50-900)

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body**: Regular weight, optimized line height
- **UI Text**: Medium weight for emphasis

### Components
- **Buttons**: Multiple variants (default, outline, ghost)
- **Cards**: Consistent shadows and borders
- **Forms**: Focused states and validation
- **Navigation**: Responsive with mobile menu

## 📊 Analytics & Tracking

The application includes comprehensive analytics tracking:

### Google Analytics 4
- Page views and user interactions
- Custom events for lead generation
- Conversion tracking for demo requests

### Facebook Pixel
- User behavior tracking
- Custom audience building
- Conversion optimization

### Custom Events
- Demo scheduling attempts
- Contact form submissions
- Product interest tracking
- Navigation patterns

## 🔐 Authentication

### Demo Credentials
- **Username**: `admin`
- **Password**: `schoolxnow2024`

### Dashboard Features
- Website analytics overview
- Lead management system
- Content management tools
- Performance metrics
- Settings configuration

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- Collapsible navigation menu
- Touch-optimized interactions
- Optimized content layout
- Fast loading on mobile networks

## 🛠 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Style
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (recommended)

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript types
- Follow naming conventions (PascalCase for components)
- Include proper accessibility attributes

## 🌐 Deployment

### Build Process
1. Run `npm run build`
2. Upload `dist` folder to web server
3. Configure server for SPA routing
4. Set up analytics tracking IDs

### Environment Variables
Create `.env` file for production:
```env
VITE_GA_MEASUREMENT_ID=your_ga_id
VITE_FB_PIXEL_ID=your_pixel_id
```

## 📈 Performance

### Optimization Features
- **Code Splitting** - Lazy loading of routes
- **Image Optimization** - Responsive images with proper sizing
- **CSS Optimization** - Purged unused styles
- **Bundle Analysis** - Optimized chunk sizes

### Performance Metrics
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add TypeScript types for new components
- Test responsive design on multiple devices
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and inquiries:
- **Email**: sabbirhossainnde@gmail.com
- **Phone**: +880 1734222467
- **Website**: [schoolxnow.com](https://schoolxnow.com)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vite** - For the fast build tool
- **TypeScript** - For type safety and developer experience

---

**SchoolxNow** - Empowering Educational Excellence Through Technology