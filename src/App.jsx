/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

const khodam = [
  "Sepeda Listrik",
  "Harimau Sumatra",
  "Celengan Kosong",
  "Pengumpul Makanan",
  "Kereta Api",
  "Macan Garut",
  "Domba Kuring",
  "Singa",
  "Jerapah",
  "Kucing Oren",
  "Vina Garut",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Tidak Ada",
  "Ayam Geprek",
  "Ayam Warna Warni",
  "Gajah Duduk",
  "Kambing Guling",
  "Babi Hutan",
  "Cangkul",
  "",
];

export default function App() {
  const [nama, setNama] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleSubmit = () => {
    if (nama) {
      handleOpen();
      const filteredKhodam = khodam.filter((k) => k);
      const randomKhodam =
        filteredKhodam[Math.floor(Math.random() * filteredKhodam.length)];
      setImageUrl(randomKhodam);
    }
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-green-500 to-90% ...">
      <div className="bg-white p-5 rounded-lg shadow-xl bg-opacity-40">
        <h1 className="text-5xl font-bold">Check Khodam</h1>
        <div className="w-full mt-10">
          <Input
            label="Nama"
            color="green"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            error={!nama}
            className="border-black"
          />
          <Button className="w-full mt-5" onClick={handleSubmit}>
            Submit
          </Button>
          {imageUrl && (
            <Result
              nama={nama}
              khodam={imageUrl}
              open={open}
              handleOpen={handleOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Result({ open, handleOpen, nama, khodam }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Hasil</DialogHeader>
      <DialogBody>
        <h3 className="text-xl font-medium">Nama: {nama}</h3>
        <h4 className="text-xl font-medium">
          Khodam: <span className="font-semibold">{khodam}</span>
        </h4>
        <img
          src={`https://picsum.photos/seed/${encodeURIComponent(
            khodam
          )}/360/200`}
          alt={khodam}
          className="mt-5 rounded-lg shadow-md"
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
