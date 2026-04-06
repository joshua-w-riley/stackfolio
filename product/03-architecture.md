# System Architecture

## Overview

The system is composed of three primary layers:

1. Frontend (Next.js)
2. Backend (Supabase: Database + Auth)
3. Media Delivery (Cloudinary CDN)

---

## High-Level Flow

User (Client)
    ↓
Next.js Frontend
    ↓
Supabase (Database + Auth)
    ↓
Cloudinary (Image CDN)

---

## Frontend

Framework:
- Next.js (App Router)

Responsibilities:
- Public marketing pages
- Booking form
- Client gallery rendering
- Admin dashboard UI
- Route protection logic
- Expiration checks (server-side)

Reasoning:
Next.js enables structured routing, SSR capabilities, and future scalability.

---

## Backend

Provider:
- Supabase

Services Used:
- PostgreSQL Database
- Authentication (Admin login only)

Responsibilities:
- Store clients
- Store sessions
- Store password hashes
- Store expiration timestamps
- Store booking submissions

Reasoning:
Supabase provides a free-tier relational database with built-in auth and minimal infrastructure overhead.

---

## Media Delivery

Provider:
- Cloudinary

Responsibilities:
- Image upload
- CDN-backed delivery
- Automatic resizing and optimization
- Transformation support (future flexibility)

Reasoning:
Cloudinary ensures fast global image delivery and reduces performance complexity in image-heavy environments.

---

## Security Model

- Admin authenticated via Supabase Auth.
- Client gallery protected by hashed password.
- No plaintext passwords stored.
- Expiration validated server-side.
- Protected admin routes.

---

## Scalability Consideration

Although v1 supports a single photographer, the schema is structured to support multiple users in the future.

No architectural refactor should be required to support multi-tenancy.

---

Approved:
Date: