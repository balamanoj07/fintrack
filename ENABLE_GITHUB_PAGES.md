# 🌐 How to Enable GitHub Pages - Step by Step

## 📋 Prerequisites
✅ You have a GitHub account  
✅ Your repository `balamanoj07/fintrack` is created  
✅ Code is pushed to GitHub  

---

## 🎯 Step-by-Step Instructions

### **Step 1: Go to Your Repository**

Open this link in your browser:
```
https://github.com/balamanoj07/fintrack
```

You should see your repository with all the files.

---

### **Step 2: Click on "Settings"**

Look at the top menu bar of your repository page.

You'll see tabs like:
```
< > Code    Issues    Pull requests    Actions    Projects    Wiki    Settings
```

**Click on "Settings"** (the last tab with a ⚙️ gear icon)

⚠️ **Note:** If you don't see "Settings", you might not be logged in or don't have permission.

---

### **Step 3: Navigate to "Pages"**

On the Settings page, look at the **left sidebar**.

Scroll down until you find **"Pages"** (it's usually near the bottom).

The sidebar looks like:
```
General
Access
Collaborators and teams
Actions
Webhooks
Environments
Codespaces
↓ (scroll down)
Pages          ← Click this one!
```

**Click on "Pages"**

---

### **Step 4: Configure GitHub Pages**

You'll now see the GitHub Pages configuration screen.

#### Section: "Build and deployment"

1. **Source**
   - Click the dropdown that says "None" or "Deploy from a branch"
   - **Select:** "Deploy from a branch"

2. **Branch**
   - First dropdown: **Select "main"**
   - Second dropdown: **Select "/ (root)"**
   
3. **Click the "Save" button**

Your configuration should look like:
```
Source: Deploy from a branch
Branch: main    / (root)    [Save]
```

---

### **Step 5: Wait for Deployment**

After clicking Save:

1. **A message appears at the top:**
   ```
   GitHub Pages source saved
   ```

2. **Scroll back to the top of the Pages settings**
   
3. You'll see a message like:
   ```
   🔵 Your site is ready to be published at https://balamanoj07.github.io/fintrack/
   ```

4. **Wait 1-2 minutes** for the first deployment

5. **Refresh the page** (F5 or Ctrl+R)

6. The message changes to:
   ```
   ✅ Your site is live at https://balamanoj07.github.io/fintrack/
   ```

---

### **Step 6: Visit Your Live Site!**

Click on the URL or open in a new tab:
```
https://balamanoj07.github.io/fintrack/
```

**🎉 Your app is now live!**

---

## 🔍 Alternative: Direct Link Method

If you want to skip navigation, use this **direct link**:

### 👉 https://github.com/balamanoj07/fintrack/settings/pages

This takes you directly to the Pages settings!

---

## ✅ How to Verify It Worked

### Method 1: Check the URL
Visit: https://balamanoj07.github.io/fintrack/

You should see your FinTrack landing page.

### Method 2: Check Deployments
Go to: https://github.com/balamanoj07/fintrack/deployments

You should see "github-pages" with a green checkmark.

### Method 3: Check Actions
Go to: https://github.com/balamanoj07/fintrack/actions

You should see "pages build and deployment" workflow completed.

---

## 🐛 Troubleshooting

### Problem: I don't see "Settings" tab
**Solution:** Make sure you're logged into GitHub and viewing your own repository.

### Problem: "Deploy from a branch" is disabled
**Solution:** 
1. Go to Settings → Actions → General
2. Under "Actions permissions", enable "Allow all actions"
3. Go back to Pages and try again

### Problem: It says "404 - Page not found"
**Solutions:**
1. Wait 5 minutes (first deployment is slow)
2. Check that branch is "main" (not "master")
3. Make sure `index.html` exists in root directory
4. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Problem: Blank white page
**Solution:**
1. Right-click → Inspect Element
2. Check Console tab for errors
3. If you see 404 errors for CSS/JS, check file paths
4. All paths should be relative (e.g., `css/styles.css` not `/css/styles.css`)

---

## 📸 Visual Guide (What You Should See)

### On Settings Page:
```
┌─────────────────────────────────────────┐
│  GitHub Pages                            │
├─────────────────────────────────────────┤
│  Build and deployment                    │
│                                          │
│  Source                                  │
│  ┌───────────────────────────────────┐  │
│  │ Deploy from a branch          ▼  │  │
│  └───────────────────────────────────┘  │
│                                          │
│  Branch                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────┐  │
│  │  main ▼ │  │ / (root) ▼│  │ Save │  │
│  └──────────┘  └──────────┘  └──────┘  │
└─────────────────────────────────────────┘
```

### After Saving:
```
┌─────────────────────────────────────────┐
│  ✅ Your site is live at                │
│  https://balamanoj07.github.io/fintrack/│
│  [Visit site]                            │
└─────────────────────────────────────────┘
```

---

## 🚀 Quick Summary

1. Go to: https://github.com/balamanoj07/fintrack/settings/pages
2. Source: "Deploy from a branch"
3. Branch: "main" + "/ (root)"
4. Click "Save"
5. Wait 2 minutes
6. Visit: https://balamanoj07.github.io/fintrack/

---

## 🎉 That's It!

Your FinTrack app will be:
- ✅ Live and accessible worldwide
- ✅ Served over HTTPS (secure)
- ✅ Fast and reliable
- ✅ Free forever
- ✅ Auto-updates on every push

---

## 📱 Share Your App

Once live, share this URL with anyone:
```
https://balamanoj07.github.io/fintrack/
```

They can:
- Create their own account
- Track their finances
- All data stays in their browser (private)

---

**Need help? Let me know which step you're stuck on!** 🤝
