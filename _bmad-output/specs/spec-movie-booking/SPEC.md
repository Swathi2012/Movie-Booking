---
id: SPEC-movie-booking
companions:
  - glossary.md
  - ../planning-artifacts/architecture/architecture-Movie-Booking-2026-09-04/ARCHITECTURE-SPINE.md
sources:
  - ../planning-artifacts/prds/prd-Movie-Booking-2026-09-04/prd.md
  - ../planning-artifacts/architecture/architecture-Movie-Booking-2026-09-04/ARCHITECTURE-SPINE.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# Movie Booking Application

## Why

This project exists to provide a simple, fast, and understandable movie-ticket booking experience for customers and a low-friction content-management workflow for administrators. The key pain to solve is that customers need a reliable way to discover movies, compare showtimes, reserve seats, and keep their booking activity organized without a manual or fragmented process. The app also needs a clean admin path so theatre and movie inventory can be maintained without depending on technical staff for every update.

## Capabilities

- **CAP-1**
  - **intent:** Customers can browse movies and view screening details needed to choose what to watch.
  - **success:** A user can open the app, view a list of movies, inspect a movie’s details, and identify relevant theatres and showtimes without assistance.

- **CAP-2**
  - **intent:** Customers can select seats for a show and complete a booking for those seats.
  - **success:** An authenticated customer can choose an available seat or set of seats, confirm the booking, and receive a success result that persists the booking record.

- **CAP-3**
  - **intent:** Customers can see their booking activity and admins can view and manage core catalog data.
  - **success:** A logged-in user can view past bookings, and an admin can create, update, or remove movie, theatre, and showtime records through the application.

- **CAP-4**
  - **intent:** The system provides authenticated, role-aware access to protected operations.
  - **success:** Only valid users can access customer-only flows, and only authenticated admin users can reach management routes or mutate inventory data.

## Constraints

- The application must be built as a full-stack web app using React.js for the frontend and Node.js + Express.js for the backend.
- MongoDB is the planned source of truth for persisted data, and JWT-based authentication is required for protected routes.
- Seat availability and booking validity must be enforced on the backend so client-side selection cannot bypass validation.
- The system must stay beginner-friendly: architecture and code structure should remain clear, modular, and easy to reason about.
- The MVP does not include real payment processing or cancellation/refund flows.

## Non-goals

- Payment gateway integration
- Full refund/cancel flows
- Real-time conflict resolution for seat locking at enterprise scale
- Social login or OAuth-based login
- Multi-city or global deployment at MVP
- Email/SMS notifications
- Advanced analytics or loyalty systems

## Success signal

The system is successful when a customer can sign in, browse movie listings, pick a showtime, choose seats, and complete a booking that is stored and visible in their booking history; meanwhile, an admin can maintain the theatre and movie catalog without exposing protected management actions to customers.

## Assumptions

- The app will use a demo booking flow rather than a production payment flow for the MVP.
- A single admin role is sufficient for the initial implementation.
- The dataset is small to medium scale and does not require major concurrency optimization at first.

## Open Questions

- Should the booking flow include real payment processing in the MVP or remain a seat-reservation demo only?
- Should users be allowed to cancel or modify bookings after they are created?
- Do we need multi-city support in the first release, or is a single-city dataset sufficient?
- How should seat conflicts be handled when multiple users try to reserve the same seat at the same time?
