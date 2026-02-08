# Setup Instructions

## Install Node.js

You need Node.js installed to run this Next.js application. Here are the recommended ways to install it on macOS:

### Option 1: Download from Official Website (Easiest)
1. Go to https://nodejs.org/
2. Download the LTS version for macOS
3. Run the installer
4. Restart your terminal

### Option 2: Using Homebrew (if you have it installed)
```bash
brew install node
```

### Option 3: Using nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# Then restart your terminal or run:
source ~/.zshrc
nvm install --lts
nvm use --lts
```

## Verify Installation

After installing Node.js, verify it's working:
```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Install Project Dependencies

Once Node.js is installed, run:
```bash
cd /Users/lukemeyer/personal_website
npm install
```

## Run the Development Server

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

## Troubleshooting

If you still see "command not found" errors:
- Make sure you've restarted your terminal after installing Node.js
- Check that Node.js is in your PATH by running: `echo $PATH`
- Try logging out and back into your terminal session
