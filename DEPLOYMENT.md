# 🚀 Deployment Guide

This guide will help you deploy the AI Learning Companion for **FREE** using the best available platforms.

## Free Deployment Stack

### 🌐 Frontend: Vercel (Free Tier)
- ✅ **Cost**: 100% Free
- ✅ **Features**: Automatic deployments, Global CDN, HTTPS
- ✅ **Limits**: 100GB bandwidth/month, 1000 builds/month

### 🖥️ Backend: Railway (Free Tier)
- ✅ **Cost**: Free for $5/month usage
- ✅ **Features**: Automatic deployments, Custom domains, Logs
- ✅ **Limits**: $5 usage per month, 500MB memory

### 🗄️ Database: MongoDB Atlas (Free Tier)
- ✅ **Cost**: 100% Free
- ✅ **Features**: 512MB storage, Shared clusters
- ✅ **Limits**: 512MB storage, 100 connections

## Step-by-Step Deployment

### 1. Set up MongoDB Atlas (Database)

1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create a new cluster** (choose AWS, Free tier)
3. **Create a database user**:
   - Go to Database Access → Add New Database User
   - Choose "Password" authentication
   - Username: `ailearning` (or your choice)
   - Generate a secure password and **save it**
4. **Whitelist your IP**:
   - Go to Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0) for simplicity
5. **Get your connection string**:
   - Go to Databases → Connect → Connect your application
   - Copy the connection string (looks like `mongodb+srv://...`)

### 2. Deploy Backend to Railway

1. **Sign up** at [Railway](https://railway.app) with your GitHub account
2. **Create a new project** → Deploy from GitHub repo
3. **Select** your `ai-learning-companion` repository
4. **Choose** the backend service (Railway will auto-detect Node.js)
5. **Add environment variables**:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-super-secret-jwt-key-at-least-32-characters
   OPENAI_API_KEY=your-openai-api-key
   FRONTEND_URL=https://your-app-name.vercel.app
   ```
6. **Deploy** - Railway will automatically build and deploy
7. **Get your backend URL** - something like `https://your-app-name.up.railway.app`

### 3. Deploy Frontend to Vercel

1. **Sign up** at [Vercel](https://vercel.com) with your GitHub account
2. **Import project** from GitHub
3. **Select** your `ai-learning-companion` repository
4. **Configure project**:
   - Framework Preset: **Vite**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Add environment variables**:
   ```
   VITE_API_URL=https://your-backend-url.up.railway.app/api
   ```
6. **Deploy** - Vercel will build and deploy automatically
7. **Get your frontend URL** - something like `https://your-app-name.vercel.app`

### 4. Update Configuration

1. **Update backend CORS** in your Railway environment variables:
   ```
   FRONTEND_URL=https://your-actual-frontend-url.vercel.app
   ```

2. **Update Vercel proxy configuration** (if needed):
   - Edit `frontend/vercel.json` and replace `your-backend-url` with your actual Railway URL

## Quick Setup Commands

Run these commands to push your deployment configuration:

```bash
# Add deployment files
git add .
git commit -m "Add deployment configuration files"
git push origin main
```

## Environment Variables Summary

### Backend (Railway)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-learning-companion?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
OPENAI_API_KEY=sk-your-openai-api-key-here
FRONTEND_URL=https://your-app-name.vercel.app
```

### Frontend (Vercel)
```env
VITE_API_URL=https://your-backend-app.up.railway.app/api
```

## Testing Your Deployment

1. **Backend Health Check**: Visit `https://your-backend-url.up.railway.app/health`
2. **Frontend**: Visit `https://your-app-name.vercel.app`
3. **Full Flow**: Try uploading a document and chatting with AI

## Free Tier Limitations

### Railway (Backend)
- **$5/month** free usage credits
- **500MB** memory per service
- **1GB** disk space
- **10GB** network bandwidth

### Vercel (Frontend)
- **100GB** bandwidth per month
- **1000** build executions per month
- **100** serverless functions invocations per day

### MongoDB Atlas (Database)
- **512MB** storage
- **100** connections max
- **Shared** cluster (slower performance)

## Scaling Options

When you're ready to scale beyond free tiers:

1. **Railway Pro**: $20/month for higher limits
2. **Vercel Pro**: $20/month for more bandwidth
3. **MongoDB Atlas**: Dedicated clusters starting $57/month
4. **Alternative**: DigitalOcean App Platform ($5-12/month)

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure FRONTEND_URL in backend matches your Vercel URL exactly
2. **Database Connection**: Verify MongoDB connection string and IP whitelist
3. **Build Failures**: Check that all dependencies are in package.json
4. **API Errors**: Verify environment variables are set correctly

### Debug Commands:
```bash
# Test backend locally
npm run dev:backend

# Test frontend locally
npm run dev:frontend

# Check backend logs in Railway dashboard
# Check build logs in Vercel dashboard
```

## Need Help?

- **Railway Docs**: https://docs.railway.app/
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/

Your AI Learning Companion will be live and accessible globally! 🌍✨
