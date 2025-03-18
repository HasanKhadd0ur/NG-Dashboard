
## **📌 Angular Dashboard Project**  

### **📜 Table of Contents**  
- [📌 Angular DashboardProject](#-angular-dashboaard-project)  
- [📜 Table of Contents](#-table-of-contents)  
- [📦 Project Structure](#-project-structure)  
- [🛠 Architecture - Vertical Slice](#-architecture---vertical-slice)  
- [🚀 Getting Started](#-getting-started)  
- [📌 Available Scripts](#-available-scripts)  
- [🌍 Deployment](#-deployment)  
- [📜 License](#-license)  

---

## **📦 Project Structure**  
```plaintext
.
├── dist/                # Production build output
├── node_modules/        # Dependencies
├── public/              # Public assets
├── src/                 # Source code
│    ├── app/            
│    │   ├── core/         # Core module (config, services, guards, interceptors, constants)
│    │   │   ├── config/   # Configuration settings
│    │   │   ├── services/ # Common services (Auth, Storage, Caching)
│    │   │   ├── guards/   # Route guards for authentication and authorization
│    │   │   ├── interceptors/ # HTTP interceptors (e.g., JWT)
│    │   │   ├── constants/ # Global constants
│    │   ├── slices/  
│    │   │   ├── users/    # Users module (services, models, store, views)
│    │   │   │   ├── models/  
│    │   │   │   ├── services/ 
│    │   │   │   ├── store/  
│    │   │   │   ├── components/ 
│    │   │   │   └── views/ # Global constants
│    │   │   └──...
│    │   │     
│    │   ├── shared/       # Shared module (components, directives, pipes)
│    ├── environments/    # Environment configurations
│    ├── main.ts          # Main entry point
│    ├── index.html       # Main HTML file
│    ├── styles.scss      # Global styles
│    ├── app.module.ts    # Root module
│    └── ...              
├── .editorconfig        # Code formatting rules
├── .gitignore           # Git ignore rules
├── angular.json         # Angular CLI configuration
├── package.json         # Dependencies and scripts
├── package-lock.json    # Dependency lock file
├── tsconfig.app.json    # TypeScript app configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.spec.json   # TypeScript test configuration
└── README.md            # This file
```
---

## **🛠 Architecture - Vertical Slice**  
This project follows the **Vertical Slice Architecture**, where each feature (or "slice") is structured as a **self-contained unit** rather than being separated into generic layers.  

### **✅ Benefits of Vertical Slice Architecture**  
- **Encapsulation:** Each slice contains everything needed for that feature (UI, services, state management).  
- **Scalability:** New features can be added without affecting existing ones.  
- **Better Code Organization:** Instead of grouping by technical concerns (e.g., all services together), features are grouped together, making them easier to navigate and maintain.  

### **📌 Example - Users Feature**  
Each feature has its own folder with all related files:
```plaintext
slices/
│── users/              
│   ├── models/       # User-related TypeScript interfaces/models
│   ├── services/     # API calls and business logic for users
│   ├── store/        # NgRx store files for user state management
│   ├── components/   # UI components specific to users
│   └── views/        # User pages or views
```
This structure makes it **easier to work on individual features** without affecting the rest of the application.

---

## **🚀 Getting Started**  

### **📥 1. Install Dependencies**  
Make sure you have **Node.js** and **npm** installed. Then run:  
```sh
npm install
```

### **🛠️ 2. Start Development Server**  
To start the project locally, run:  
```sh
npm start
```
This will start a development server at `http://localhost:4200/`.

---

## **📌 Available Scripts**  

| Command               | Description                                      |
|-----------------------|--------------------------------------------------|
| `npm start`          | Runs the app in development mode (`ng serve`)     |
| `npm run build`      | Builds the app for production (`ng build`)        |
| `npm run test`       | Runs unit tests (`ng test`)                       |
| `npm run lint`       | Checks for linting issues (`ng lint`)             |

---

## **🌍 Deployment**  

You can deploy your Angular project to **GitHub Pages** using the following steps:

### **1. Install Angular CLI GitHub Pages Deploy Package**
```sh
npm install -g angular-cli-ghpages
```

### **2. Build the Project for Production**
```sh
ng build --configuration production --base-href "https://your-username.github.io/your-repo-name/"
```

### **3. Deploy to GitHub Pages**
```sh
npx angular-cli-ghpages --dir=dist/your-project-name
```
After this, your project will be live on:  
🔗 `https://your-username.github.io/your-repo-name/`

---

## **📜 License**  
This project is licensed under the **MIT License**.  