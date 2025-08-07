#!/bin/bash

echo "🧹 Cleaning up existing installation..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

echo "📦 Installing compatible dependencies..."
npm install

echo "🔍 Checking for peer dependency warnings..."
npm ls --depth=0

echo "✅ Dependencies fixed! You can now run:"
echo "   npm run dev"
