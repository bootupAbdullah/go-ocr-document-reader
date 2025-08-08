# Boilerplate Repo

> All-in-one starter template for new projects: includes basic files, issue templates, Dependabot, and GitHub Actions.

## Features

* 📄 **README & LICENSE**
* 🏷️ **Issue & PR templates**
* 🔒 **CodeQL security analysis** (GitHub Action)
* 🎉 **Greetings** action for first-time contributors
* 📦 **Dependabot** for dependency updates
* ⚙️ **Labeler** for auto-labeling PRs (optional setup)
* ⚙️ **Example CI workflow** (customize as needed)

## Usage

1. Click **Use this template** → create a new repo.
2. Clone your new repo:

   ```bash
   git clone <YOUR_REPO_URL>
   ```
3. Remove or update unused files/folders.
4. Customize workflows in `.github/workflows/` and labeler in `.github/labeler.yml`.
5. Update README, license, and settings.

## Customization

* **Issue Templates**: edit `.github/ISSUE_TEMPLATE/` files.
* **PR Templates**: update `.github/PULL_REQUEST_TEMPLATE.md`.
* **Dependabot**: modify `.github/dependabot.yml`.
* **Workflows**: adjust or add new YAML files under `.github/workflows/`.

## License

This project is licensed under the [MIT License](LICENSE).


# Post-Template Setup Checklist

After creating a new repository from the template, follow these steps to complete the professional setup:

## 1. Repository Settings
- [ ] **Add repository description** (GitHub repo main page → Settings → General)
- [ ] **Set website URL** (if applicable)
- [ ] **Add topics/tags** (e.g., `portfolio`, `react`, `javascript`, `frontend`)


## 2. Branch Protection Setup
**⚠️ Important: This must be done manually for each repository**

1. **Go to repository Settings → Rules**
2. **Click "New branch ruleset"**
3. **Configure basic settings:**
   - Ruleset name: `Main Branch Protection`
   - Enforcement status: `Active`
   - Target branches: `Include default branch`

4. **Enable these rules:**
   - ✅ **Restrict deletions** (prevent accidental deletion)
   - ✅ **Require pull request before merging**
   - ✅ **Require status checks to pass**
   - ✅ **Require branches to be up to date**
   - ✅ **Block force pushes**

5. **Add required status checks:**
   - Click "Add checks"
   - Select your GitHub Actions workflow (usually "build")

6. **Set pull request requirements:**
   - Required approvals: `0` (for solo projects)
   - Dismiss stale reviews: ✅ (if using reviews)

7. **Click "Create" to save**