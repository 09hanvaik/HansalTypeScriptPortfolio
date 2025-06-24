# Hansal CV Site

A modern, responsive personal CV/portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **Tailwind CSS**: Styled with Tailwind CSS for rapid development
- **React**: Modern React with hooks and functional components
- **Vite**: Fast development server and build tool
- **Smooth Scrolling**: Smooth navigation between sections
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Filterable project portfolio
- **Skills Visualization**: Interactive skills section with progress bars

## 📋 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and background
3. **Experience** - Work history with timeline
4. **Skills** - Technical skills with progress indicators
5. **Projects** - Portfolio projects with filtering
6. **Contact** - Contact form and information
7. **Footer** - Additional links and information

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Linting**: ESLint
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hansal-cv-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update personal information and background
- `src/components/Experience.tsx` - Update work experience
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Update portfolio projects
- `src/components/Contact.tsx` - Update contact information

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for custom styles
- Colors and gradients can be customized in the Tailwind config

### Content
- Replace placeholder images with your own
- Update social media links
- Customize the contact form functionality
- Add your own projects and experiences

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and building. Configuration is in `vite.config.ts`.

### TypeScript Configuration
TypeScript is configured in `tsconfig.json` with strict type checking enabled.

### ESLint Configuration
ESLint is configured in `.eslintrc.cjs` for code quality and consistency.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

**Made with ❤️ using React & TypeScript** 