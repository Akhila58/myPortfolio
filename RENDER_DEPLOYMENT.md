# Render Deployment Guide

This guide will help you deploy your React + Vite portfolio to Render.com.

## 🚀 Deployment Options

### Option 1: Using Render Blueprint (Recommended)

The easiest way to deploy is using the `render.yaml` file we've created:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)
2. **Go to Render.com** and sign up/log in
3. **Click "New +"** and select "Blueprint"
4. **Connect your Git repository** that contains your portfolio project
5. **Render will automatically detect** the `render.yaml` file and configure the service
6. **Click "Apply"** to start the deployment

### Option 2: Manual Deployment via Render Dashboard

1. **Push your code to a Git repository**
2. **Go to Render.com** and sign up/log in
3. **Click "New +"** and select "Web Service"
4. **Connect your Git repository**
5. **Configure the service:**
   - **Name**: `portfolio` (or your preferred name)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx vite preview --host 0.0.0.0 --port $PORT`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
6. **Click "Create Web Service"** to start deployment

## ⚙️ Configuration Files

### 1. `render.yaml` (Render Blueprint)
```yaml
services:
  - type: web
    name: portfolio
    runtime: node
    buildCommand: npm install && npm run build
    startCommand: npx vite preview --host 0.0.0.0 --port $PORT
    envVars:
      - key: NODE_ENV
        value: production
    pullRequestPreviewsEnabled: true
```

### 2. `vite.config.ts` (Updated for Render)
```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/' : '/', // ✅ Updated for Render
  // ... rest of configuration
}));
```

## 🌐 Accessing Your Deployed Site

Once deployed, your portfolio will be available at:
```
https://portfolio.onrender.com
```

Or with your custom service name:
```
https://your-service-name.onrender.com
```

## 🔄 Making Updates

To update your deployed site:

1. **Make changes** to your code
2. **Commit and push** to your Git repository
3. **Render will automatically deploy** the changes

You can also **trigger manual deployments** from the Render dashboard.

## 📋 Prerequisites

Before deploying, ensure:

- ✅ All code is pushed to a Git repository
- ✅ `render.yaml` file is in the root directory
- ✅ `vite.config.ts` is updated for Render deployment
- ✅ All dependencies are listed in `package.json`
- ✅ Build works locally: `npm run build`

## 🔧 Environment Variables

You can add custom environment variables in the Render dashboard:

1. Go to your service in Render dashboard
2. Click on "Environment"
3. Add your environment variables
4. Redeploy the service

Common environment variables you might need:
- `VITE_API_URL`: Your backend API URL
- `VITE_GA_TRACKING_ID`: Google Analytics tracking ID
- `VITE_CONTACT_EMAIL`: Your contact email

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check the build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Run `npm install && npm run build` locally to test

2. **Service Won't Start**
   - Check the start command: `npx vite preview --host 0.0.0.0 --port $PORT`
   - Ensure `$PORT` environment variable is set (Render provides this automatically)

3. **White Screen/Blank Page**
   - Check browser console for errors
   - Ensure asset paths are correct (base path should be `/`)
   - Check that all files are in the `dist` folder

4. **Styles Not Loading**
   - Verify CSS files are properly referenced
   - Check the `assetsDir` configuration in `vite.config.ts`

5. **404 Errors on Navigation**
   - This is normal for SPAs - Render will redirect to `index.html`
   - The rewrite rule in `render.yaml` handles this automatically

### Debug Steps:

1. **Check Render Logs:**
   - Go to your service dashboard
   - Click on "Logs" tab
   - Look for error messages during build and runtime

2. **Test Build Locally:**
   ```bash
   npm install
   npm run build
   npx vite preview --host 0.0.0.0 --port 8080
   ```

3. **Check Network Tab:**
   - Open browser developer tools
   - Check Network tab for failed requests
   - Verify all assets are loading correctly

## 📊 Monitoring Your Deployment

Render provides built-in monitoring:

- **Logs**: Real-time application logs
- **Metrics**: CPU, memory, and network usage
- **Deployments**: Deployment history and status
- **Health Checks**: Automatic health monitoring

## 💡 Best Practices

1. **Use Pull Request Previews**
   - Enabled by default in `render.yaml`
   - Test changes before merging to main branch

2. **Set Up Custom Domain**
   - Go to service settings
   - Add your custom domain
   - Update DNS settings

3. **Enable Auto-Deploy**
   - Render automatically deploys on push to main branch
   - You can disable this if needed

4. **Monitor Usage**
   - Keep an eye on resource usage
   - Render provides free tier with limits

## 🎯 Success Indicators

When deployment is successful, you should see:

1. ✅ Green "Live" status in Render dashboard
2. ✅ Build completes without errors
3. ✅ Service starts successfully
4. ✅ Your portfolio loads at the Render URL
5. ✅ All pages and assets load without errors
6. ✅ No 404 errors in browser console

## 📞 Support

If you encounter issues:

- **Render Documentation**: https://render.com/docs
- **Render Status**: https://status.render.com
- **Render Support**: support@render.com

---

For additional help with your portfolio project, check the main `README.md` or `DEPLOYMENT.md` files.
