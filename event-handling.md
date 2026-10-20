# React Event Handling
### A. Menggunakan onClick

`onClick` merupakan event handler yang digunakan untuk menjalankan fungsi ketika pengguna mengeklik suatu elemen.

**Contoh kode:**

```jsx
import { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Jumlah klik: {count}</h2>
      <button onClick={handleClick}>
        Klik Saya
      </button>
    </div>
  );
}
```

**Penjelasan:**

- `useState(0)` menyimpan jumlah klik dengan nilai awal nol.
- `handleClick()` merupakan fungsi yang dijalankan ketika tombol diklik.
- `onClick={handleClick}` menghubungkan tombol dengan fungsi tersebut.
- `setCount(count + 1)` memperbarui jumlah klik setiap kali tombol ditekan.

**Output yang diharapkan:**

Ketika halaman dibuka, jumlah klik bernilai `0`. Setiap kali tombol **Klik Saya** ditekan, jumlah klik bertambah satu.

### B. Menggunakan onChange

`onChange` digunakan untuk menangani perubahan nilai pada elemen input, misalnya ketika pengguna mengetikkan teks.

**Contoh kode:**

```jsx
import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor="name">Nama:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Masukkan nama"
      />

      <p>Nama yang dimasukkan: {name}</p>
    </div>
  );
}
```

**Penjelasan:**

- `useState('')` menyimpan teks dengan nilai awal berupa string kosong.
- `value={name}` menghubungkan nilai input dengan state.
- `onChange={handleChange}` menjalankan fungsi ketika nilai input berubah.
- `event.target.value` mengambil teks yang sedang dimasukkan pengguna.
- `setName()` memperbarui state sehingga teks yang ditampilkan ikut berubah.

**Output yang diharapkan:**

Ketika pengguna mengetik `Fahmi`, teks di bawah input akan menampilkan:

```text
Nama yang dimasukkan: Fahmi
```

### C. Menggabungkan onClick dan onChange

Kedua event handler dapat digunakan bersama untuk membuat formulir sederhana yang menerima input pengguna dan menampilkan hasil setelah tombol ditekan.

**Contoh kode:**

```jsx
import { useState } from 'react';

export default function GreetingForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    setMessage(`Halo, ${name}!`);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Masukkan nama"
      />

      <button onClick={handleSubmit}>
        Tampilkan Sapaan
      </button>

      <p>{message}</p>
    </div>
  );
}
```

**Penjelasan:**

- `onChange` digunakan untuk menyimpan teks input ke dalam state `name`.
- `onClick` digunakan untuk menjalankan fungsi `handleSubmit`.
- `handleSubmit` membuat pesan berdasarkan nama yang dimasukkan.
- State `message` diperbarui sehingga React menampilkan sapaan pada halaman.

**Tautan source code GitHub:** [Tambahkan tautan repository atau file kode di sini]

Event handling memungkinkan aplikasi React merespons tindakan pengguna. `onClick` digunakan untuk menangani klik, sedangkan `onChange` digunakan untuk menangani perubahan nilai input. Ketika dikombinasikan dengan state, event handling memungkinkan tampilan aplikasi berubah secara dinamis sesuai interaksi pengguna.
