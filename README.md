# Spotify Clone

A full-stack Spotify clone that replicates core features of Spotify, including music streaming, user authentication, and playlist management.

## Key Features

- **Music Streaming:** Browse and play songs from a curated music library.
- **User Authentication:** Secure sign-up and login powered by Clerk.
- **Playlist Management:** Create, edit, and manage personal playlists.

## Technologies Used

- **Frontend:** React with Next.js, Tailwind CSS for styling.
- **Backend:** Node.js with Express.js, MongoDB for data storage.
- **Authentication:** Clerk for user authentication.
- **File Uploads:** Handled via `express-fileupload`.
- **Real-time Features:** Socket.io for real-time updates.
- **Task Scheduling:** Node-cron for scheduled tasks.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Shvayne/spotify_clone.git
  ```
2. **Navigate to the Project directory**
   ```bash
   cd spotify_clone
  ```

3. **Install Dependencies**
  ```bash
  npm install
  ```
4. **set up env variables**
  Create a .env file in the root directory and configure the necessary environment variables as per the .env.example file.
5. **Start the development server**
  ```bash
  npm run dev
  ```
  