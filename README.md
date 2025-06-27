# PedigreeSync: NFC Livestock Tag System

This project is an **open-source mobile and web application** for managing livestock records using **NFC-enabled ear tags**. Designed with small livestock producers, the system allows producers to scan tags with an iPhone, view or update health records offline, and sync them to a centralized cloud database when connectivity is available.

This application was developed as a farmer-led research initiative supporting **animal welfare, decentralized data ownership, and the right to repair**.

[![Netlify Status](https://api.netlify.com/api/v1/badges/85e6a9e0-d2e6-41a8-8864-3b21de7249e5/deploy-status)](https://app.netlify.com/sites/reedbuilt/deploys)

![Screenshot 2025-03-26 at 1 03 09 PM](https://github.com/user-attachments/assets/1c9fea4e-4afb-4104-8815-b7652256f542)

---

## 🚜 Purpose

Most livestock management tools are either expensive, proprietary, or require specialized RFID hardware. This project provides an alternative: a **low-cost, open-source platform** built around NFC tags readable by consumer smartphones. It is ideal for producers without dedicated IT infrastructure, and those who prioritize animal handling efficiency, welfare monitoring, and data transparency.

---

## Features

### Phase 1 – Web Admin Dashboard (Testing)
- View and edit synced records in a React web interface
- Add flock metadata and batch operations
- Secure authentication and multi-device access

### Phase 2 – Mobile Scan Integration (WIP)
- Scan NFC ear tags using iPhone (React Native + iOS Core NFC)
- Store and view records locally
- Sync records to Supabase when online
- Manage livestock profiles and events (health, weight, lambing)

### Phase 3 – Field Validation & Community Tools (Planned)
- Usability testing across 3+ ranches
- Environmental durability logging
- Data export for NSIP/EBV pipelines
- Community support for forking/customization

---

## Getting Started

### Prerequisites

To run the app locally, ensure you have:
- Node.js (v18+ recommended)
- Xcode or iOS device with NFC capability (for mobile scanning)
- Supabase account for backend setup

### Setup Instructions

```bash
git clone [https://github.com/your-username/nfc-livestock-tags](https://github.com/reedanders/PedigreeSync).git
cd PedigreeSync
npm install
