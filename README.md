# 📘 Task Management API

A simple CRUD (Create, Read, Update, Delete) Task Management API that allows users to manage tasks with a **title**, **description**, and **status** (pending/completed).

---

## 🚀 Features

* Create a new task
* Get all tasks
* Get a task by ID
* Update a task
* Delete a task
* Filter tasks by status
* Mark task as completed

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JavaScript (ES6)**

---

# 📑 API Documentation

## ✅ 1. Create a Task

### **POST /api/tasks**

**Description:**
Create a brand-new task.

**Request Body:**

```json
{
  "title": "Buy groceries",
  "description": "Buy milk, eggs, and bread",
  "status": "pending"
}
```

**Response (201):**

* Returns the newly created task.

---

## ✅ 2. Get All Tasks

### **GET /api/tasks**

**Description:**
Retrieve all tasks.

**Response (200):**

* Returns an array of tasks.

---

## ✅ 3. Get a Single Task

### **GET /api/tasks/:id**

**Description:**
Retrieve a single task using its ID.

**Response (200):**

* Returns the task object.

**Response (404):**

* Task not found.

---

## ✅ 4. Update a Task

### **PUT /api/tasks/:id**

**Description:**
Update task title, description, or status.

**Request Body:**

```json
{
  "title": "Buy groceries and snacks",
  "description": "Milk, eggs, bread, biscuits",
  "status": "completed"
}
```

**Response (200):**

* Returns updated task.

---

## ✅ 5. Delete a Task

### **DELETE /api/tasks/:id**

**Description:**
Delete a task permanently.

**Response (200):**

* Success message.

**Response (404):**

* Task not found.

---

# ⭐ Optional Routes

## 🔍 Filter Tasks by Status

### **GET /api/tasks/filter?status=pending**

**Description:**
Get tasks filtered by `pending` or `completed`.

---

## ✔ Mark Task as Completed

### **PATCH /api/tasks/:id/complete**

**Description:**
Quickly mark a task as completed.

---

# 🗂 Folder Structure (Recommended)

```
project-folder/
│── controllers/
│   └── taskController.js
│── models/
│   └── taskModel.js
│── routes/
│   └── taskRoutes.js
│── config/
│   └── db.js
│── app.js
│── server.js
│── package.json
│── README.md
```

---

# 🧪 Testing

Use **Postman** or **Thunder Client** to test all routes:

* POST → Create task
* GET → Retrieve tasks
* PUT → Update task
* DELETE → Remove task
* PATCH → Mark complete

---

# 🏁 Getting Started

## 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd project-folder
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 4️⃣ Start the server

```bash
npm start
```

---

# 📩 Contribution

Pull requests are welcome!
Make sure your code follows the project structure and standards.

---

# 📜 License

This project is licensed under the **MIT License**.

---
