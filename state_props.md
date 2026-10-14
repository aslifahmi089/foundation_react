# React State & Props
## Implementasi

### A. Menggunakan useState

`useState` adalah React Hook yang digunakan untuk menambahkan state pada function component. State memungkinkan komponen menyimpan data dan memperbarui tampilan ketika nilainya berubah.

**Contoh kode:**

```jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Nilai: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </div>
  );
}
```

**Penjelasan:**

- `useState(0)` menginisialisasi state dengan nilai awal `0`.
- `count` menyimpan nilai state saat ini.
- `setCount` digunakan untuk memperbarui nilai state.
- `onClick` menjalankan fungsi ketika tombol diklik.
- Ketika tombol diklik, nilai `count` bertambah satu dan React memperbarui tampilan.

### B. Menggunakan Props

Props digunakan untuk mengirimkan data dari parent component ke child component. Props diterima oleh komponen dan diperlakukan sebagai data yang tidak diubah langsung oleh komponen penerima.

**Contoh kode:**

```jsx
function Greeting({ name }) {
  return <h2>Halo, {name}!</h2>;
}

export default function App() {
  return <Greeting name="Fahmi" />;
}
```

**Penjelasan:**

- `App` merupakan parent component.
- `Greeting` merupakan child component.
- `name="Fahmi"` mengirimkan data melalui props.
- `{ name }` mengambil nilai props untuk ditampilkan.

**Output:**

```text
Halo, Fahmi!
```

### C. Memahami Prop Drilling

Prop drilling adalah kondisi ketika props harus diteruskan melalui beberapa tingkat komponen agar dapat digunakan oleh komponen yang lebih dalam.

**Contoh kode:**

```jsx
function Child({ name }) {
  return <h2>Halo, {name}!</h2>;
}

function Parent({ name }) {
  return <Child name={name} />;
}

export default function App() {
  const name = 'Fahmi';

  return <Parent name={name} />;
}
```

**Penjelasan:**

- `App` memiliki data `name`.
- `App` meneruskan `name` kepada `Parent`.
- `Parent` meneruskan kembali `name` kepada `Child`.
- `Child` menggunakan props tersebut untuk menampilkan teks.

Contoh ini menunjukkan bahwa data dapat melewati beberapa komponen sebelum digunakan. Jika struktur aplikasi semakin kompleks, prop drilling dapat membuat pengelolaan props menjadi lebih sulit.

### D. Komunikasi Parent dan Child

Selain mengirimkan data dari parent ke child, komunikasi dapat dilakukan dengan mengirimkan callback function melalui props. Dengan cara ini, child dapat meminta parent memperbarui state.

**Contoh kode:**

```jsx
import { useState } from 'react';

function Child({ onChangeName }) {
  return (
    <button onClick={onChangeName}>
      Ubah Nama
    </button>
  );
}

export default function App() {
  const [name, setName] = useState('Fahmi');

  return (
    <div>
      <h2>Nama: {name}</h2>
      <Child onChangeName={() => setName('React Learner')} />
    </div>
  );
}
```

**Penjelasan:**

- `App` menyimpan nama menggunakan `useState`.
- `App` mengirimkan callback `onChangeName` kepada `Child`.
- Ketika tombol diklik, `Child` menjalankan callback tersebut.
- Callback memperbarui state milik `App`.
- React merender ulang tampilan sehingga nama berubah menjadi `React Learner`.

## Kesimpulan

State dan props merupakan konsep penting dalam pengelolaan data React. State digunakan untuk menyimpan dan memperbarui data yang dikelola oleh komponen, sedangkan props digunakan untuk mengirimkan data dan fungsi dari parent ke child. Prop drilling terjadi ketika props diteruskan melalui beberapa tingkat komponen. Dengan memahami konsep tersebut, komunikasi dan pengelolaan data antarkomponen dapat dilakukan secara lebih terstruktur.
