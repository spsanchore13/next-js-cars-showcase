#!/bin/bash

# Development setup script for Next.js Cars Showcase
# This script helps with common development tasks

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the project directory
if [ ! -f "package.json" ]; then
    print_error "This script must be run from the project root directory"
    exit 1
fi

# Function to install dependencies
install_deps() {
    print_status "Installing dependencies..."
    npm install
    print_status "Dependencies installed successfully!"
}

# Function to start development server
start_dev() {
    print_status "Starting development server..."
    npm run dev
}

# Function to build the project
build_project() {
    print_status "Building the project..."
    npm run build
    print_status "Build completed successfully!"
}

# Function to lint the code
lint_code() {
    print_status "Running linter..."
    npm run lint
    print_status "Linting completed!"
}

# Function to clean node_modules (with confirmation)
clean_deps() {
    print_warning "This will remove node_modules directory. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        print_status "Removing node_modules..."
        rm -rf node_modules
        print_status "node_modules removed successfully!"
    else
        print_status "Operation cancelled."
    fi
}

# Function to show help
show_help() {
    echo "Next.js Cars Showcase - Development Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  install    - Install dependencies"
    echo "  dev        - Start development server"
    echo "  build      - Build the project"
    echo "  lint       - Run linter"
    echo "  clean      - Remove node_modules (with confirmation)"
    echo "  help       - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 install"
    echo "  $0 dev"
    echo "  $0 build"
}

# Main script logic
case "${1:-help}" in
    "install")
        install_deps
        ;;
    "dev")
        start_dev
        ;;
    "build")
        build_project
        ;;
    "lint")
        lint_code
        ;;
    "clean")
        clean_deps
        ;;
    "help"|*)
        show_help
        ;;
esac 