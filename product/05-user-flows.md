# User Flows

## Overview

This document defines all major user flows for v1.

The system supports two primary user types:

1. Public Visitor (Potential Client)
2. Admin (Photographer)

---

# 1. Public Visitor — Booking Flow

Goal:
Submit a booking inquiry.

Flow:

1. User visits website.
2. Navigates to booking section.
3. Fills out:
   - Name
   - Email
   - Event date
   - Message
4. Submits form.
5. Data stored in bookings table.
6. Confirmation state displayed.

Success Criteria:
- Submission stored.
- UI confirms success.
- No page reload required.

---

# 2. Client — Gallery Access Flow

Goal:
Access password-protected gallery.

Flow:

1. Client receives unique URL:
   example.com/gallery/smith-wedding
2. Page loads.
3. Server checks:
   - Gallery exists.
   - is_active = true.
   - expires_at > now().
4. If valid:
   - Show password entry screen.
5. Client enters password.
6. Server validates password hash.
7. If correct:
   - Render gallery images.
8. If incorrect:
   - Display error state.
9. If expired:
   - Display expiration message.
   - No image data returned.

Security Requirement:
All password validation must occur server-side.

---

# 3. Admin — Authentication Flow

Goal:
Secure dashboard access.

Flow:

1. Admin visits /admin.
2. Supabase Auth login required.
3. If authenticated:
   - Access dashboard.
4. If not:
   - Redirect to login page.

---

# 4. Admin — Create Gallery Flow

Goal:
Create new client gallery.

Flow:

1. Admin logs in.
2. Creates client (if new).
3. Creates gallery:
   - Title
   - Slug
   - Password
   - Expiration date
4. Password hashed before storage.
5. Uploads images to Cloudinary.
6. Image references stored in images table.
7. Gallery becomes active.

---

# 5. Admin — Expired Gallery Handling

Goal:
Manage expired galleries.

System Behavior:

- If expires_at < now():
   - Gallery auto-blocked.
   - Access denied.
   - Images not fetched.

Optional Future Enhancement:
- Admin may extend expiration.
- Admin may deactivate gallery manually.

---

# UX Principles

- No confusing states.
- Clear error messages.
- Expiration messaging is respectful.
- Access flow feels premium, not technical.

---

Approved:
Date: