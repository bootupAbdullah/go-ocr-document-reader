# Contributing to ProSeries Document Processor

Thank you for your interest in contributing to the ProSeries Document Processor! This document provides guidelines and instructions for contributing to the project.

## 🎯 Project Overview

This project aims to automate tax document data entry for accounting firms using OCR technology. We're building a full-stack application that processes scanned tax documents and formats the data for ProSeries import.

## 📋 Table of Contents

- [Development Setup](#development-setup)
- [Code Standards](#code-standards)
- [Contributing Workflow](#contributing-workflow)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## 🛠️ Development Setup

### Prerequisites

- **Go** (1.19 or later)
- **Node.js** (16 or later) and **npm**
- **Homebrew** (macOS users)
- **Git** for version control

### System Dependencies

```bash
# Install OCR dependencies (macOS)
brew install tesseract leptonica

# Verify installations
tesseract --version
which tesseract
```

### Local Development

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/proseries-document-processor.git
   cd proseries-document-processor
   ```

2. **Set up backend**
   ```bash
   cd backend
   go mod tidy
   ```

3. **Set up frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Run the application**
   ```bash
   # Terminal 1: Backend
   cd backend
   make run

   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

## 📝 Code Standards

### Go Backend Standards

- **File Structure**: Follow Go project layout standards
- **Naming Conventions**: Use camelCase for variables, PascalCase for exported functions
- **Error Handling**: Always handle errors explicitly
- **Comments**: Use godoc-style comments for exported functions

```go
// ProcessDocument handles OCR processing for uploaded documents
func ProcessDocument(c *gin.Context) {
    // Implementation
}
```

### Frontend Standards

- **File Structure**: Components in `src/components/`, styles in separate CSS files
- **Naming Conventions**: Use PascalCase for components, kebab-case for CSS classes
- **CSS Methodology**: Use semantic class names and avoid inline styles
- **JavaScript**: Use modern ES6+ syntax, prefer const/let over var

```jsx
// Component example
const FileUpload = () => {
    // Implementation
};

export default FileUpload;
```

### CSS Standards

```css
/* Use semantic, component-scoped class names */
.file-upload-container {
    /* styles */
}

.file-upload-button {
    /* styles */
}
```

## 🔄 Contributing Workflow

### 1. Choose an Issue

- Look for issues labeled `good first issue` for newcomers
- Check existing issues before creating new ones
- Comment on issues you'd like to work on

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 3. Make Changes

- Write clean, readable code following our standards
- Test your changes locally
- Update documentation if necessary

### 4. Commit Changes

Use conventional commit messages:

```bash
git commit -m "feat: add file validation for tax documents"
git commit -m "fix: resolve CGO compilation issue on Apple Silicon"
git commit -m "docs: update installation instructions"
```

**Commit Types:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### 5. Push and Create PR

```bash
git push origin your-branch-name
```

Then create a Pull Request through GitHub.

## 🐛 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check the troubleshooting section** in README.md
3. **Verify the issue** with the latest code

### When Creating an Issue

**Bug Reports should include:**
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Go version, Node version)
- Console logs or error messages

**Feature Requests should include:**
- Clear description of the proposed feature
- Use case and business value
- Potential implementation approach
- Any related issues or PRs

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements to documentation
- `backend` - Go server related
- `frontend` - React application related

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows project standards
- [ ] All tests pass locally
- [ ] Documentation updated if necessary
- [ ] Commit messages follow conventional format
- [ ] Branch is up to date with main

### PR Requirements

1. **Clear Title**: Descriptive title following conventional commits
2. **Description**: Explain what changes were made and why
3. **Testing**: Describe how you tested the changes
4. **Screenshots**: Include for UI changes
5. **Checklist**: Complete the PR template checklist

### Review Process

1. **Automated Checks**: All CI checks must pass
2. **Code Review**: At least one maintainer approval required
3. **Testing**: Verify changes work as intended
4. **Documentation**: Ensure docs are updated if needed

## 🧪 Testing Guidelines

### Backend Testing

```bash
# Run Go tests
cd backend
go test ./...

# Run specific test
go test ./handlers
```

### Frontend Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run with coverage
npm run test:coverage
```

### Manual Testing

1. **File Upload**: Test with various file types (PDF, JPG, PNG)
2. **Error Handling**: Test with invalid files, network issues
3. **UI Responsiveness**: Test on different screen sizes
4. **API Integration**: Verify frontend-backend communication

## 📚 Documentation

### Code Documentation

- **Go**: Use godoc-style comments for exported functions
- **JavaScript**: Use JSDoc for complex functions
- **README**: Keep installation and usage instructions current

### Documentation Updates

When contributing, update relevant documentation:
- **README.md** - For new features or setup changes
- **CONTRIBUTING.md** - For process or guideline changes
- **Code comments** - For complex logic or algorithms

## 🎯 Development Priorities

### Current Focus Areas

1. **OCR Processing**: Implement actual text extraction from documents
2. **Data Parsing**: Structure extracted text into tax form fields
3. **ProSeries Integration**: Generate compatible export formats
4. **Error Handling**: Improve user feedback and error recovery

### Future Enhancements

1. **AWS Integration**: Upgrade to AWS Textract for better accuracy
2. **Batch Processing**: Handle multiple documents simultaneously
3. **Field Validation**: Verify extracted data accuracy
4. **Performance Optimization**: Improve processing speed

## 💬 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and general discussion
- **Code Review**: Maintainers provide feedback on PRs

## 🏆 Recognition

Contributors will be acknowledged in:
- **README.md** contributors section
- **GitHub contributors** page
- **Release notes** for significant contributions

Thank you for helping improve the ProSeries Document Processor! 🎉