# via-feedback-api

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### To create another sqlite database delete ./src/database/database.sqlite file and run migration
```
yarn typeorm migration:run
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test
```

#

# EndPoints

## Sessions

### **POST** &emsp;&emsp;&nbsp; /api/sessions &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *Login user*

---
---

## Users

### **GET** &emsp;&emsp;&emsp; /api/users &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; *Get all users* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; *

### **GET** &emsp;&emsp;&emsp; /api/users/me &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *Get your information* &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; *

### **POST** &emsp;&emsp;&nbsp; /api/users &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *Create a new user*

---
---

## Feedbacks

### **GET** &emsp;&emsp;&emsp; /api/feedbacks/sent &emsp;&emsp;&emsp;&emsp; *Get yours sent feedbacks* &emsp;&emsp;&nbsp;&nbsp; *

### **GET** &emsp;&emsp;&emsp; /api/feedbacks/received &emsp;&emsp; *Get yours received feedbacks* &nbsp;&nbsp;&nbsp;&nbsp; *

### **GET** &emsp;&emsp;&emsp; /api/feedbacks/:id &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *Get a feedback* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *

### **POST** &emsp;&emsp;&nbsp; /api/feedbacks &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; *Create a  new feedback* &emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *

### **PUT** &emsp;&emsp;&emsp; /api/feedbacks/:id &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; *Update a feedback* &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; *

### **PUT** &emsp;&emsp;&emsp; /api/feedbacks/:id/viewed &emsp; *Update a feedback to viewed* &emsp; *

### **DELETE** &emsp;&nbsp; /api/feedbacks/:id &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; *Delete a feedback* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; *
---
---

#### * Authorization required

---
---

Registered emails

---

abadia@mail.com

beatriz@mail.com

caio@mail.com

daniel@mail.com

password: 123456
