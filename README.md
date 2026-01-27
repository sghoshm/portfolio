# 🎮 Interactive Portfolio - Sumon Sourabh Ghosh

A modern, interactive, and gaming-inspired portfolio website built with React and Vite. Showcasing professional experience, projects, skills, education, and contact information with beautiful animations and glassmorphism design.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🎮 Gaming-Style Interface** - Interactive cards with 3D hover effects and cubic-bezier animations
- **📱 Responsive Design** - Fully responsive layout that works on all devices
- **🌈 Modern Aesthetics** - Glassmorphism, gradient backgrounds, and smooth animations
- **📑 Multi-Page Navigation** - Seamless navigation between different sections:
  - Home (Dashboard)
  - Experience
  - Projects
  - Skills
  - Education
  - Contact
- **⚡ Quick Stats** - Key metrics displayed at a glance
- **📄 Resume Download** - Built-in resume download functionality
- **🔗 Social Links** - Direct links to phone, email, GitHub, and location
- **🎨 Color-Coded Sections** - Each section has its own color theme
- **✨ Smooth Animations** - Page transitions and hover effects with CSS transforms

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Inline CSS-in-JS (style objects)
- **Icons**: lucide-react
- **JavaScript**: ES6+
- **Package Manager**: npm or yarn

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sghoshm/qa-portfolio.git
   cd qa-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Usage

### Development
```bash
npm run dev
```
Runs the app in development mode with hot module reloading.

### Build for Production
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

## 📁 Project Structure

```
qa-portfolio/
├── public/
│   └── resume.pdf              # Download-able resume
├── src/
│   ├── App.jsx                 # Main component with all pages
│   ├── App.css                 # Styling
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   └── assets/                 # Images and static assets
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🎯 Key Components

### Home Page
- **Quick Stats**: Display key metrics (experience, projects, skills, degree)
- **Interactive Cards**: 5 clickable cards for navigation
- **Professional Summary**: Brief overview of skills and expertise
- **Resume Download**: One-click resume download button

### Experience Page
- Detailed professional experience at TCS
- Duration, location, and responsibilities
- Key achievements and skills used

### Projects Page
- 4 major projects with descriptions
- Technologies and tools used for each project
- Project highlights and outcomes

### Skills Page
- 18+ technical skills organized by category
- Proficiency levels and expertise areas
- Technologies and frameworks

### Education Page
- Educational qualifications
- Degree details and institution information
- Relevant coursework and achievements

### Contact Page
- Direct contact methods (phone, email)
- Social links (GitHub, location)
- Interactive contact cards with hover effects

## 🎨 Design Features

### Glassmorphism
- Translucent backgrounds with blur effects
- `backdrop-filter: blur(10px)`
- Subtle borders with color variations

### Color Scheme
- **Cyan**: #06b6d4 (Primary)
- **Blue**: #3b82f6 (Experience)
- **Purple**: #a855f7 (Skills)
- **Pink**: #ec4899 (Education)
- **Red**: #f43f5e (Contact)

### Animations
- **Card Hover**: Scale (1.1x) + 3D rotation (rotateY)
- **Glowing Effect**: Inset shadows with color-matched glow
- **Smooth Transitions**: Cubic-bezier timing for bouncy feel
- **Page Transitions**: Slide-in animations with opacity

## 🔧 Customization

### Update Personal Information
Edit the contact information in the header:
```jsx
<span style={{ color: "#06b6d4" }}>+919563157811</span>
<a href="mailto:sumon38.sourabh@gmail.com">sumon38.sourabh@gmail.com</a>
<a href="https://github.com/sghoshm">github.com/sghoshm</a>
```

### Modify Content
All content is hardcoded in `src/App.jsx`. Edit the relevant sections for:
- Experience details
- Projects information
- Skills list
- Education details
- Contact methods

### Change Colors
Update the color codes in the card definitions:
```jsx
{ id: "experience", color: "#3b82f6", emoji: "💼" }
```

### Customize Styles
All styles are inline CSS objects. Modify styling by editing the `style={{}}` props throughout the component.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.js`:
   ```js
   export default {
     base: '/qa-portfolio/',
     // ... other config
   }
   ```
2. Build and push to `gh-pages` branch

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📋 Resume Download

Place your resume as `public/resume.pdf`. The download button will automatically link to it.

## 🔗 Social Links

Update the social links in the Contact page:
- Phone: `tel:+919563157811`
- Email: `mailto:sumon38.sourabh@gmail.com`
- GitHub: `https://github.com/sghoshm`
- Location: Update text in Location card

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sumon Sourabh Ghosh**
- **Title**: Assistant System Engineer
- **Email**: sumon38.sourabh@gmail.com
- **Phone**: +919563157811
- **GitHub**: [github.com/sghoshm](https://github.com/sghoshm)
- **Location**: Suri, Birbhum, India

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or suggestions, feel free to reach out:
- 📧 Email: sumon38.sourabh@gmail.com
- 📱 Phone: +919563157811
- 🐙 GitHub: [@sghoshm](https://github.com/sghoshm)

## 🎓 Learning Resources

This project demonstrates:
- React hooks (useState)
- Component-based architecture
- Inline CSS-in-JS styling
- React event handling
- Conditional rendering
- CSS animations and transforms
- Responsive design patterns
- Modern web design principles

## 📚 References

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [lucide-react Icons](https://lucide.dev)
- [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

**Made with ❤️ by Sumon Sourabh Ghosh**

⭐ If you find this project helpful, please consider giving it a star on GitHub!
