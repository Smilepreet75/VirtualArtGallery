# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Virtual Art Gallery


A full-stack virtual art gallery project that allows users to browse and view art pieces, create their own collections, and interact with other users.

Table of Contents
1. Introduction
2. Features
3. Technologies Used
4. Getting Started
5. API Endpoints
6. Database Schema
7. Contributing

1. Introduction:
The Virtual Art Gallery is a full-stack project that allows users to browse and view art pieces, create their own collections, and interact with other users. The project is built using HTML, CSS, JS, React.js, Node.js, and MySQL Workbench.

2. Features
Browse and view art pieces by category or artist
Create and manage collections of art pieces
Search for art pieces by title, artist, or category
Interact with other users by leaving comments and ratings on art pieces
User authentication and authorization using JWT

3. Technologies Used
HTML, CSS, and JS for the frontend
React.js for the frontend framework
Node.js for the backend server
MySQL Workbench for the database
JWT for user authentication and authorization
IDE WebStrome

The Virtual Art Gallery project has the following API endpoints:
app.post("/category", adminController.AddCategory);
app.get("/category", adminController.ReadCategory);
app.delete("/category/:id", adminController.DeleteCategory);
app.post("/admin-login", adminController.AdminLogin)
app.post('/change-password', adminAuthorization_HTTP_Request, adminController.AdminChangePassword);
app.post('/user-signup', userController.UserSignup)
app.post('/user-login', userController.UserSingIn)
app.post('/artist-signup', artistController.ArtistSignup);
app.post('/artist-login', artistController.ArtistLogin);
app.get('/manage-artist', artistController.ShowData);
app.get('/manage-art-work', artistController.Showartwork);
app.post('/manage-artist', artistController.UpdateStatus)
app.post('/manage-art-work', artistController.ManageArtWork)

Database Schema
The Virtual Art Gallery project has the following database schema:

users_signup table: Stores user information
id: Integer, primary key, auto-increment
fullname: String, unique
email: String, unique
password: String
mobile: number
address: string
city: string 
state: string

category: stores art category
id:  Integer, primary key, auto-increment
categoryname: string

admin: stores admin info
id: Integer, primary key, auto-increment
email: string
password: number
fullname: string

artits : store the info of artist
id: Integer, primary key, auto-increment
fullname: string
email: string
password: number
photo: file
gender: string
mobile: number
bio: string
status: string

artwork: store artwork 
id: Integer, primary key, auto-increment
category_id: int
title: string
description: string
price: number
discount: number
artist_id: int
photo: file

![Screenshot (225)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/23217871-2a01-4d32-b4c9-7a0385254736)

![Screenshot (226)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/e24b3cc8-4626-47d5-8573-00030c56c1cf)

![Screenshot (227)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/4837e21c-6d3a-47fd-a1f6-23a7ebc30cdc

![Screenshot (228)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/eb80e5f6-50d3-4fbf-9267-d8f8021f32ce)

![Screenshot (229)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/8b6eca8b-32cc-40f9-9cb4-76ea836058c8)

![Screenshot (230)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/4e6be4e4-a416-425e-a3d3-a0ff9de723fd)

![Screenshot (231)](https://github.com/Smilepreet75/VirtualArtGallery/assets/146861547/63bd84b5-119e-4542-bfd2-b06f4a3ef40f)



