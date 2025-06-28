# PedigreeSync: Scan NFC-enabled livestock eartags with an iPhone

This project is an **open-source mobile and web application** for managing livestock records using **NFC-enabled ear tags**. Designed with small livestock producers, the system allows producers to scan tags with an iPhone, view or update health records offline, and sync them to a centralized cloud database when connectivity is available.

This application was developed as a farmer-led research initiative supporting **animal welfare and the right to repair**.

[![Netlify Status](https://api.netlify.com/api/v1/badges/85e6a9e0-d2e6-41a8-8864-3b21de7249e5/deploy-status)](https://app.netlify.com/sites/reedbuilt/deploys)

![Screenshot 2025-03-26 at 1 03 09 PM](https://github.com/user-attachments/assets/1c9fea4e-4afb-4104-8815-b7652256f542)

---

## 🚜 Purpose

Most livestock management tools are either expensive, proprietary, or require specialized RFID hardware. This project provides an alternative: a **low-cost, open-source platform** built around NFC tags readable by consumer smartphones. It is ideal for producers without expensive RFID scanners, and those who prioritize animal handling efficiency, welfare monitoring, and right to repair.

---

## 🔑 Features

### Phase 1 – Web Admin Dashboard (In Progress)
- View and edit synced body condition score records in a React web interface
- Add flock metadata and batch operations
- Secure authentication and multi-device access

### Phase 2 – Mobile Scan Integration (Planned)
- Scan NFC ear tags using iPhone (React Native + iOS Core NFC)
- Store and view records locally
- Sync records to Supabase when online

### Phase 3 – Field Validation & Community Tools (Planned)
- Usability testing across 2 working ranches and 100+ sheep.
- Environmental durability over 3 years
- Data export for NSIP/EBV pipelines
- Community support for forking/customization

---

## 🧪 Getting Started

### Prerequisites

To run the app locally, ensure you have:
- Node.js (v18+ recommended)
- Xcode or iOS device with NFC capability (for mobile scanning)
- Supabase account for backend setup

### Setup Instructions

```bash
git clone https://github.com/your-username/nfc-livestock-tags.git
cd nfc-livestock-tags
npm install
