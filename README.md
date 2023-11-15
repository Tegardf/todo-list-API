RESTFUL API espress Todo List
==============================

API ini dapat digunakan untuk membuat sebuah aplikasi todo list berbasis web dengan fitur login User menggunakan email dan password.


## demo

API ini dibuat dengan menggunakan express js dengan arsitektur REST serta menggunakan layanan cyclic sebagai servernya, database menggunakan MYSQL dengan menggunakan layanan gratis dari freedb sebagai SQL server.

link deploy:[https://witty-jade-quail.cyclic.app/](https://witty-jade-quail.cyclic.app/)


## environment

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

