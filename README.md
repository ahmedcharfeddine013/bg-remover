# 🧼 BGR – Background Remover

BGR (Background Remover) is a fullstack web application built with **Next.js** that allows users to upload an image and remove its background seamlessly. It integrates secure user authentication with **Clerk** and handles background processing via a backend API route.

---

## ✨ Features

- 🖼 Upload any image from your device
- 🚀 Instant background removal using an API on the backend
- 👤 User authentication with Clerk (Sign in / Sign up)
- ✅ Download the result in a single click
- 🎨 Clean and responsive UI with Tailwind CSS
- 🔐 Backend API key security (no exposure on client side)

---

## 🧱 Tech Stack

- **Frontend & Backend**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **API Integration**: [remove.bg API](https://www.remove.bg/api) or similar
- **Hosting**: Vercel (recommended)

---

## 📁 Project Structure

bg-remover/
├── app/
│ ├── (auth)/ # Clerk authentication routes
│ ├── dashboard/ # Protected page for background removal
│ └── api/remove/ # Background removal API route
├── components/ # Reusable UI components
├── lib/ # Utility functions and helpers
├── public/ # Static assets
├── styles/ # Global styles
└── ...

yaml
Copy
Edit

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ahmedcharfeddine013/bg-remover.git
cd bg-remover
2. Install Dependencies
bash
Copy
Edit
npm install
# or
pnpm install
3. Set Up Environment Variables
Create a .env.local file at the root of the project and add:

env
Copy
Edit
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
REMOVE_BG_API_KEY=your_removebg_api_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
🔑 You can get your Clerk credentials from your Clerk dashboard.
🎯 The Remove.bg API key can be obtained from remove.bg.

4. Run the Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 to start using the app.

🚀 Deployment
You can deploy this app easily using Vercel:

Push the project to GitHub.

Connect the repository to Vercel.

Set environment variables in the Vercel dashboard:

CLERK_SECRET_KEY

CLERK_PUBLISHABLE_KEY

REMOVE_BG_API_KEY

NEXT_PUBLIC_CLERK_FRONTEND_API

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

Deploy ✅

📸 Screenshots
You can place your screenshots in public/screenshots/ and reference them here:

md
Copy
Edit
![Login Page](./public/screenshots/login.png)
![Dashboard](./public/screenshots/dashboard.png)
![Result](./public/screenshots/result.png)
📜 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Ahmed Charfeddine
Frontend & Fullstack Web Developer

GitHub: @ahmedcharfeddine013

LinkedIn: Ahmed Charfeddine
