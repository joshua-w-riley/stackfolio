# Data Model

## Overview

The database is relational and structured to support:

- Single photographer (v1)
- Future multi-tenant expansion
- Secure gallery access
- Expiration logic
- Booking intake

---

# Tables

---

## 1. photographers

Purpose:
Supports future multi-tenant expansion.

Fields:

- id (uuid, primary key)
- name (text)
- email (text)
- created_at (timestamp)

---

## 2. bookings

Purpose:
Stores inbound booking requests from the public site.

Fields:

- id (uuid, primary key)
- photographer_id (uuid, foreign key → photographers.id)
- client_name (text)
- client_email (text)
- event_date (date)
- message (text)
- status (text) → "new" | "responded" | "booked"
- created_at (timestamp)

---

## 3. clients

Purpose:
Represents paying customers who receive galleries.

Fields:

- id (uuid, primary key)
- photographer_id (uuid, foreign key)
- name (text)
- email (text)
- created_at (timestamp)

---

## 4. galleries

Purpose:
Represents a client session gallery.

Fields:

- id (uuid, primary key)
- photographer_id (uuid, foreign key)
- client_id (uuid, foreign key → clients.id)
- title (text)
- slug (text, unique)
- password_hash (text)
- expires_at (timestamp)
- is_active (boolean)
- created_at (timestamp)

Notes:
- slug generates the unique URL.
- password_hash must never store plaintext.
- expires_at determines access eligibility.

---

## 5. images

Purpose:
Stores references to Cloudinary images.

Fields:

- id (uuid, primary key)
- gallery_id (uuid, foreign key → galleries.id)
- cloudinary_public_id (text)
- width (integer)
- height (integer)
- created_at (timestamp)

Important:
Only store references.
Do not store image binaries in database.

---

# Relationships

photographers
    ↓
clients
    ↓
galleries
    ↓
images

photographers
    ↓
bookings

---

# Access Rules

Admin:
- Full CRUD on all tables.

Public:
- Can submit booking.
- Can attempt gallery access (password required).

Server Logic:
- Gallery fetch checks:
    1. is_active = true
    2. expires_at > now()
    3. password validated

Expired galleries:
- Return restricted state.
- Do not return image references.

---

# Scalability Design

Even though v1 uses a single photographer:

- photographer_id exists in all major tables.
- Allows seamless multi-user expansion later.

No structural rewrite required.

---

Approved:
Date: