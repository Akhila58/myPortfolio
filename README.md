# 🚀 AI/ML Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, designed specifically for AI/ML developers and computer science students.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations and transitions
- **📱 Fully Responsive**: Perfect layout on all devices (mobile, tablet, desktop)
- **⚡ Fast Performance**: Built with Vite for lightning-fast loading times
- **🎯 Project Showcase**: Beautiful display of featured projects with filtering capabilities
- **💼 Professional Sections**: Hero, About, Skills, Experience, Education, Projects, Contact
- **🎨 Theme Support**: Ready for dark/light theme implementation
- **📄 Resume Integration**: Built-in resume viewer functionality
- **🔗 Social Links**: Integrated GitHub, LinkedIn, and email connections
- **🚀 SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 5.4.19** - Next-generation build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible UI components
- **Radix UI** - Low-level UI primitives for accessibility
- **CSS Custom Properties** - For theming and consistency

### Development Tools
- **ESLint 9.32.0** - Code linting and style consistency
- **PostCSS 8.5.6** - CSS processing pipeline
- **Autoprefixer 10.4.21** - Vendor prefix management

### Icons & Assets
- **Lucide React 0.462.0** - Beautiful, consistent icon library
- **Custom SVG animations** - For enhanced visual appeal

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8080](http://localhost:8080)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.ico         # Site favicon
│   ├── resume.pdf          # Your resume file
│   └── robots.txt          # SEO crawler instructions
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (Shadcn)
│   │   ├── Hero.tsx      # Landing hero section
│   │   ├── About.tsx      # About me section
│   │   ├── Skills.tsx     # Technical skills showcase
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Education.tsx  # Academic background
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Footer.tsx     # Page footer
│   │   └── Navigation.tsx # Site navigation
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx # Device detection
│   │   └── use-toast.tsx  # Toast notifications
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Common helpers
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page layout
│   │   └── NotFound.tsx   # 404 error page
│   ├──App.tsx            # Main app component
│   ├──main.tsx           # Application entry point
│   └──index.css          # Global styles
├── .nojekyll             # GitHub Pages configuration
├── components.json      # Shadcn UI configuration
├── tailwind.config.ts   # Tailwind CSS setup
├── vite.config.ts       # Vite build configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Sections Overview

### Hero Section
- **Name & Title**: "AKHILA NAKKA - Computer Science Student, AI/ML & Full-Stack Developer"
- **Professional Summary**: Brief description of your expertise and passion
- **Call-to-Action**: "Get In Touch" and "View Resume" buttons
- **Contact Info**: Direct email display and social media links

### Projects Section
- **Featured Projects**: 
  - Resume Builder (AI-powered with ReactJS + FastAPI)
  - Word Generator (TypeScript + Firebase + LangChain)
  - Text-to-SQL Query Generator (AI + Natural Language Processing)
- **Project Cards**: Each with description, tech stack, and source code links
- **Technologies**: Badges showing used technologies

### Skills Section
- **Technical Skills**: Programming languages, frameworks, and tools
- **Categories**: Organized by skill type (Frontend, Backend, AI/ML, etc.)
- **Proficiency Levels**: Visual indication of expertise

### Experience & Education
- **Work Experience**: Timeline of professional experience
- **Academic Background**: Education history and achievements
- **Responsive Layout**: Adapts to different screen sizes

## 🎯 Customization Guide

### Personal Information

1. **Update Personal Details** in `src/components/Hero.tsx`:
   ```typescript
   // Change name, title, and description
   <h1 className="text-5xl md:text-7xl font-bold mb-6">
     <span className="text-gradient">YOUR NAME</span>
   </h1>
   ```

2. **Update Contact Information**:
   ```typescript
   // Replace with your actual email
   href="mailto:your.email@example.com"
   
   // Update social media links
   onClick={() => window.open('https://github.com/yourusername', '_blank')}
   onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
   ```

### Projects Section

Update `src/components/Projects.tsx` with your actual projects:

```typescript
{
  title: "Your Project Name",
  description: "Brief description of your project...",
  technologies: ["React", "TypeScript", "OtherTechnologies"],
  githubUrl: "https://github.com/yourusername/project-repo",
  liveUrl: "https://your-project-demo.com" // optional
}
```

### Resume

Replace `public/resume.pdf` with your actual resume file.

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Configure Settings** in GitHub repository:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`

2. **Deploy with one command**:
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Vercel**: Connect your GitHub repository for automatic deployment
- **Netlify**: Drag and drop the `dist` folder or connect repository
- **Traditional Hosting**: Build with `npm run build` and upload `dist` folder

## 🎨 Styling & Theming

### Color Customization

Update colors in `tailwind.config.ts`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
      // ... other color customizations
    }
  }
}
```

### Component Styles

- All components use Tailwind CSS classes
- Custom animations defined in component files
- Responsive design with breakpoints (sm:, md:, lg:, xl:)

## 📈 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Optimized Build**: Production builds are minified and optimized
- **Fast Refresh**: Instant development feedback
- **Tree Shaking**: Unused code is eliminated from builds

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Shadcn UI** - For the beautiful UI components
- **Lucide** - For the comprehensive icon library

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

⭐ If this project helps you, please consider giving it a star!
