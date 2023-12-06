
# E-commerceBackend

[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.17.1-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen)](https://www.mongodb.com/)

A powerful and feature-rich Node.js backend for your e-commerce application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

E-commerceBackend is a comprehensive Node.js backend designed to empower your e-commerce platform with a wide range of features. It covers everything from order management to user authentication and product catalog features.

## Features

### User Management

- **User Registration:** Allow users to register with the platform.
- **User Login:** Enable users to log in securely.
- **User Authentication:** Implement authentication mechanisms for secure access.
- **User Authorization:** Manage user roles and permissions effectively.
- **Password Management:**
  - Forgot Password Token Request
  - Reset Password Request
  - Update Password Request

### Shopping Cart and Wishlist

- **Add to Cart:** Allow users to add products to their shopping cart.
- **Get Cart:** Retrieve the current contents of the shopping cart.
- **Empty Cart:** Provide an option to remove all items from the shopping cart.
- **Wishlist Operations:**
  - Add to Wishlist Request
  - Get Wishlist Request

### Orders

- **Create Order:** Enable users to place orders with various payment options.
- **Update Order:** Allow users to modify existing orders.
- **Get User Orders:** Retrieve a user's order history.
- **Cash Order Request:** Implement a request for creating cash orders.

### Coupons and Discounts

- **Apply Coupon:** Allow users to apply discount coupons.
- **Coupon Management:**
  - Create Coupon Request
  - Update Coupon Request
  - Get a Coupon Request

### Products

- **Product Operations:**
  - Get All Products Request
  - Get a Product Request
  - Create a Product Request
  - Update a Product Request
  - Delete Product Request
- **Product Categories:**
  - Get All Category Request
  - Get Category Request
  - Create Category Request
  - Update Category Request
  - Delete Category Request
- **Product Brands:**
  - Get All Brands Request
  - Get Brand Request
  - Create Brand Request
  - Update Brand Request
  - Delete Brand Request

### Ratings and Reviews

- **Product Ratings:** Allow users to rate and review products.
  - Rating Request

### Admin Operations

- **Admin Login:** Provide a secure login for administrators.
- **Admin Features:**
  - Upload Product Images Request
  - Get all users (Admin)
  - Delete a user (Admin)
  - Unblock a user (Admin)
  - Block a user (Admin)

### Miscellaneous

- **Refresh Token Request:** Implement a request for refreshing user tokens.
- **Get All Brands Request, Get Brand Request, Delete Brand Request, and Others:** Multiple changes across various requests.
- **Create a Product Request, Product Folder:** Organized product-related requests into a dedicated folder.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- ...

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Install dependencies:

   ```bash
   cd your-project
   npm install
   
   ```

## Usage

To integrate E-commerceBackend into your project, follow these steps:

1. Import the necessary modules:

   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   // Add other dependencies...
   ```

2. Configure routes and middleware:

   ```javascript
   const app = express();
   // Add middleware and routes...
   ```

3. Start the server:

   ```javascript
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

## Configuration

The following packages will be installed:

bcrypt@^5.1.1
body-parser@^1.20.2
cloudinary@^1.41.0
cookie-parser@^1.4.6
dotenv@^16.3.1
express@^4.18.2
express-async-handler@^1.2.0
jsonwebtoken@^9.0.2
mongoose@^8.0.1
morgan@^1.10.0
multer@^1.4.5-lts.1
nodemailer@^6.9.7
sharp@^0.33.0
slugify@^1.6.6
uniqid@^5.4.0


## API Documentation

For detailed information on API endpoints refer to the routes folder

## Database

E-commerceBackend utilizes MongoDB. Configure and document the database setup, schema, and any other important details.

## Testing
I have used postman to test the routes.

## Deployment

I have used render to deploy the website.The link below is a tutorial to watch the video.https://www.youtube.com/watch?v=bnCOyGaSe84

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- ...

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

Pull Request Process
Ensure any install or build dependencies are removed before the end of the layer when doing a build.
Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is SemVer.
You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
Code of Conduct
Our Pledge
In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

Our Standards
Examples of behavior that contributes to creating a positive environment include:

Using welcoming and inclusive language
Being respectful of differing viewpoints and experiences
Gracefully accepting constructive criticism
Focusing on what is best for the community
Showing empathy towards other community members
Examples of unacceptable behavior by participants include:

The use of sexualized language or imagery and unwelcome sexual attention or advances
Trolling, insulting/derogatory comments, and personal or political attacks
Public or private harassment
Publishing others' private information, such as a physical or electronic address, without explicit permission
Other conduct which could reasonably be considered inappropriate in a professional setting
Our Responsibilities
Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

Scope
This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [INSERT EMAIL ADDRESS]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

Attribution
This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4

## License

Copyright (c) 2023-2028 by Noah Ntabo.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments

i have found assistance throw various youtube channels and node.js documentation

---

Feel free to add or modify sections based on your project's specific needs
