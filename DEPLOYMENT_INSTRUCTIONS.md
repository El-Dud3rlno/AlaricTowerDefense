# GitHub Pages Deployment Instructions

## Problem
The current deployment URL `https://el-dud3rlno.github.io/AlaricTowerDefense/` returns a 404 error because:
1. The deployment configuration is in this PR branch, not the main branch
2. GitHub Pages may not be enabled in the repository settings

## Solution - Steps to Enable GitHub Pages

### Step 1: Merge this Pull Request
Merge this PR into the `main` branch to apply the deployment configuration.

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/El-Dud3rlno/AlaricTowerDefense`
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - Click **Save**

### Step 3: Verify Deployment
1. After enabling GitHub Pages, the workflow will automatically run
2. Go to the **Actions** tab to monitor the deployment progress
3. Once completed (green checkmark), your game will be live at:
   ```
   https://el-dud3rlno.github.io/AlaricTowerDefense/
   ```

## What This PR Includes

### Files Changed:
- ✅ `Index.html` → `index.html` (renamed to lowercase for proper serving)
- ✅ Removed duplicate `alaricDefense.html`
- ✅ Added `.github/workflows/deploy.yml` (GitHub Actions workflow)
- ✅ Updated `README.md` with deployment info and game details

### Automatic Deployment:
- The workflow will automatically deploy on every push to main branch
- No manual deployment needed after initial setup

## Testing Locally
You can test the game locally by opening `index.html` in any web browser.

## Troubleshooting

If you still see a 404 after following these steps:
1. Check the **Actions** tab for any workflow errors
2. Verify GitHub Pages is set to "GitHub Actions" source
3. Wait 2-3 minutes for DNS propagation
4. Try accessing the URL in an incognito/private window
