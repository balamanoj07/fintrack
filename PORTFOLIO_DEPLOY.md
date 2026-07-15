# Deploy Your Portfolio to GitHub Pages

## Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all portfolio files
git add portfolio.html css/portfolio.css js/portfolio.js

# Commit
git commit -m "Add professional portfolio website"

# Create a new repository on GitHub (e.g., "portfolio")
# Then link and push:
git remote add origin https://github.com/balamanoj07/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://balamanoj07.github.io/portfolio/portfolio.html`

**Note:** Rename `portfolio.html` to `index.html` for a cleaner URL:
```bash
git mv portfolio.html index.html
git commit -m "Rename portfolio.html to index.html"
git push
```
Then access at: `https://balamanoj07.github.io/portfolio/`

---

## Alternative: Netlify (Even Easier!)

### Option A: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag the entire `finance-tracker` folder to Netlify
4. Get instant URL like: `https://manoj-portfolio.netlify.app`

### Option B: CLI Deploy
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd d:\MANOJ\sumint\finance-tracker
netlify deploy --prod
```

---

## Alternative: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd d:\MANOJ\sumint\finance-tracker
vercel --prod
```

Your live URL: `https://your-portfolio.vercel.app`

---

## Alternative: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Deploy with one click
4. Get URL: `https://portfolio.pages.dev`

---

## Quick Local Preview

To view locally right now:
1. Open File Explorer
2. Navigate to: `d:\MANOJ\sumint\finance-tracker\`
3. Double-click `portfolio.html`

Or using VS Code Live Server:
1. Install "Live Server" extension
2. Right-click `portfolio.html`
3. Select "Open with Live Server"

---

## Recommended Action

**For the cleanest URL, I recommend:**

1. Rename `portfolio.html` to `index.html`
2. Push to GitHub
3. Enable GitHub Pages
4. Get: `https://balamanoj07.github.io/portfolio/`

This is free, reliable, and perfect for portfolios!
