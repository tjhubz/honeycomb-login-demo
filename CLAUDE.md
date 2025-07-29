# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js application for Honeycomb Credit's login/signup system. It's built with React 19, Next.js 15.2.4, TypeScript, and uses shadcn/ui components with Tailwind CSS for styling.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run Next.js linter

## Architecture

The application uses Next.js App Router with the following structure:

- **app/** - Contains the main application pages and layout
  - `layout.tsx` - Root layout with Geist fonts and global styling
  - `page.tsx` - Single-page login/signup flow with multi-step forms
- **components/** - Shared React components
  - `ui/` - shadcn/ui component library components
  - `theme-provider.tsx` - Theme management (though not currently used)
- **lib/** - Utility functions
  - `utils.ts` - Utility functions including className merging
- **hooks/** - Custom React hooks
- **styles/** - Global CSS styles
- **public/** - Static assets

## Key Features

The main page (`app/page.tsx`) implements a multi-step authentication flow with:
- Social login (Google/Facebook)
- Email signup/signin forms
- Identity verification with Plaid integration
- Animated transitions between form steps

## Styling System

Uses Tailwind CSS with a custom design system that includes:
- CSS custom properties for theming (defined in globals.css)
- Extended color palette with Honeycomb branding (yellow/purple theme)
- Responsive design with mobile-first approach
- shadcn/ui components for consistent UI patterns

## TypeScript Configuration

- Uses strict TypeScript settings
- Path aliases configured (`@/*` maps to root directory)
- React 19 types included

## Important Notes

- ESLint and TypeScript errors are ignored during builds (configured in next.config.mjs)
- Images are unoptimized (likely for compatibility with static hosting)
- Uses pnpm as package manager
- No test framework is currently configured