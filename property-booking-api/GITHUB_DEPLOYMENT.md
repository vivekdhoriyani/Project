# 📤 GitHub Deployment Guide

Complete guide to push your Property Booking API to GitHub.

## 🚀 Quick Start (5 Minutes)

### Step 1: Initialize Git (if not already done)
```bash
cd property-booking-api
git init
```

### Step 2: Create .gitignore (IMPORTANT!)
Already created in your project. Verify it contains:
```
node_modules/
.env
.DS_Store
*.log
```

### Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click "+" → "New repository"
3. Repository name: `property-booking-api`
4. Description: "RESTful API for property booking system"
5. Choose: **Public** or **Private**
6. **DON'T** initialize with README (we already have one)
7. Click "Create repository"

### Step 4: Push to GitHub
```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Property Booking API"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/property-booking-api.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**✅ Done! Your code is on GitHub!**

---

## 📋 Detailed Steps

### Before Pushing - Security Checklist

✅ **Verify .gitignore includes:**
```
node_modules/
.env
.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

✅ **Check .env is NOT tracked:**
```bash
git status
# .env should NOT appear in the list
```

✅ **Verify .env.example exists:**
```bash
# Should contain template without real credentials
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/property-booking?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

### Git Commands Explained

```bash
# 1. Initialize Git repository
git init

# 2. Check what will be committed
git status

# 3. Add all files to staging
git add .

# 4. Commit with message
git commit -m "Initial commit: Property Booking API"

# 5. Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/property-booking-api.git

# 6. Rename branch to main
git branch -M main

# 7. Push to GitHub
git push -u origin main
```

### If You Get Errors

**Error: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/property-booking-api.git
```

**Error: "failed to push"**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**Error: "Permission denied"**
```bash
# Use personal access token instead of password
# Generate at: GitHub → Settings → Developer settings → Personal access tokens
```

---

## 🔐 Security Best Practices

### 1. Never Commit Sensitive Data

**❌ NEVER commit:**
- `.env` file
- Database passwords
- API keys
- JWT secrets
- Private keys

**✅ ALWAYS commit:**
- `.env.example` (template)
- `.gitignore`
- Documentation

### 2. Check Before Pushing
```bash
# See what will be pushed
git diff --cached

# Check for sensitive data
git log --all --full-history -- .env
```

### 3. If You Accidentally Committed .env

**Remove from Git history:**
```bash
# Remove file from Git
git rm --cached .env

# Commit the removal
git commit -m "Remove .env from tracking"

# Push changes
git push origin main
```

**⚠️ Important:** Change all passwords/secrets that were exposed!

---

## 📝 Repository Setup

### Add Description
1. Go to your GitHub repository
2. Click "⚙️ Settings"
3. Add description: "RESTful API for property booking with JWT auth, MongoDB Atlas, and EJS templates"
4. Add topics: `nodejs`, `express`, `mongodb`, `jwt`, `rest-api`, `booking-system`

### Add README Badges (Optional)
Add to top of README.md:
```markdown
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![License](https://img.shields.io/badge/License-MIT-blue)
```

### Create Releases
1. Go to "Releases" → "Create a new release"
2. Tag: `v1.0.0`
3. Title: "Initial Release"
4. Description: List features
5. Click "Publish release"

---

## 🌿 Branching Strategy

### Create Development Branch
```bash
# Create and switch to dev branch
git checkout -b development

# Push to GitHub
git push -u origin development
```

### Feature Branch Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push -u origin feature/new-feature

# Create Pull Request on GitHub
# Merge to development → then to main
```

---

## 👥 Collaboration

### Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/property-booking-api.git
cd property-booking-api
npm install
```

### Setup for New Developer
```bash
# 1. Clone repo
git clone https://github.com/YOUR_USERNAME/property-booking-api.git

# 2. Install dependencies
npm install

# 3. Create .env file (copy from .env.example)
cp .env.example .env

# 4. Add MongoDB Atlas credentials to .env

# 5. Run the app
npm start
```

---

## 📊 GitHub Features to Use

### 1. Issues
- Track bugs
- Feature requests
- To-do items

### 2. Projects
- Kanban board
- Track progress
- Organize tasks

### 3. Wiki
- Extended documentation
- API guides
- Tutorials

### 4. Actions (CI/CD)
- Automated testing
- Deployment
- Code quality checks

---

## 🔄 Regular Updates

### Daily Workflow
```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ... code ...

# Stage and commit
git add .
git commit -m "Add feature description"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request on GitHub
```

### Commit Message Guidelines
```bash
# Good commit messages
git commit -m "Add user authentication endpoint"
git commit -m "Fix booking date validation bug"
git commit -m "Update README with setup instructions"

# Bad commit messages
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

---

## 📦 Package.json Scripts

Add useful scripts:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"No tests yet\"",
    "setup": "npm install && cp .env.example .env"
  }
}
```

---

## 🚀 Deployment Platforms

### Heroku
```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create property-booking-api

# Set environment variables
heroku config:set MONGODB_URI=your_atlas_uri
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

---

## ✅ Final Checklist

Before pushing to GitHub:

- [ ] `.gitignore` includes `node_modules/` and `.env`
- [ ] `.env.example` exists with template
- [ ] Real `.env` is NOT tracked by Git
- [ ] `README.md` is complete and updated
- [ ] All sensitive data removed from code
- [ ] Code is tested and working
- [ ] MongoDB Atlas connection string in `.env`
- [ ] Documentation files included
- [ ] Package.json has correct information

---

## 📞 Need Help?

**Git Issues:**
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/

**GitHub Support:**
- https://support.github.com/

---

## 🎉 Congratulations!

Your Property Booking API is now on GitHub! 🚀

**Next Steps:**
1. ⭐ Star your own repo
2. 📝 Add detailed documentation
3. 🐛 Create issues for future features
4. 👥 Invite collaborators
5. 🚀 Deploy to production

---

**Repository URL Format:**
```
https://github.com/YOUR_USERNAME/property-booking-api
```

**Clone URL:**
```
git clone https://github.com/YOUR_USERNAME/property-booking-api.git
```

**✅ Your code is now safely stored and version controlled!**
