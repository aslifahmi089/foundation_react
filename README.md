# React Component

## 1. Deskripsi

Mempelajari cara kerja komponen dalam React, meliputi sintaks komponen, pembuatan komponen, props, dan proses dasar rendering. Memahami perbedaan antara *function component* dan *class component*, serta bagaimana keduanya digunakan untuk membangun antarmuka pengguna (*user interface*) yang dapat digunakan kembali.

## 2. Tujuan Pembelajaran

- Memahami sintaks dasar komponen React menggunakan JSX.
- Membuat komponen menggunakan function component dan class component.
- Memahami cara kerja props untuk mengirimkan data ke komponen.
- Memahami proses rendering menggunakan JSX dan method `render()`.
- Mengetahui perbedaan struktur dan penggunaan function component dengan class component.

## 3. Implementasi

### A. Class Component

Class component adalah komponen React yang dibuat menggunakan sintaks `class` JavaScript dan mewarisi `Component` dari React. Komponen ini menggunakan method `render()` untuk menentukan tampilan antarmuka yang akan ditampilkan.

**Contoh kode:**

```jsx
import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Halo, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

**Penjelasan:**

- `import { Component } from 'react'` digunakan untuk mengimpor `Component` dari React.
- `class Greeting extends Component` digunakan untuk membuat class component bernama `Greeting`.
- `render()` digunakan untuk mengembalikan JSX yang menggambarkan tampilan komponen.
- `this.props.name` digunakan untuk mengakses data `name` yang diterima melalui props.

### B. Function Component

Function component adalah komponen React yang dibuat menggunakan fungsi JavaScript dan mengembalikan JSX untuk menentukan tampilan antarmuka.

**Contoh kode:**

```jsx
function Greeting({ name }) {
  return <h1>Halo, {name}!</h1>;
}

export default Greeting;
```

**Penjelasan:**

- `function Greeting({ name })` digunakan untuk membuat function component sekaligus mengambil nilai `name` dari props.
- `return` digunakan untuk mengembalikan JSX yang akan ditampilkan.
- `{name}` digunakan untuk menampilkan nilai yang diterima melalui props.

### C. Penggunaan Komponen dan Basic Rendering

Komponen yang telah dibuat dapat dipanggil di dalam komponen lain. Dengan menggunakan props, satu komponen dapat menampilkan data yang berbeda tanpa harus membuat komponen baru.

**Contoh kode `App.jsx`:**

```jsx
import Greeting from './Greeting';

export default function App() {
  return (
    <div>
      <Greeting name="Fahmi" />
      <Greeting name="Pembelajar React" />
    </div>
  );
}
```

**Output yang diharapkan:**

```text
Halo, Fahmi!
Halo, Pembelajar React!
```

Contoh tersebut menunjukkan bahwa komponen `Greeting` dapat digunakan berulang kali dengan nilai props yang berbeda. React kemudian merender tampilan berdasarkan data yang diterima oleh setiap komponen.

## 4. Proof of Understanding (Bukti Pemahaman)

Implementasi ini menjadi bukti pemahaman mengenai sintaks komponen React, pembuatan komponen, penggunaan props, dan proses dasar rendering.

Bukti pemahaman ditunjukkan melalui beberapa hal berikut:

1. Membuat class component menggunakan `Component` dan method `render()`.
2. Membuat function component yang mengembalikan JSX.
3. Mengirimkan data ke komponen menggunakan props.
4. Menggunakan kembali komponen yang sama dengan nilai props berbeda.
5. Menjelaskan perbedaan struktur dan sintaks antara function component dan class component.
6. Menjalankan implementasi untuk memastikan komponen dapat menampilkan output sesuai data yang diberikan.

**Tautan source code GitHub:** [Tambahkan tautan repository atau file kode di sini]

## 5. Kesimpulan

React Component memungkinkan antarmuka pengguna dibangun dari bagian-bagian kecil yang dapat digunakan kembali. Function component menggunakan fungsi JavaScript, sedangkan class component menggunakan sintaks kelas dan method `render()`. Props memungkinkan komponen menerima data dari komponen lain, sementara JSX digunakan untuk mendeskripsikan tampilan yang akan dirender oleh React.

## 6. Referensi

- [React — Component](https://react.dev/reference/react/Component)
- [React — Your First Component](https://react.dev/learn/your-first-component)
- [React — Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
