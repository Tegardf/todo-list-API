RESTFUL API espress Todo List
==============================

API ini dapat digunakan untuk membuat sebuah aplikasi todo list berbasis web dengan fitur login User menggunakan email dan password.

## demo

API ini dibuat dengan menggunakan express js dengan arsitektur REST serta menggunakan layanan cyclic sebagai servernya, database menggunakan MYSQL dengan menggunakan layanan gratis dari freedb sebagai SQL server.

link deploy:[https://witty-jade-quail.cyclic.app/](https://witty-jade-quail.cyclic.app/)

## environment

jika ingin mengaktifkan API ini sendiri didalam lokal, setelah melakukan clone, perlu dilakukan inisialisasi koneksi kepada database yang digunakan pada file environment.

...
DB_HOST = "host database"
DB_USERNAME = "username koneksi mysql"
DB_PASSWORD = "password koneksi mysql"
DB_DATABASE = "databse yang digunakan"
JWT_KEY = "secret key yang digunakan untuk membuat JSON web token"
...

## ENDPOINTS

tampilan rsponse awal dari API.
...
{
  "message": "welcome to Todo List API with express"
}
...

### A. Authentifikasi
setiap User dapat melakukan pendaftaran dan login serta memiliki beberapa todo list.

#### 1. Register
contoh penggunaan dengan metode POST:
...
https://witty-jade-quail.cyclic.app/auth/register
...

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
...
{
  "nama": "zoel2",
  "username": "tegar2",
  "email": "zeol@gmail.com",
  "password": "12345"
}
...
#### 2. login
contoh penggunaan dengan metode POST:
...
https://witty-jade-quail.cyclic.app/auth/register
...

contoh data yang dikirim didalam body (setiap key harus sesuai dengan contoh):
...
{
  "email": "zeol@gmail.com",
  "password": "12345"
}
...

contoh respon yang diterima:
...
{
  "message": "berhasil login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpvZWwiLCJpYXQiOjE3MDAwMDk1NjZ9.R7Rfal56KcHMOrjRIAFdaECuyhsfSQ_XFjwezsyEiPE"
}
...

### B. Todo list