# Environment Variables Setup

## Overview

This project uses environment variables to configure external services. You need to set up a `.env` file to run the project.

## Setup Instructions

### 1. Create `.env` file

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 2. Configure Environment Variables

Edit `.env` with your actual values:

```env
# Strapi API Configuration
VITE_STRAPI_URL=https://strapi.annk.info/api

# Strapi Asset URL (optional, defaults to VITE_STRAPI_URL without /api)
VITE_STRAPI_ASSET_URL=https://strapi.annk.info
```

### Variable Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_STRAPI_URL` | Yes | Strapi API base URL | `https://strapi.annk.info/api` |
| `VITE_STRAPI_ASSET_URL` | No | URL for accessing Strapi assets/images. If not set, derives from `VITE_STRAPI_URL` | `https://strapi.annk.info` |

## Important Notes

- **Never commit `.env`** to version control - it may contain sensitive information
- **Always use `.env.example`** to document required variables
- Variables must start with `VITE_` to be accessible in the frontend (Vite requirement)
- Changes to `.env` require restarting the development server

## Local Development

For local development, you can create:
- `.env.local` - ignored by git, for local-only overrides
- `.env.development` - specific to development builds
- `.env.production` - specific to production builds

Example:

```bash
# Development with local Strapi
VITE_STRAPI_URL=http://localhost:1337/api
VITE_STRAPI_ASSET_URL=http://localhost:1337
```

## Troubleshooting

- **Images not loading**: Ensure `VITE_STRAPI_ASSET_URL` is correctly set
- **API errors**: Verify `VITE_STRAPI_URL` points to the correct Strapi instance
- **Changes not taking effect**: Restart the development server (`npm run dev`)
