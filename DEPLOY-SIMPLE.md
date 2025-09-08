# 🚀 Simple Free Deployment Guide

Let's get your AI Learning Companion live in **10 minutes**! No Docker needed.

## 🎯 Free Hosting Stack
- **Frontend**: Vercel (100% free, unlimited hobby projects)
- **Backend**: Railway (free $5/month credits)
- **Database**: MongoDB Atlas (512MB free forever)

---

## Step 1: MongoDB Atlas Setup (3 minutes)

1. **Sign up**: Go to https://www.mongodb.com/cloud/atlas
2. **Create Cluster**: 
   - Choose "Build a Database" → "FREE" tier
   - Select AWS, region closest to you
   - Name: `ai-learning-cluster`
3. **Create User**:
   - Database Access → Add New Database User
   - Username: `aiuser`
   - Password: Generate a strong password (SAVE THIS!)
4. **Network Access**:
   - Network Access → Add IP Address → "Allow access from anywhere" (0.0.0.0/0)
5. **Get Connection String**:
   - Databases → Connect → "Connect your application"
   - Copy the connection string (starts with `mongodb+srv://`)
   - Replace `<password>` with your actual password

**Your MongoDB URI will look like:**
```
mongodb+srv://aiuser:YOUR_PASSWORD@ai-learning-cluster.abc123.mongodb.net/ai-learning-companion?retryWrites=true&w=majority
```

---

## Step 2: Deploy Backend to Railway (4 minutes)

1. **Sign up**: Go to https://railway.app and sign in with GitHub
2. **Deploy**:
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your `ai-learning-companion` repository
   - Railway will auto-detect it's a Node.js project
3. **Environment Variables**:
   Click on your project → Variables → Add these:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your-mongodb-connection-string-from-step-1
   JWT_SECRET=your-super-secret-jwt-key-make-it-long-and-random
   OPENAI_API_KEY=sk-your-openai-api-key-here
   FRONTEND_URL=https://your-app-name.vercel.app
   ```

4. **Deploy**:
   - Railway will automatically build and deploy
   - Wait for deployment to complete (2-3 minutes)
   - Copy your backend URL (looks like `https://web-production-1234.up.railway.app`)

**⚠️ Important**: Your app might crash initially because you haven't set the OpenAI API key yet. That's okay!

---

## Step 3: Deploy Frontend to Vercel (3 minutes)

1. **Sign up**: Go to https://vercel.com and sign in with GitHub
2. **Import Project**:
   - Click "Add New..." → "Project"
   - Import your `ai-learning-companion` repository
3. **Configure**:
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `frontend`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)
4. **Environment Variables**:
   Before deploying, add:
   ```
   VITE_API_URL=https://your-railway-backend-url/api
   ```
   (Replace with your actual Railway URL from Step 2)

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy (2-3 minutes)
   - You'll get a URL like `https://ai-learning-companion-xyz.vercel.app`

---

## Step 4: Connect Everything (1 minute)

1. **Update Backend CORS**:
   - Go back to Railway → Your Project → Variables
   - Update `FRONTEND_URL` to your actual Vercel URL
   - Railway will automatically redeploy

2. **Test Your App**:
   - Visit your Vercel URL
   - Try the basic functionality
   - Check browser console for any errors

---

## 🔑 Get Your OpenAI API Key

To enable AI features:

1. Go to https://platform.openai.com/api-keys
2. Sign up/Sign in
3. Create a new API key
4. Add it to your Railway environment variables as `OPENAI_API_KEY`

**Cost**: OpenAI charges pay-as-you-go (very cheap for testing - ~$0.01 per conversation)

---

## 🎉 You're Live!

Your app is now live at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.up.railway.app`
- **Health Check**: `https://your-app.up.railway.app/health`

---

## 🔧 Quick Troubleshooting

### Frontend shows "Network Error"
- Check if `VITE_API_URL` environment variable is set correctly in Vercel
- Verify your Railway backend is running

### Backend crashes on Railway
- Check if all environment variables are set
- Look at logs in Railway dashboard
- Ensure MongoDB connection string is correct

### CORS Errors
- Make sure `FRONTEND_URL` in Railway matches your Vercel URL exactly
- Include `https://` in the URL

---

## 💡 Pro Tips

1. **Automatic Deployments**: Both Vercel and Railway will redeploy automatically when you push to GitHub
2. **Custom Domain**: Both platforms allow free custom domains
3. **Monitoring**: Use Railway dashboard to monitor backend performance
4. **Logs**: Check Railway logs for backend issues, Vercel function logs for frontend issues

---

## 🎯 What's Next?

Once your app is live:
1. Test document upload and AI features
2. Share with friends for feedback
3. Monitor usage in Railway and Vercel dashboards
4. Scale up when needed (Railway Pro starts at $20/month)

**Your AI Learning Companion is now globally accessible! 🌍✨**
