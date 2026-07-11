# 🚀 Deployment Guide

## Push to GitHub

### Option 1: Using GitHub Web Interface (Easiest)

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `fintrack` (or any name you prefer)
   - Description: "Modern personal finance tracker with privacy-first approach"
   - Keep it **Public** or **Private** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your local repository:**
   ```powershell
   cd finance-tracker
   git remote add origin https://github.com/YOUR_USERNAME/fintrack.git
   git branch -M main
   git push -u origin main
   ```

3. **Done!** Your repo is now on GitHub 🎉

### Option 2: Using GitHub CLI

If you install GitHub CLI (`gh`), you can do it in one command:

```powershell
cd finance-tracker
gh repo create fintrack --public --source=. --remote=origin --push
```

---

## Deploy to GitHub Pages (Free Hosting)

Since this is a static site, you can host it for free on GitHub Pages!

### Steps:

1. **Push to GitHub** (follow steps above)

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

3. **Wait 1-2 minutes**, then visit:
   ```
   https://YOUR_USERNAME.github.io/fintrack/
   ```

4. **Your app is live!** 🌐

### Custom Domain (Optional)

If you own a domain:
1. Add a `CNAME` file in your repo with your domain
2. Configure DNS settings with your domain provider
3. GitHub will handle SSL automatically

---

## Deploy to Netlify (Alternative)

Netlify offers drag-and-drop deployment:

1. **Go to** https://app.netlify.com/drop
2. **Drag the `finance-tracker` folder** onto the page
3. **Done!** You'll get a live URL immediately

### Or connect to Git:

1. Sign in to Netlify
2. Click "New site from Git"
3. Connect your GitHub repo
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
5. Click "Deploy site"

---

## Deploy to Vercel (Alternative)

1. **Go to** https://vercel.com/new
2. **Import your GitHub repo**
3. Configure:
   - Framework Preset: Other
   - Root Directory: `.`
   - Build command: (leave empty)
   - Output directory: (leave empty)
4. Click "Deploy"

---

## Local Development Server

### Python (Built-in)
```powershell
cd finance-tracker
python -m http.server 8000
```
Visit: http://localhost:8000

### Node.js (if installed)
```powershell
cd finance-tracker
npx serve
```

### VS Code (Live Server Extension)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## Environment Variables

This app doesn't need any environment variables since it's 100% client-side!

---

## Browser Compatibility

Ensure your hosting serves:
- Correct MIME types for `.js` and `.css`
- HTTPS (automatic with GitHub Pages, Netlify, Vercel)

---

## Updating Your Deployment

After making changes:

```powershell
cd finance-tracker
git add .
git commit -m "Your update message"
git push
```

If using GitHub Pages/Netlify/Vercel, they'll auto-deploy your changes!

---

## Troubleshooting

### Issue: 404 on GitHub Pages
- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled in settings
- Wait 2-3 minutes for initial deployment

### Issue: Styles not loading
- Check browser console for errors
- Verify CSS file paths are relative (not absolute)
- Clear browser cache (Ctrl+Shift+R)

### Issue: Data not persisting
- localStorage works on HTTPS and localhost
- Some browsers block localStorage in private/incognito mode
- Data is domain-specific (won't transfer between domains)

---

## Security Note

This is a client-side demo app. For production:
- Implement proper backend authentication
- Use secure password hashing (bcrypt, not base64)
- Consider server-side data storage with encryption
- Add input sanitization and validation

---

**Ready to deploy? Follow the steps above and your FinTrack app will be live!** 🚀
