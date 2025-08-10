# Assignment 14 – Portfolio Website

This project is a **React-based portfolio website** built using components inspired by the UI Component Library from Assignment 13.  
It showcases coursework completed in the Full Stack Web Development program and is packaged as a Dockerized production build served with **NGINX**.

## 📌 Project Overview

The portfolio site contains the following sections:

### 1. **Basic Information**

- Displays name, contact details, and other relevant personal information.

### 2. **Work**

- Lists selected projects from the program.
- Each project includes:
  - Title
  - Description
  - Image
  - Link to live project or repository
  - Tech stack used

### 3. **Skills**

- Summarizes key skills, including:
  - Description of expertise
  - Languages and frameworks
  - Tools used

### 4. **Resources**

- Shows helpful learning resources, with:
  - Title
  - Icon or image
  - Summary
  - Link

## 🐳 Running the Portfolio with Docker

### 1. Build the Docker Image

docker build -t abao_marissa_coding_assignment14 .

### 2. Run the container

docker run -p 5575:80 abao_marissa_coding_assignment14

### 3. View in your browser

Open: http://localhost:5575
