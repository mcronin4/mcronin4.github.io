# Michael Cronin - Portfolio Website

A modern, responsive portfolio website showcasing my projects, experience, and skills. Built with Next.js and deployed on GitHub Pages.

🔗 **Live Site**: [mcronin4.github.io](https://mcronin4.github.io)

## 🚀 Features

### 🎨 Modern Design
- Clean, professional dark theme with blue accent colors
- Fully responsive design optimized for all devices
- Smooth animations and transitions using Framer Motion
- Interactive typewriter effect on the homepage

### 📱 Dynamic Content
- **Projects**: Filterable project grid with category and technology filters
- **About**: Interactive tabbed content with hover effects
- **Experience**: Card-based layout showcasing work history
- **Contact**: Professional contact information with social links

### 🛠 Advanced Functionality
- **Smart Filtering**: Filter projects by category (ML, Web, Research, Other) and technology
- **Detailed Project Views**: Individual project pages with comprehensive descriptions
- **Responsive Navigation**: Adaptive navbar with smooth hover effects
- **SEO Optimized**: Proper meta tags and structured data

## 🔧 Tech Stack

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Language**: TypeScript for type safety
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm
- **Version Control**: Git with GitHub

### Deployment
- **Platform**: GitHub Pages
- **Build**: Static export optimized for GitHub Pages
- **Domain**: Custom domain with CNAME configuration

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience/work page
│   ├── projects/          # Projects page and individual project routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── Home/             # Homepage-specific components
│   ├── Layout/           # Layout components (Navbar, etc.)
│   ├── Projects/         # Project-related components
│   └── UI/               # Reusable UI components
├── data/                 # Static data files
│   ├── projects.ts       # Project information
│   ├── experience.ts     # Work experience data
│   ├── personal.ts       # Personal information
│   └── skills.ts         # Skills and technologies
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets (images, PDFs, etc.)
```

## 🎯 Key Components

### Homepage
- **Hero Section**: Dynamic typewriter effect with smooth transitions
- **Featured Projects**: Curated selection of standout projects
- **About Preview**: Quick introduction with call-to-action

### Projects Page
- **Advanced Filtering**: Multi-criteria filtering system
- **Project Cards**: Rich project previews with technology tags
- **Detailed Views**: Comprehensive project pages with full descriptions

### About Page
- **Interactive Tabs**: Dynamic content switching
- **Education & Awards**: Academic achievements and recognition
- **Hobbies**: Visual hobby showcase with images

### Experience Page
- **Modern Cards**: Gradient-enhanced experience cards
- **Skill Tags**: Technology and skill highlighting
- **Professional Timeline**: Work history with detailed descriptions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mcronin4/mcronin4.github.io.git
   cd mcronin4.github.io/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Build and export static files
```

## 📝 Content Management

### Adding Projects
1. Edit `portfolio/data/projects.ts`
2. Add project object with required fields:
   ```typescript
   {
     id: 'unique-project-id',
     title: 'Project Title',
     description: 'Short description',
     longDescription: 'Detailed description...',
     technologies: ['Tech1', 'Tech2'],
     githubUrl: 'https://github.com/...',
     liveUrl: 'https://...',
     imageUrl: '/project-image.jpg',
     category: 'ml' | 'web' | 'research' | 'other',
     featured: true/false,
     year: '2024'
   }
   ```

### Adding Experience
1. Edit `portfolio/data/experience.ts`
2. Follow the existing structure for work entries

### Updating Personal Info
- Edit `portfolio/data/personal.ts` for contact details, education, awards
- Update `portfolio/data/skills.ts` for technical skills

## 🌐 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Build Process**: Next.js static export generates optimized files
2. **GitHub Actions**: Automated deployment pipeline
3. **Custom Domain**: Configured via CNAME file

### Manual Deployment
```bash
npm run build
npm run export
# Files in 'out' directory are ready for deployment
```

## 🎨 Customization

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Themes**: Update CSS variables in `globals.css`
- **Components**: Styled with Tailwind utility classes

### Animations
- **Framer Motion**: Configured in individual components
- **Typewriter Effect**: Custom hook in `hooks/useTypewriter.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Michael Cronin**
- Website: [mcronin4.github.io](https://mcronin4.github.io)
- Email: [20mjc6@queensu.ca](mailto:20mjc6@queensu.ca)
- LinkedIn: [michael-cronin](https://linkedin.com/in/michael-cronin)
- GitHub: [mcronin4](https://github.com/mcronin4)

---

Built with ❤️ using Next.js and TypeScript
