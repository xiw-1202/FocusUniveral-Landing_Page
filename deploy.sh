#!/bin/bash

# Simple deployment script for GitHub Pages
# This script helps deploy the landing page to GitHub Pages

echo "Deploying to GitHub Pages..."

# Ensure we're on the main branch
git checkout main

# Push any pending changes
git add .
git commit -m "Update landing page"
git push origin main

echo "Deployment complete!"
echo "Your site will be available at: https://xiw-1202.github.io/FocusUniveral-Landing_Page/"
echo "Note: It may take a few minutes for changes to appear."