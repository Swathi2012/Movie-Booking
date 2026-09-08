---
stepsCompleted: ["validated prerequisites"]
inputDocuments:
  - "_bmad-output/planning-artifacts/prds/prd-Movie-Booking-2026-09-04/prd.md"
  - "_bmad-output/planning-artifacts/architecture/architecture-Movie-Booking-2026-09-04/ARCHITECTURE-SPINE.md"
---

# Movie-Booking - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Movie-Booking, decomposing the requirements from the PRD and Architecture decisions into implementable epics.

## Requirements Inventory

### Functional Requirements

FR1: Users can register and authenticate with a secure username/password flow and JWT-based sessions.
FR2: Users can browse a list of movies and search or filter them by title or category.
FR3: Users can view detailed movie information including title, description, genre, language, duration, and poster.
FR4: Users can browse theatres and view available showtimes for a selected movie.
FR5: Users can choose a theatre and showtime to view available seats.
FR6: Users can select one or more available seats and submit a booking.
FR7: Users can receive a booking confirmation and the booking must be stored against the correct user.
FR8: Users can view their booking history and summary information.
FR9: Admin users can manage the movie catalog including create, update, and delete operations.
FR10: Admin users can manage theatres, screens, and seat layouts.
FR11: Admin users can create, update, and remove showtimes for movie screenings.
FR12: The system enforces server-side authorization so only admin users can mutate protected data.

### NonFunctional Requirements

NFR1: The application must use React.js on the frontend and Node.js + Express.js on the backend.
NFR2: JWT-based authentication must protect customer-only and admin-only routes.
NFR3: Passwords must be stored securely and protected from plain-text handling.
NFR4: The backend must validate seat availability and booking creation before persisting data.
NFR5: The application must be easy to understand and maintain for a beginner-friendly learning project.
NFR6: The user experience should remain clear and consistent across customer and admin flows.
NFR7: Core pages and API calls should remain fast for a small to medium dataset.
NFR8: Error handling should be consistent and validation should prevent invalid booking actions.
NFR9: The codebase should use a modular structure with clear responsibilities between frontend state, API logic, and data models.

### Additional Requirements

- The frontend and backend are separate packages and must not share direct database access.
- The React frontend should use a domain-sliced state model (movies, seats, cart/booking flow, admin management).
- The Express API is the single source of truth for booking rules, inventory checks, and authorization.
- MongoDB is the target data store for persisted movie, seating, user, and booking records.
- Socket.IO may be used later for real-time seat or booking updates, but it is not required for the MVP.
- The project should follow a layered design so UI code remains distinct from backend business rules.

### UX Design Requirements

No dedicated UX design contract was found in the project artifacts. Default UI expectations for this project are:
UX-DR1: Use a simple, consistent browse-and-book flow with clearly labeled actions for movie selection, showtime selection, seat selection, and booking confirmation.
UX-DR2: Use clear state indicators for available, selected, and booked seats so users understand booking choices before confirmation.
UX-DR3: Use a straightforward admin flow with clear create/edit/delete actions for movies, theatres, screens, and showtimes.
UX-DR4: Apply standard accessibility best practices such as visible focus states, readable labels, and simple keyboard-friendly interactions.

### FR Coverage Map

FR1: Epic 1 - Customer auth and account access
FR2: Epic 1 - Movie discovery and selection flow
FR3: Epic 1 - Movie detail and screening flow
FR4: Epic 1 - Theatre and showtime discovery
FR5: Epic 1 - Seat selection and booking path
FR6: Epic 1 - Booking confirmation and seat reservation
FR7: Epic 1 - Booking persistence and customer history
FR8: Epic 1 - Booking history and records display
FR9: Epic 2 - Admin catalog management
FR10: Epic 2 - Admin theatre and screen management
FR11: Epic 2 - Admin showtime management
FR12: Epic 3 - Secure authorization and protected route enforcement

## Epic List

### Epic 1: Customer Booking Journey
The customer can browse movies, choose a showtime, reserve seats, and see their booking confirmations and history.
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8

### Epic 2: Admin Inventory Management
The admin can maintain the data needed to keep movie listings, theatres, screens, and showtimes accurate and complete.
**FRs covered:** FR9, FR10, FR11

### Epic 3: Security and Platform Integrity
The platform protects sensitive actions with secure authentication, authorization checks, and backend validation to keep booking operations trustworthy.
**FRs covered:** FR1, FR12

### Epic 4: Experience and Maintainability Foundation
The app remains understandable, modular, and maintainable while supporting the booking and admin workflows.
**FRs covered:** NFR1, NFR2, NFR5, NFR8, NFR9
