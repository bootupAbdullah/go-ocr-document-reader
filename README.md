# ProSeries Document Processor

A web application that uses OCR (Optical Character Recognition) to extract data from scanned tax documents (W-2s, 1099s) and formats it for import into ProSeries tax software.

## 🎯 Project Goal

Automate the manual data entry process for accounting firms by:
- Extracting text from scanned tax documents using OCR
- Structuring the data for easy import into ProSeries tax software
- Reducing processing time from hours to minutes
- Eliminating human error in data transcription

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React with Vite (JavaScript)
- **Backend**: Go with Gin framework
- **OCR Engine**: Tesseract via gosseract library
- **Build System**: Makefile for consistent environment management

### Project Structure
```
proseries-document-processor/
├── frontend/                 # React web interface
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileUpload.jsx
│   │   │   └── FileUpload.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/                  # Go server
│   ├── main.go              # Main server with routes
│   ├── handlers/
│   │   └── ocr.go           # OCR processing handler
│   ├── uploads/             # File upload directory
│   ├── temp/                # Temporary processing
│   ├── Makefile             # Build and run commands
│   └── go.mod               # Go dependencies
├── docs/                    # Documentation
├── samples/                 # Sample tax documents
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- **Go** (latest version)
- **Node.js** and **npm**
- **Homebrew** (macOS)
- **Tesseract OCR**: `brew install tesseract`
- **Leptonica**: `brew install leptonica`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd proseries-document-processor
   ```

2. **Set up the backend**
   ```bash
   cd backend
   go mod tidy
   ```

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   make run
   ```
   Server will start on `http://localhost:3001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will start on `http://localhost:5173`

3. **Access the application**
   Open your browser to `http://localhost:5173`

## 🔧 Development

### Backend Commands
```bash
# Run the server with proper CGO environment
make run

# Build the server binary
make build
```

### Frontend Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Current Features

- ✅ **File Upload Interface**: Drag-and-drop or click to select tax documents
- ✅ **Backend Processing**: Go server receives and processes upload requests
- ✅ **OCR Integration**: Tesseract OCR library properly configured and initialized
- ✅ **API Communication**: RESTful API between frontend and backend
- ✅ **Response Display**: Clean JSON response display in the UI
- ✅ **Error Handling**: Proper error logging and user feedback

## 🎯 Upcoming Features

- [ ] **Actual OCR Processing**: Extract text from uploaded documents
- [ ] **Data Parsing**: Identify and structure tax form fields (W-2, 1099)
- [ ] **CSV Export**: Generate ProSeries-compatible import files
- [ ] **Batch Processing**: Handle multiple documents at once
- [ ] **AWS Integration**: Upgrade to AWS Textract for production accuracy
- [ ] **Field Validation**: Verify extracted data accuracy

## 💰 Business Impact

### Target Scale
- **800 clients** with 5-200+ pages each
- **~40,000 pages/month** processing capacity

### Cost Analysis
- **Current Manual Process**: $32,000-50,000/month in labor costs
- **Automated Solution**: $650-750/month (AWS production setup)
- **ROI**: 98%+ cost savings

## 🔬 Technical Details

### CGO Configuration
This project requires CGO for Tesseract integration. On Apple Silicon Macs with Homebrew, the Makefile automatically sets the required environment variables:

```makefile
CGO_CPPFLAGS="-I/opt/homebrew/include"
CGO_LDFLAGS="-L/opt/homebrew/lib"
```

### API Endpoints
- `GET /health` - Server health check
- `POST /ocr` - Document upload and OCR processing

### ProSeries Integration
ProSeries supports data import through:
- **Tax Scan & Import** add-on
- **CSV/Excel file formats**
- **Supported forms**: W-2, 1099-B, 1099-Mortgage, 1099-DIV, 1099-G, Schedule K-1

## 🐛 Troubleshooting

### Common Issues

**Go compilation fails with "leptonica/allheaders.h not found"**
- Ensure Tesseract and Leptonica are installed: `brew install tesseract leptonica`
- Use `make run` instead of `go run main.go` to set proper CGO flags

**Frontend can't connect to backend**
- Verify backend is running on port 3001
- Check for CORS errors in browser console
- Ensure both servers are running simultaneously

**File upload not working**
- Check browser console for JavaScript errors
- Verify file size limits
- Ensure proper file types (images, PDFs)

## 📄 License

[License information to be added]

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## 🎖️ Acknowledgments

- **Tesseract OCR** - Open source OCR engine
- **gosseract** - Go bindings for Tesseract
- **Gin** - HTTP web framework for Go
- **React** - Frontend user interface library