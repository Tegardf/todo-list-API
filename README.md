RESTFUL API espress Todo List
==============================

API ini dapat digunakan untuk membuat sebuah aplikasi todo list berbasis web dengan fitur login User menggunakan email dan password.


## Demo

API ini dibuat dengan menggunakan express js dengan arsitektur REST serta menggunakan layanan cyclic sebagai servernya, database menggunakan MYSQL dengan menggunakan layanan gratis dari freedb sebagai SQL server.

link deploy:[https://witty-jade-quail.cyclic.app/](https://witty-jade-quail.cyclic.app/)


## Environment

jika ingin mengaktifkan API ini sendiri didalam lokal, setelah melakukan clone, perlu dilakukan inisialisasi koneksi kepada database yang digunakan pada file environment.

```
DB_HOST = "host database"
DB_USERNAME = "username koneksi mysql"
DB_PASSWORD = "password koneksi mysql"
DB_DATABASE = "databse yang digunakan"
JWT_KEY = "secret key yang digunakan untuk membuat JSON web token"
```


## ENDPOINTS

contoh penggunaan:
```
https://witty-jade-quail.cyclic.app/
```
tampilan rsponse awal dari API.
```
{
  "message": "welcome to Todo List API with express"
}
```


### A. Authentifikasi
setiap User dapat melakukan pendaftaran dan login serta memiliki beberapa todo list.

#### 1. Register
contoh penggunaan dengan metode POST:
```
https://witty-jade-quail.cyclic.app/auth/register
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "nama": "zoel2",
  "username": "tegar2",
  "email": "zeol@gmail.com",
  "password": "12345"
}
```
#### 2. login
contoh penggunaan dengan metode POST:
```
https://witty-jade-quail.cyclic.app/auth/login
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "email": "zeol@gmail.com",
  "password": "12345"
}
```

contoh respon yang diterima:
```
{
  "message": "berhasil login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpvZWwiLCJpYXQiOjE3MDAwMDk1NjZ9.R7Rfal56KcHMOrjRIAFdaECuyhsfSQ_XFjwezsyEiPE"
}
```
token digunakan untuk dapat mengakses enpoint todos, sebagai authorization terhadap todo yang dimiliki oleh user


### B. Users

End point untuk dapat memanipulasi dan mengambil data user jika diperlukan

#### 1. mengambil semua data user

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/users/
```
contoh response yang didapatkan:
```
{
  "message": "berhasis mendapatkan data",
  "data": [
    {
      "id": 1,
      "nama": "zoel2",
      "username": "tegar2",
      "email": "zeol@gmail.com",
      "password": "$2b$10$5iFddq7GzWZBnFVsnWOVUeC5Ji/nFwAF8qoh2FB6sKUcZxxvrUDIW",
      "createdAt": "2023-11-15T00:50:01.000Z",
      "updatedAt": "2023-11-15T00:50:01.000Z"
    },
    {
      "id": 2,
      "nama": "tegar",
      "username": "tegar12",
      "email": "tegar@gmail.com",
      "password": "$2b$10$gwXkYWScm/2nayq.f.8Dn.IUGBDRaOykcEW1YNddG5e9f4vLmm/tu",
      "createdAt": "2023-11-13T19:45:29.000Z",
      "updatedAt": "2023-11-13T19:45:29.000Z"
    },
  ]
}
```

#### 2. mengambil data user berdasarkan id User

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/users/:id
```
contoh response yang didapatkan:
```
{
  "message": "berhasis mendapatkan data user",
  "data": {
    "id": 5,
    "nama": "zoel2",
    "username": "tegar2",
    "email": "zeol@gmail.com",
    "password": "$2b$10$5iFddq7GzWZBnFVsnWOVUeC5Ji/nFwAF8qoh2FB6sKUcZxxvrUDIW",
    "createdAt": "2023-11-15T00:50:01.000Z",
    "updatedAt": "2023-11-15T00:50:01.000Z"
  }
}
```

#### 3. menghapus data user berdasarkan Id

contoh penggunaan dengan metode DELETE:
```
https://witty-jade-quail.cyclic.app/users/:id
```

contoh response yang didapatkan:
```
success deleted user id:5
```

#### 4. menghapus semua data user

contoh penggunaan dengan metode DELETE:
```
https://witty-jade-quail.cyclic.app/users/
```

contoh response yang didapatkan:
```
success deleted all user
```


### C. Todos

untuk dapat menggunakan endpoint dari todos pada bagian header 'Authorization'  wajib untuk memasukkan token yang sudah didapatkan pada saat login sebelumnya untuk mengotorasi user yang telah login.

hasil todo dari end point yang didapatkan akan sesuai dari token user saat login.

#### 1. mengambil semua todo dari user

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/todos/
```

contoh response yang diterima:
```
{
  "message": "berhasil mendapatkan data todos dari user",
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "todo": "belajar react",
      "status": false,
      "detail": "aku akan belajar react dengan teman teman",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 2,
      "user_id": 1,
      "todo": "belajar belajar express",
      "status": false,
      "detail": "aku akan belajar express dengan teman teman",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    }
  ]
}
```

#### 2. mengambil semua todo yang terdapat pada table Todos

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/todos/all-user
```

contoh response yang diterima:
```
{
  "message": "berhasi mendapatkan semua Data todo",
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "todo": "belajar react",
      "status": false,
      "detail": "aku akan belajar react dengan teman teman",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 2,
      "user_id": 1,
      "todo": "belajar belajar express",
      "status": false,
      "detail": "aku akan belajar express dengan teman teman",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 3,
      "user_id": 2,
      "todo": "belajar motor",
      "status": false,
      "detail": "aku akan belajar ditempat kursus",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 4,
      "user_id": 2,
      "todo": "belajar mobil",
      "status": false,
      "detail": "aku akan belajar dilapangan bola",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 5,
      "user_id": 3,
      "todo": "makan",
      "status": false,
      "detail": null,
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 6,
      "user_id": 3,
      "todo": "minum",
      "status": false,
      "detail": null,
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    },
    {
      "id": 7,
      "user_id": 3,
      "todo": "nugas",
      "status": false,
      "detail": "tugas elektronika, rangkaian logika, javascript",
      "createdAt": "2023-11-13T19:42:34.000Z",
      "updatedAt": "2023-11-13T19:42:34.000Z"
    }
  ]
}
```

#### 3. mengambil todo berdasarkan id todo

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/todos/:id
```

contoh response yang diterima:
```
{
  "message": "berhasil mendapatkan todo dari id",
  "data": {
    "id": 1,
    "user_id": 1,
    "todo": "belajar react",
    "status": false,
    "detail": "aku akan belajar react dengan teman teman",
    "createdAt": "2023-11-13T19:42:34.000Z",
    "updatedAt": "2023-11-13T19:42:34.000Z"
  }
}
```

#### 4. mengambil detail dari todo berdsarkan id todo

contoh penggunaan dengan metode GET:
```
https://witty-jade-quail.cyclic.app/todos/detail/:id
```

contoh response yang diterima:
```
{
  "message": "berhasil mendapatkan detail todo dari id",
  "data_detail": "aku akan belajar react dengan teman teman"
}
```

#### 5. menambahkan todo baru

contoh penggunaan dengan metode POST:
```
https://witty-jade-quail.cyclic.app/todos/
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "todo":"coba todo kosong",
  "detail":"coba detail todo"
}
```

contoh response yang diterima:
```
{
  "message": "berhasil menambahkan Todo"
}
```

#### 6. melakukan update nilai todo

contoh penggunaan dengan metode PUT:
```
https://witty-jade-quail.cyclic.app/todos/1
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "todo":"coba update todo kosong"
}
```

contoh response yang diterima:
```
todo berhasil diupdate
```

#### 7. melakukan update datil dari todo

contoh penggunaan dengan metode PUT:
```
https://witty-jade-quail.cyclic.app/todos/detail/1
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "detail":"coba update detail todo"
}
```

contoh response yang diterima:
```
todo berhasil diupdate
```

#### 8. melakukan update status dari todo

contoh penggunaan dengan metode PUT:
```
https://witty-jade-quail.cyclic.app/todos/status/1
```

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
```
{
  "status":"true"
}
```

contoh response yang diterima:
```
todo berhasil diupdate
```

#### 9. menghapus todo berdasarkan id todo

contoh penggunaan dengan metode DELETE:
```
https://witty-jade-quail.cyclic.app/todos/1
```

contoh response yang diterima:
```
success deleted todo id: 1
```

#### 10. menghapus semua todo dari user

contoh penggunaan dengan metode DELETE:
```
https://witty-jade-quail.cyclic.app/todos/
```

contoh response yang diterima:
```
success deleted all todo user
```

