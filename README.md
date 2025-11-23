# E-Cell RVITM Recruitment Website

This is the official recruitment website for the Entrepreneurship Cell (E-Cell) of RVITM, built with Next.js 15, Tailwind CSS, and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-cell-website.git
   cd e-cell-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📂 Project Structure

```
src/
  app/              # App Router pages
    layout.tsx      # Root layout
    page.tsx        # Home page
    about/          # About page
    teams/          # Teams page
    recruitment/    # Recruitment page
    contact/        # Contact page
  components/       # Reusable components
    ui/             # shadcn/ui primitives
    Navbar.tsx      # Navigation bar
    Footer.tsx      # Footer
    Hero.tsx        # Hero section
    GlassCard.tsx   # Glassmorphism card wrapper
    TeamCard.tsx    # Team display card
    CTAButton.tsx   # Call-to-action button
    SectionWrapper.tsx # Animation wrapper
  lib/              # Utilities (cn helper)
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign up/login.
3. Click "Add New Project" and import your repository.
4. Vercel will automatically detect Next.js. Click "Deploy".

### Manual Build

To build the project for production:

```bash
npm run build
npm start
```

## 📝 Customization

- **Colors**: Update `src/app/globals.css` variables.
- **Content**: Edit the text in individual page files in `src/app/`.
- **Google Form**: Update the `googleFormUrl` in `src/app/recruitment/page.tsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
