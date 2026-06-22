# Quick Start Guide

## Getting Your Portfolio Ready in 5 Minutes

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Update Your Information

Edit `lib/config.js` with your personal information:
```javascript
export const portfolioConfig = {
  name: 'Your Name',
  email: 'your@email.com',
  phone: '+1 (555) 000-0000',
  // ... more fields
}
```

### Step 3: Update Navbar & Footer

Open `components/Navbar.jsx` and update:
- LinkedIn URL in the LinkedIn icon link
- Your logo/brand name

Open `components/Footer.jsx` and update:
- Social media links
- Company name

### Step 4: Replace Images

Place your images in `/public`:


Or generate new ones using the GenerateImage tool.

### Step 5: Add Your Projects

Edit `app/projects/page.jsx` and `components/sections/LatestWorkSection.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'What this project does',
    image: '/project-image.jpg',
    category: 'Website', // or 'Web App', 'Design'
    tags: ['React', 'Next.js', 'Tailwind'],
    link: 'https://example.com',
    github: 'https://github.com/user/repo',
  },
]
```

### Step 6: Update Home Page Content

- **HeroSection.jsx**: Update hero title and subtitle
- **AboutPreviewSection.jsx**: Update about text
- **ServicesSection.jsx**: Customize your services
- **TestimonialsSection.jsx**: Add real testimonials
- **FAQSection.jsx**: Update FAQs relevant to you

### Step 7: Add Contact Form Integration (Optional)

In `components/ContactForm.jsx`, uncomment and configure your email service:
```javascript
// Example with a backend endpoint
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Step 8: Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Customization Options

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --background: #0f0f0f;      /* Background color */
  --foreground: #ffffff;       /* Text color */
  --accent: #ffffff;           /* Accent color */
  /* Update these to match your brand */
}
```

### Modify Animations

Edit `tailwind.config.ts` to customize:
- Animation duration
- Easing functions
- Stagger timing

### Adjust Typography

Edit `app/layout.tsx` to change fonts from Geist to any Google Font.

### Update Metadata

Edit `app/layout.tsx` metadata object:
```javascript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your description',
  // ... more metadata
}
```

## Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

### Deploy to Other Platforms

1. Build: `pnpm build`
2. Upload the `.next` folder to your hosting
3. Set Node.js version to 16+

## Adding New Pages

To create a new page, e.g., `/blog`:

1. Create `app/blog/page.jsx`
2. Add imports and layout
3. Update navigation in `components/Navbar.jsx`

Example:
```jsx
'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Your content */}
      <Footer />
    </main>
  )
}
```

## Common Tasks

### Add a New Section to Home Page

1. Create file: `components/sections/NewSection.jsx`
2. Import in `app/page.jsx`
3. Add to JSX

### Change Navigation Links

Edit `components/Navbar.jsx` `navLinks` array.

### Update Footer Links

Edit `components/Footer.jsx` to add/remove links.

### Add Form Validation

Install react-hook-form:
```bash
pnpm add react-hook-form
```

Update `ContactForm.jsx` to use it.

## Troubleshooting

**Animations stuttering?**
- Check GPU acceleration in browser DevTools
- Reduce animation complexity on mobile

**Images not loading?**
- Verify paths in `/public` folder
- Use absolute paths starting with `/`

**Build errors?**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `pnpm install`

**Port 3000 already in use?**
```bash
pnpm dev -p 3001
```

## Next Steps

1. Personalize all content
2. Add real projects and images
3. Test on mobile devices
4. Deploy to production
5. Set up analytics (optional)
6. Add email newsletter (optional)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com/docs/)

---

You're all set! Your portfolio is ready to customize and deploy.
