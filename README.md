# 🧼 BGR – Background Remover

BGR (Background Remover) is a fullstack web application built with **Next.js** that allows users to upload an image and remove its background seamlessly. The app handles backend API requests to a background removal service and returns a clean image ready for download.

---

## ✨ Features

- 🖼 Upload any image from your device
- 🚀 Instant background removal using an API on the backend
- ✅ Download the result in a single click
- 🎨 Clean and responsive UI with Tailwind CSS
- 🔐 Backend API key security (no exposure on client side)

---

## 🧱 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **API Integration**: [remove.bg API](https://www.remove.bg/api) or similar
- **Hosting**: Vercel (recommended)

---

## 📁 Project Structure

bg-remover/
├── app/ # App router pages and layout
├── components/ # Reusable UI components
├── lib/ # Utility functions and API client
├── public/ # Static assets
├── styles/ # Global styles
├── app/api/remove/ # API route for background removal
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
Create a .env.local file at the root of the project and add your API key:

env
Copy
Edit
REMOVE_BG_API_KEY=your_api_key_here
You can get your API key from remove.bg or any other background removal API service.

4. Run the Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to see the result.

🚀 Deployment
You can deploy this app easily using Vercel:

Push the project to a GitHub repository.

Connect the repository to Vercel.

Add your REMOVE_BG_API_KEY in Vercel's environment variables.

Deploy 🚀

📸 Screenshots
Create a folder like public/screenshots/ and place screenshots there. Then link them here:

md
Copy
Edit
![Homepage](./public/screenshots/homepage.png)
![Image Upload](./public/screenshots/upload.png)
![Result](./public/screenshots/result.png)
📜 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Ahmed Charfeddine
Frontend & Fullstack Web Developer

GitHub: @ahmedcharfeddine013

LinkedIn: Ahmed Charfeddine
