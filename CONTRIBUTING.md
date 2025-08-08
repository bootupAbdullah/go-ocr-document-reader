# Contributing to Application Tracker

## Development Setup

### Backend (ASP.NET Core)

1. Navigate to backend directory:
```bash
cd backend/ApplicationTracker
```

2. Restore dependencies:
```bash
dotnet8 run
```

#### Note: This project targets .NET 8.0.117. Since the system has multiple .NET SDKs installed and the global default is .NET 9.0.5, a shell alias dotnet8 was configured to explicitly use the correct runtime (dotnet@8 via Homebrew).

For more details, see the “.NET Configuration” note in the README.

The backend will be available at `https://localhost:7000` (or check console output for exact port).


### Frontend (React + Vite)

1. Navigate to frontend directory:
```bash
cd frontend/application-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## Quick Navigation

From project root:

**Backend:**
```bash
cd backend/ApplicationTracker && dotnet run
```

**Frontend:**
```bash
cd frontend/application-tracker && npm run dev
```