# Deployment Guide - GitHub Pages

This guide will help you deploy your Next.js landing page to GitHub Pages for free.

## Prerequisites
- A GitHub account
- Git installed on your machine
- Node.js and npm installed

## Steps to Deploy

### 1. Build the Project Locally (Test)
```bash
# Install dependencies
npm install

# Build the project
npm run build

# The output will be in the 'out' folder
```

### 2. Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it either:
   - `[your-username].github.io` (for your main GitHub Pages site)
   - Any name (will be available at `[your-username].github.io/[repo-name]`)

### 3. Configure for GitHub Pages

#### If deploying to a subdirectory (e.g., username.github.io/landing-page):
Edit `next.config.ts` and uncomment the basePath:
```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name', // Replace with your actual repo name
};
```

### 4. Push Code to GitHub
```bash
# Initialize git (if not already done)
git init

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push to main branch
git push -u origin main
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"

### 6. Deploy
The GitHub Action will automatically run when you push to the main branch. You can also manually trigger it:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

### 7. Access Your Site
After deployment (usually takes 2-5 minutes):
- If repo is named `[username].github.io`: Visit `https://[username].github.io`
- If repo has another name: Visit `https://[username].github.io/[repo-name]`

## Important Notes

### Custom Domain (Optional)
If you have a custom domain:
1. Create a file named `CNAME` in the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages

### Environment Variables
Since this is a static site, environment variables are baked in at build time. Don't include sensitive data.

### Updating the Site
Simply push changes to the main branch:
```bash
git add .
git commit -m "Update site"
git push
```

The GitHub Action will automatically rebuild and deploy.

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### 404 Errors
- If using a subdirectory, ensure `basePath` is configured correctly
- Check that the `out` folder is being generated
- Verify GitHub Pages is enabled in repository settings

### Images Not Loading
- Ensure images are in the `public` folder
- Use relative paths starting with `/`
- If using basePath, images should still use `/` (Next.js handles the prefix)

## Alternative: Deploy with Vercel (Recommended for Next.js)
For better Next.js support and features, consider using Vercel (also free):
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click

Vercel provides:
- Automatic deployments
- Preview deployments for PRs
- Better Next.js feature support
- Custom domains
- Analytics