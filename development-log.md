### 06-21-2025 - .NET Development Environment Configuration

**What I did:**
* Diagnosed .NET version conflict (had .NET 9 globally, needed .NET 8 for project)
* Installed .NET 8 via Homebrew (`dotnet@8`)
* Created shell alias `dotnet8` for project-specific .NET 8 usage
* Updated README.md with environment setup documentation

**Why it matters:**
* Enables running ASP.NET Core project locally without breaking global .NET setup
* Maintains conventional approach (latest version as global default)
* Documents environment for future developers/deployment

**Challenges:**
* Initial confusion about PATH modification vs alias approach
* .NET 8 was keg-only, required explicit configuration
* Balancing conventional practices with project needs

**Next steps:**
* Research session-based data isolation for demo protection
 
* Goal: Fresh data state per browser session, automatic cleanup on session expiry