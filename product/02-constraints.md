# Product Constraints

## Budget
- Must operate on free-tier hosting and database services.
- No paid SaaS dependencies for v1.

## Infrastructure
- Hosted on Vercel (free tier).
- Database via Supabase (free tier).
- Image delivery via Cloudinary (free tier).

## Performance
- Image-heavy application.
- Gallery pages must load quickly.
- CDN-backed image delivery required.
- Lazy loading required for all galleries.

## User Model
- Single photographer (admin) for v1.
- Future multi-tenant potential should be preserved in architecture.

## Security
- Client galleries must require password protection.
- Passwords must be securely hashed.
- No plain text password storage.
- Protected routes for admin dashboard.

## Gallery Rules
- Free galleries must expire.
- Expired galleries should not display images.
- Expiration logic handled server-side.

## Feature Scope (Confirmed Exclusions)
- No watermarking required.
- No bulk download required.
- Bulk upload required for admin.

---

Approved:
Date: