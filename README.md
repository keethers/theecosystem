# The Ecosystem - Monorepo

[![CI](https://github.com/keethers/theecosystem/actions/workflows/ci.yml/badge.svg)](https://github.com/keethers/theecosystem/actions/workflows/ci.yml)

A comprehensive monorepo containing multiple JavaScript/TypeScript projects unified under a single development environment.

## 📁 Project Structure

This monorepo contains the following packages:

```
packages/
├── 5150/              # Gaming and gambling components
├── bitchlaunch/       # Trading and financial engine components
├── e/                 # Creative and media building components
├── eco-ystem/         # Core ecosystem orchestration and simulation
├── exotic/            # Exotic modes and special functionality
├── fucc5150/          # Payment and verification components
├── going5150/         # Promotional and tracking components
├── shared/            # Shared utilities and components
├── theoath/           # Professional services and assistance modules
└── zh/                # ZH components and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- npm (>= 8.0.0)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/keethers/theecosystem.git
   cd theecosystem
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install workspace dependencies:
   ```bash
   npm install --workspaces
   ```

## 🛠️ Development

### Available Scripts

- `npm run build` - Build all packages
- `npm run test` - Run tests for all packages
- `npm run lint` - Lint all packages
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run dev` - Start development mode for all packages
- `npm run clean` - Clean all package node_modules
- `npm run reset` - Clean and reinstall dependencies

### Working with Individual Packages

To work with a specific package:

```bash
# Run command in specific package
npx lerna run build --scope=@theecosystem/5150

# Run command in multiple packages
npx lerna run test --scope=@theecosystem/{5150,shared}

# Run command in all packages except one
npx lerna run build --ignore=@theecosystem/zh
```

### Package Development

Each package has its own `package.json` with individual scripts:

```bash
cd packages/5150
npm run build
npm run test
npm run lint
npm run dev
```

## 📦 Package Details

### @theecosystem/5150

Gaming and gambling components including:

- LuckyDraw5150: Lottery system implementation
- SlotMachine: Slot machine game logic
- GamePayoutControls: Payout management system

### @theecosystem/eco-ystem

Core ecosystem components:

- CloneOrchestrator: System orchestration
- CloneSimEngine: Simulation engine
- QueenBeeCore: Core system functionality

### @theecosystem/bitchlaunch

Trading and financial components:

- SharkTradeEngine: Trading engine implementation
- SharkTraderStatus: Trading status tracking

### @theecosystem/shared

Common utilities and components:

- WalletFactory: Wallet creation utilities
- ManualWalletCreator: Manual wallet creation
- TrustWalletSync: Wallet synchronization
- PitbullSecurity: Security utilities
- OwnerControlsPanel: Administrative controls

### @theecosystem/exotic

Special modes and functionality:

- GhostMode: Stealth mode operations
- GodMode: Administrative mode
- SpyMode: Monitoring functionality

### @theecosystem/theoath

Professional services:

- DoctorModule: Medical assistance
- LegalAssistant: Legal support functionality

### @theecosystem/e

Creative and media:

- CinematicsBuilder: Media building tools

### @theecosystem/going5150

Promotional and tracking:

- TeslaPromoTracker: Promotional tracking system

### @theecosystem/fucc5150

Payment and verification:

- VenmoChecker: Payment verification

### @theecosystem/zh

ZH-specific utilities and components.

## 🔧 Configuration

### ESLint

ESLint configuration is shared across all packages via `.eslintrc.json` in the root.

### Prettier

Code formatting is managed by Prettier with configuration in `.prettierrc.json`.

### TypeScript

TypeScript configuration is available in `tsconfig.json` for packages that use TypeScript.

## 🧪 Testing

Each package can have its own test suite. Tests are run using:

```bash
npm run test                    # Run all tests
npx lerna run test             # Run tests using Lerna
npx lerna run test --scope=... # Run tests for specific package
```

## 📝 Contributing

1. Create a feature branch from `develop`
2. Make your changes in the appropriate package(s)
3. Add tests for new functionality
4. Run linting and formatting: `npm run lint && npm run format`
5. Ensure all tests pass: `npm run test`
6. Build all packages: `npm run build`
7. Submit a pull request

### Code Style

- Use Prettier for formatting (automatic on commit)
- Follow ESLint rules
- Write meaningful commit messages
- Add JSDoc comments for public APIs

## 📋 Package Dependencies

### Inter-package Dependencies

Packages can depend on each other using workspace references:

```json
{
  "dependencies": {
    "@theecosystem/shared": "workspace:*"
  }
}
```

### External Dependencies

Common dependencies are managed at the root level. Package-specific dependencies are managed in individual package.json files.

## 🚀 Deployment

The monorepo supports independent versioning and publishing of packages:

```bash
# Version all packages
npx lerna version

# Publish all packages
npx lerna publish

# Publish specific package
npx lerna publish --scope=@theecosystem/shared
```

## 📞 Support

For issues and questions:

1. Check existing [GitHub Issues](https://github.com/keethers/theecosystem/issues)
2. Create a new issue with appropriate labels
3. Include reproduction steps and environment details

## 📄 License

MIT - see [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Lerna](https://lerna.js.org/) and modern JavaScript tooling.
