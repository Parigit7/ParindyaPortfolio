#!/bin/bash

# Modern Portfolio - Development Setup
# This script helps set up the development environment

echo ""
echo "================================"
echo "Modern Portfolio Setup"
echo "================================"
echo ""

# Check if Node.js is installed
echo "Checking dependencies..."
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

if ! command -v java &> /dev/null; then
    echo "Java is not installed. Please install Java 17 or higher."
    exit 1
fi

if ! command -v mvn &> /dev/null; then
    echo "Maven is not installed. Please install Maven from https://maven.apache.org/"
    exit 1
fi

echo "All dependencies found!"
echo ""

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "Frontend installation failed!"
    exit 1
fi
cd ..

# Build backend
echo "Building backend..."
cd backend
mvn clean install -DskipTests
if [ $? -ne 0 ]; then
    echo "Backend build failed!"
    exit 1
fi
cd ..

echo ""
echo "================================"
echo "Setup Complete!"
echo "================================"
echo ""
echo "Frontend: cd frontend && npm run dev"
echo "Backend:  cd backend && mvn spring-boot:run"
echo ""
