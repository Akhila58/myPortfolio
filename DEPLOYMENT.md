# GitHub Pages Deployment Guide

This guide will help you deploy your React + Vite portfolio to GitHub Pages and resolve the Jekyll-related errors you encountered.

## 🛠️ Problem Solved

The error you encountered:
```
GitHub Pages: github-pages v232 GitHub Pages: jekyll v3.10.0 Theme: jekyll-theme-primer
Error: No such file or directory @ dir_chdir0 - /github/workspace/docs
```

This occurred because GitHub Pages was trying to process your React/Vite project as a Jekyll site. We've fixed this by:

1. ✅ Added `.nojekyll` file to disable Jekyll processing
2. ✅ Updated `vite.config.ts` with proper base path configuration
3. ✅ Added deployment scripts to `package.json`
4. ✅ Installed `gh-pages` package for deployment

## 🚀 Deployment Steps

### Method 1: Using npm scripts (Recommended)

1. **Build and deploy in one command:**
   ```bash
   npm run deploy
   ```

This will:
- Build your project (`npm run build`)
- Deploy the `dist` folder to the `gh-pages` branch
- Push to GitHub

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npx gh-pages -d dist
   ```

## ⚙️ GitHub Pages Configuration

### Step 1: Repository Settings

1. Go to your GitHub repository
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
6. Click **Save**

### Step 2: Wait for Deployment

- GitHub will automatically deploy your site
- Your portfolio will be available at: `https://yourusername.github.io/portfolio/`
- Deployment usually takes 1-2 minutes

## 📁 Project Structure After Deployment

```
your-repo/
├── .nojekyll              # Disables Jekyll processing ✅
├── dist/                  # Built files (deployed to gh-pages branch)
├── public/                # Static assets
├── src/                   # Source code
├── vite.config.ts         # Vite configuration ✅
├── package.json           # Dependencies and scripts ✅
└── DEPLOYMENT.md          # This file
```

## 🔧 Configuration Files Updated

### 1. `.nojekyll` file
This file tells GitHub Pages not to process the site with Jekyll.

### 2. `vite.config.ts`
```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/portfolio/' : '/', // ✅ GitHub Pages base path
  // ... other config
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // ... build optimization
  },
}));
```

### 3. `package.json`
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🌐 Accessing Your Deployed Site

Once deployed, your portfolio will be available at:
```
https://yourusername.github.io/portfolio/
```

## 🔄 Making Updates

To update your deployed site:

1. Make changes to your code
2. Commit and push to your main branch
3. Run the deployment command:
   ```bash
   npm run deploy
   ```

## 🐛 Troubleshooting

### Common Issues:

1. **404 Errors**
   - Make sure the `base` path in `vite.config.ts` matches your repository name
   - Current setting: `'/portfolio/'` (change if your repo name is different)

2. **White Screen/Blank Page**
   - Check browser console for errors
   - Ensure all asset paths are correct
   - Verify the `base` configuration

3. **Styles Not Loading**
   - Make sure CSS files are properly referenced
   - Check the `assetsDir` configuration

4. **GitHub Pages Not Updating**
   - Clear your browser cache
   - Wait a few minutes for GitHub to process the deployment
   - Check the Actions tab for deployment status

### If Issues Persist:

1. **Check GitHub Actions:**
   - Go to your repository's Actions tab
   - Look for the `gh-pages` deployment workflow
   - Check for any error messages

2. **Manual Deployment:**
   ```bash
   npx gh-pages --dist dist --dotfiles true
   ```

3. **Clean Deployment:**
   ```bash
   npx gh-pages --dist dist --dotfiles true --remove ".*"
   ```

## 📋 Checklist Before Deployment

- [ ] All placeholder URLs are replaced with actual links
- [ ] Resume PDF is updated in `public/resume.pdf`
- [ ] Email addresses are updated in Hero and Footer components
- [ ] Social media links are correct
- [ ] Project URLs are updated in Projects component
- [ ] All changes are committed to git
- [ ] `.nojekyll` file is present in the root

## 🎯 Success Indicators

When deployment is successful, you should see:

1. ✅ Green checkmark in GitHub Actions
2. ✅ "Your site is published" message in GitHub Pages settings
3. ✅ Your portfolio loads correctly at the URL
4. ✅ All pages and assets load without errors
5. ✅ No 404 errors in browser console

---

For additional support, check the [gh-pages documentation](https://github.com/tschaub/gh-pages) or [GitHub Pages documentation](https://docs.github.com/en/pages).
