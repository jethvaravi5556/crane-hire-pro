# CraneHirePro - Professional Crane Rental Website

A modern, responsive website for a crane rental company built with React, Vite, and Tailwind CSS. Features beautiful animations, interactive components, and a professional design.

![CraneHirePro Screenshot](https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80)

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Components**: Hover effects, scroll animations, and interactive UI elements
- **Contact Form**: Working contact form with validation using React Hook Form and Yup
- **Real Images**: High-quality images from Unsplash for better visual appeal
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form + Yup validation
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

\`\`\`
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ServiceCard.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/cranehirepro-website.git
   cd cranehirepro-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📱 Pages

- **Home**: Hero section, testimonials, and FAQ
- **Services**: Detailed crane types and specifications
- **About**: Company information, team, and values
- **Contact**: Contact form and company details

## 🎨 Customization

### Colors

The website uses a blue and purple gradient theme. You can customize colors in `tailwind.config.js`:

\`\`\`js
colors: {
  primary: {
    500: "#3b82f6", // Blue
    600: "#2563eb",
    700: "#1d4ed8",
  }
}
\`\`\`

### Content

Update the content in the respective page components:
- Company information: `src/pages/About.jsx`
- Services: `src/pages/Services.jsx`
- Contact details: `src/pages/Contact.jsx`

### Images

Replace placeholder images with your own:
- Update Unsplash URLs in components
- Add your own images to the `public` folder

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `react-hook-form` - Form handling
- `@hookform/resolvers` - Form validation resolvers
- `yup` - Schema validation
- `react-hot-toast` - Toast notifications
- `lucide-react` - Icon library

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `autoprefixer` - CSS autoprefixer
- `eslint` - JavaScript linter
- `postcss` - CSS processor
- `tailwindcss` - Utility-first CSS framework
- `vite` - Build tool

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   \`\`\`json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   \`\`\`
3. Run: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact:

- **Email**: support@cranehirepro.com
- **Website**: [www.cranehirepro.com](https://www.cranehirepro.com)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for high-quality images
- [Lucide](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

**Built by ❤️ for Ravi**
