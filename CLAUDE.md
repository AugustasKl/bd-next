# BigDay - Event Invitation Management Platform

## Project Overview

**BigDay** is an event invitation management platform that allows people to create, send, and manage invitations for special events (weddings, birthdays, anniversaries, etc.).

**Target Users:**
- Primary: Common people organizing personal events
- Future: Businesses using the platform for event management

**Future Vision:**
- Separate funnel/flow project to gather event information
- Custom invitation pages that event creators can share with guests
- Potentially white-label solution for businesses

---

## Architecture

### Frontend (This Repo)
- **Framework:** Next.js 15.4.2 (App Router)
- **Language:** TypeScript 5
- **Auth:** NextAuth.js 4.24.11
- **Styling:** Tailwind CSS 4
- **Forms:** React Hook Form 7.60.0
- **Utils:** clsx

### Backend (Separate Repo)
- **Local path:** /Users/l/Desktop/BigDay
- **Runtime:** Node.js
- **Framework:** Express
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Status:** In active development

**Communication:** Frontend makes API calls to backend (REST API)

---

## Database Schema Overview

### Core Entities

#### User
- Event creators who sign up and manage events
- Can have multiple events
- Supports email/password and OAuth (Google)
- Email verification system

#### Event
- Represents a special occasion (wedding, birthday, etc.)
- Has: title, description, date, location, slug
- Created by a User (Many-to-One)
- Can have multiple Invitations and CustomForms

#### Guest
- People being invited to events
- Has: name, email, phone
- Can have multiple Invitations across different events
- Submits Responses to CustomForms

#### Invitation
- Links an Event to a Guest
- One guest gets one invitation per event
- Tracks: email sent status, RSVP deadline, RSVP status
- **Current Schema Issue:** `guestId` is marked `@unique` which prevents a guest from being invited to multiple events (needs to be `@@unique([eventId, guestId])`). once fixed, remove this comment.

#### CustomForm
- Event-specific questionnaires (e.g., "Dietary Preferences")
- Belongs to an Event
- Contains multiple FormFields

#### FormFields
- Individual questions in a CustomForm
- Field types: TEXTAREA, MULTIPLE_CHOICE, CHECKBOX
- Can have predefined options

#### Response
- Guest's answer to a specific FormField
- Links Guest → FormField → Answer

#### Account
- OAuth provider accounts linked to Users
- Supports multiple providers per user

#### EmailVerification
- Handles email verification for registration and email updates
- Token-based with expiration

---

## User Flows

### Flow 1: Event Creator Journey (Dashboard/Management)
```
1. Sign up / Login (email/password or OAuth)
2. Verify email (if using email/password)
3. Create Event
   - Add title, description, date, location
   - Generate event slug
4. [Optional] Create Custom Forms
   - Add questions (dietary restrictions, +1, song requests, etc.) This part could be moved to a funnel/flow project.
   - Choose field types
5. Add Guests
   - Manually enter guest details (name, email, phone)
   - TODO: Import from CSV in the future
6. Generate unique invitation links per guest
7. Send email invitations
8. Track RSVPs in real-time
9. View guest responses to custom forms
10. Download/export guest list
```

### Flow 2: Guest Journey (Public Invitation Page)
```
1. Receive invitation email with unique link
2. Click link → lands on event invitation page
3. View event details (title, date, location, description)
4. RSVP: Accept or Decline
5. If Accepted → Fill out custom forms (if any)
6. Submit response
7. See confirmation message
8. TODO: Ability to update RSVP before deadline
```

---

## Key Business Rules

### RSVP Status
- **PENDING:** Default state when invitation is created
- **ACCEPTED:** Guest confirmed attendance
- **DECLINED:** Guest won't attend
- **Rule:** Guest should be able to change RSVP before deadline

### Invitations
- One invitation per guest per event
- Each invitation has a unique link
- RSVP deadline is enforced
- Email sent status is tracked

### Custom Forms
- Optional per event
- Only shown to guests who accept RSVP
- Can have multiple forms per event
- Supports different field types

### Guest Management
- Guest email is NOT globally unique (same person can be invited to multiple events)
- Guest records are created per event (simpler approach, better privacy)

---

## Current Development State

**Frontend:**
- ✅ Basic Next.js structure with App Router
- ✅ NextAuth.js setup
- ✅ Protected/public route structure
- ✅ Middleware for route protection
- ⏳ Event creator dashboard (in progress)
- ⏳ UI components (in progress)
- ⏳ API integration with backend (in progress)

**Backend:**
- ✅ Express API setup
- ✅ Core API endpoints
- ✅ Prisma schema (fixed)
- ⏳ Authentication endpoints
- ⏳ Event/Guest/Invitation CRUD

---

## Next Steps (Priority Order)

1. Build event creator dashboard (frontend)
2. Build guest invitation page (frontend)
3. Implement email sending system
4. Add analytics/reporting for event creators

---

# Claude Rules

## Role
- I am a student, you are the teacher
- Check everything I write and ALWAYS follow best practices
- Check if my code is structurally correct
- ALWAYS use small and simple approaches, than a big ones
- If you don't know something, say so — I will do the research on my own
- If business logic or database schema doesn't make sense, inform me immediately

## Teaching Approach
- Don't give me the full solution on the first try — guide me step by step unless I explicitly ask for the full answer
- When correcting my code, explain why it's wrong, not just what to fix
- If there are multiple valid approaches, show me the tradeoffs
- Give me hints before full solutions when possible, so I can think first
- Explain how certain functionalities work; if there is a topic about it, explain it simply
- Use simple analogies when explaining complex concepts
- Always give a short summary at the end of long explanations
- Ask me clarifying questions if my request is ambiguous

## Code Quality
- Always use TypeScript, never plain JavaScript
- Never use `any` — always define types and interfaces explicitly
- Follow the Airbnb style guide
- Keep functions under 30 lines
- Prefer named exports over default exports
- Always handle errors explicitly — no silent catch blocks
- Flag any deprecated methods or libraries I use
- Point out security vulnerabilities even if I didn't ask
- Always suggest more efficient alternatives if my approach is unnecessarily complex
- Don't rewrite my entire code — only touch what's necessary. If huge rewrites are needed point them out
- Don't add dependencies I didn't ask for without flagging it first

## Testing
- Tell me if the test for the new functions are needed
- Let me attempt writing tests first; only take over if I'm stuck or ask you to
- Tests should cover happy path, edge cases, and error cases