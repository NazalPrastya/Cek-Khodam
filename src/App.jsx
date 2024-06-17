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

const ListKhodam = [
  "Sepeda Listrik",
  "Harimau Sumatra",
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
  "Pop Mie",
  "Ikan Cakalang",
  "Belut",
  "Koaci",
  "Batu Bata",
  "Kolor",
  "Merpati",
  "Aligator",
  "Tisu Basah",
  "Galon",
  "Ember",
];

export default function App() {
  const [nama, setNama] = useState("");
  const [khodamImageUrl, setKhodamImageUrl] = useState("");
  const [khodam, setKhodam] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = () => {
    if (nama) {
      const filteredKhodam = ListKhodam.filter((k) => k);
      const randomKhodam =
        filteredKhodam[Math.floor(Math.random() * filteredKhodam.length)];
      let imageUrl = "";
      setKhodam(randomKhodam);
      if (randomKhodam === "Tidak Ada") {
        imageUrl = "/img/tidakada.jpeg";
      } else {
        const formattedKhodam = randomKhodam.toLowerCase().replace(/ /g, "-");
        imageUrl = `https://loremflickr.com/400/200/${encodeURIComponent(
          formattedKhodam
        )}`;
      }

      setKhodamImageUrl(imageUrl);
      handleOpen();
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-green-500 to-90% ...">
      <div className="container max-w-md">
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
            <div className="mt-5">
              <p className="italic text-center">
                Created by{" "}
                <a href="https://www.instagram.com/nazalprastya/?hl=id">
                  Nazal
                </a>
              </p>
            </div>
            <Result
              open={open}
              handleOpen={handleOpen}
              nama={nama}
              khodam={khodamImageUrl}
              namaKhodam={khodam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Result({ open, handleOpen, nama, khodam, namaKhodam }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Hasil</DialogHeader>
      <DialogBody>
        <h3 className="text-xl font-medium">Nama: {nama}</h3>
        <h4 className="text-xl font-medium">
          Khodam: <span className="font-semibold">{namaKhodam}</span>
        </h4>
        <div className="flex justify-center">
          <img
            src={khodam}
            alt={namaKhodam}
            className="mt-5 rounded-lg shadow-md text-center justify-center"
          />
        </div>
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
