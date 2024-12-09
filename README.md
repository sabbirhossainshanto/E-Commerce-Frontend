# E-Commerce Application

The E-Commerce Application provides a comprehensive online shopping experience for users, vendors, and administrators. The platform is designed to be intuitive, responsive, and secure, enabling users to browse and purchase products, vendors to manage their shops, and administrators to monitor and control the system effectively. Built using modern web development technologies, this application ensures high performance, scalability, and professional-grade features like third-party payment integration and file storage.

## 🔗 Links

- [Live Frontend URL](https://e-commerce-rho-nine.vercel.app/)
- [Live Backend URL](https://e-commerce-backend-neon-seven.vercel.app/)

- **Technologies Used**

1. **Backend**
   - **Authentication:** JWT-based authentication.
   - **Database:** Relational database PostgreSQL with Prisma.
   - **Server:** Node.js with Express for handling APIs with Typescript.
   - **Image Uploads:** Cloudinary.
   - **Data Validation:** Zod.
   - **Others:** Nodemailer,multer,http-status,dotenv,ts-node-dev,cors,bcrypt,axios.
2. **Frontend**
   - **Framework:**NextJs with state management using Context API With Typescript..
3. **Payment Gateway**
   - Amarpay

---

- **Run Locally**

1. **Backend**
   Clone the project

```bash
  git clone https://github.com/sabbirhossainshanto/E-Commerce-Backend
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

## Environment Variables

```bash
DATABASE_URL="Your Database"
PORT=3000
BCRYPT_SALT_ROUND="12"
JWT_ACCESS_SECRET="your secret key"
JWT_ACCESS_EXPIRES_IN="10d"
JWT_REFRESH_SECRET="your secret key"
JWT_REFRESH_EXPIRES_IN="30d"
RESET_PASSWORD_SECRET="your secret key"
RESET_PASSWORD_EXPIRES_IN="5m"
SENDER_EMAIL="your email"
APP_PASSWORD="your password"
CLIENT_BASE_URL="http://localhost:3001"
SERVER_BASE_URL="http://localhost:3000"
PAYMENT_URL="Amarpay Payment url"
PAYMENT_VERIFY_URL="Amarpay Payment verifyurl"
STORE_ID="Your store id"
SIGNATURE_KEY="your signature key"
```

Start the server

```bash
  npm run dev
```

1. **Frontend**
   Clone the project

```bash
  git clone https://github.com/sabbirhossainshanto/E-Commerce-Frontend
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

## Environment Variables

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000/api/v1"
```

Start the server

```bash
  npm run dev
```

### **Roles and Responsibilities**

1. **Admin**

   - Manage users, vendors, and their shops.
   - Blacklist vendors and dynamically manage product categories.
   - Blacklist vendor shops to restrict their operations.
   - Monitor transactions and review platform activities.

2. **Vendor**
   - Create and manage shop details, including logo and description.
   - Add, edit, duplicate, or delete products with attributes like price, category, inventory, etc.
   - View customer reviews, ratings, and order history.
3. **Vendor**
   - Browse and filter products by price, category, and keywords.
   - Add items to the cart, compare products, and apply coupons at checkout.
   - View order history and leave reviews for purchased products.
   - Follow specific vendor shops for a personalized experience.
4. **User (Customer)**
   - Browse and filter products by price, category, and keywords.
   - Add items to the cart, compare products, and apply coupons at checkout.
   - View order history and leave reviews for purchased products.
   - Follow specific vendor shops for a personalized experience.
5. **Additional Features**
   - Flash sales section and recent product views.
   - Responsive design for mobile and desktop.
6. **Pagination**
   - Implement paginated APIs for all list-based data.
