# 📊 Live Voting Platform

Livelink : https://live-voting-platform.vercel.app/

A real-time, gamified polling web application where users can create and participate in public or private polls.

Built to transform traditional voting into an engaging, interactive, and community-driven experience.

---

## 🚀 Overview

Live Voting Platform allows users to:

- Create **public polls** visible to everyone
- Create **private polls** accessible via shareable links
- Vote in real-time with instant updates
- Participate in discussions
- Experience gamified engagement mechanics

This project demonstrates full-stack development, real-time communication, authentication systems, and scalable architecture design.

---

## 🌟 Features

### 🗳️ Poll Types

**Public Polls**
- Listed on homepage
- Open for community voting
- Support discussion/comments

**Private Polls**
- Accessible only via unique link
- Not publicly indexed
- Ideal for teams or small groups

---

### ⚡ Real-Time Voting
- Instant vote updates
- No page refresh required
- Powered by WebSockets

---

### 🎮 Gamification
- Engagement-focused design
- Retention-driven architecture

--

### 🔐 Authentication & Security
- JWT-based authentication
- Protected routes
- Secure poll ownership management
- Input validation & basic rate limiting

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- WebSockets

### Database
- MongoDB

### Other Tools
- JWT Authentication
- REST APIs
- Real-time communication architecture

---

## 🧠 Architecture Overview

Client (React)  
↓  
REST API Layer (Express)  
↓  
MongoDB Database  
↓  
WebSocket Server (Real-Time Sync)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/LiveVotingPlatform.git
cd LiveVotingPlatform
