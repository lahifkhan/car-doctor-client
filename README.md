# Car Doctor – Full-Stack Car Service Platform

Car Doctor is a full-stack web application that allows users to explore car services, browse products, and book appointments securely. It includes Google authentication, a real backend API, and a fully responsive UI.

---

## Features

- Users can explore and view detailed car services easily.
- Product browsing with search and price-based filtering is supported.
- Users can log in quickly and securely using Google authentication.
- Appointments and bookings can be managed from a clean user interface.
- The platform loads fast and works smoothly on all devices.
- All data comes from a real Express.js and MongoDB backend.
- The project is scalable for future real-world business use.

---

## Tech Stack

**Frontend:** Next.js, React, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB  
**Authentication:** NextAuth (Google Provider)  
**Hosting:** Vercel (Client + Server)

---

## Live Demo

[View Live Demo](https://car-doctor-client-85y1.vercel.app)

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/car-doctor.git
cd car-doctor
```

### 2\. Install Frontend Dependencies

###

`npm install`

### 3\. Configure Environment Variables

###

Create a `.env.local` file in the project root:

`GOOGLE_CLIENT_ID=your_google_client_id GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_SECRET=your_secret

NEXTAUTH_URL=http://localhost:3000

NEXT_PUBLIC_API_URL=https://your-backend.vercel.app`

Replace the values with your actual credentials.

### 4\. Run the Development Server

###

`npm run dev`

Your app will be available at:  
[http://localhost:3000](http://localhost:3000)

---

## Deployment Guide

### Deploy Backend

###

1.  Push backend code to GitHub
2.  Import it into Vercel
3.  Set backend environment variables in Vercel
4.  Add backend OAuth redirect URI in Google Cloud Console
5.  Deploy

### Deploy Frontend

###

1.  Push frontend code to GitHub
2.  Import into Vercel
3.  Add frontend environment variables in Vercel
4.  Deploy

---

## Route Summary (Client Routes)

###

| Route               | Source Folder       | Description                                         |
| ------------------- | ------------------- | --------------------------------------------------- |
| /                   | page.jsx            | Homepage / Landing Page                             |
| /about              | about/              | About Us page or general information                |
| /allProducts        | allProducts/        | Displays a list of all products with filtering      |
| /allProducts/\[id\] | allProducts/\[id\]/ | Dynamic route for individual product details        |
| /blog               | blog/               | Blog listing or articles landing page               |
| /dashboard          | dashboard/          | Protected user area for managing account/orders     |
| /login              | login/              | User login page                                     |
| /partner            | partner/            | Page showcasing partners and social links           |
| /register           | register/           | User registration / sign-up page                    |
| /services           | services/           | View available services (e.g., car repair services) |
| /api                | api/                | Internal Next.js API routes for server-side logic   |

---

## Project Structure

###

car-doctor/

│

├── src/

│   ├── app/

│   │   ├── about/

│   │   ├── allProducts/

│   │   │   └── \[id\]/

│   │   ├── api/

│   │   ├── blog/

│   │   ├── dashboard/

│   │   ├── login/

│   │   ├── partner/

│   │   ├── register/

│   │   ├── services/

│   │   ├── favicon.ico

│   │   ├── globals.css

│   │   ├── layout.js

│   │   └── page.jsx

│   │

│   ├── Components/

│   │   └── (Reusable UI components like Navbar, Partners, ReviewSection)

│   ├── Providers/

│   │   └── (Context or state providers like AuthProvider, QueryClientProvider)

│   └── proxy.js

│

└── ... (Other configuration files like package.json, next.config.js, etc.)

---
