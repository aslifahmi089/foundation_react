# JSX (JavaScript XML)

## 1. Pengertian

JSX adalah ekstensi sintaks JavaScript yang memungkinkan kita menulis markup menyerupai HTML di dalam JavaScript. JSX umum digunakan dalam React untuk mendeskripsikan tampilan antarmuka pengguna.

## 2. Konsep Dasar JSX

Beberapa aturan dasar JSX yang saya pahami:

- JSX dapat digunakan untuk menulis struktur tampilan di dalam JavaScript.
- Jika terdapat beberapa elemen, elemen tersebut harus dibungkus dalam satu elemen induk atau menggunakan Fragment (`<>...</>`).
- Setiap tag harus ditutup dengan benar.
- Atribut `class` pada HTML ditulis sebagai `className` dalam JSX.
- Ekspresi JavaScript dapat dimasukkan ke dalam JSX menggunakan kurung kurawal `{}`.

## 3. Contoh JSX

```jsx
function MenuCard() {
  const namaMenu = "Nasi Goreng";
  const harga = 20000;

  return (
    <div className="menu-card">
      <h2>{namaMenu}</h2>
      <p>Harga: Rp{harga.toLocaleString("id-ID")}</p>
    </div>
  );
}

export default MenuCard;
```

## 4. Analisis Kode

- `function MenuCard()` mendefinisikan komponen React.
- `namaMenu` dan `harga` menyimpan data yang akan ditampilkan.
- `return` mengembalikan struktur JSX.
- `{namaMenu}` dan `{harga.toLocaleString("id-ID")}` menyisipkan ekspresi JavaScript ke dalam JSX.
- `className` digunakan untuk memberikan kelas CSS pada elemen.

## 5. Kesimpulan

Saya memahami konsep dasar JSX dan cara menggunakannya untuk menampilkan data JavaScript dalam antarmuka React. Saya masih perlu berlatih membuat komponen, menggunakan props, serta menggabungkan JSX dengan state dan event handling.
