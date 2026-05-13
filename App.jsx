import { useState } from "react";

export default function PhoenixStore() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const products = {
    Steam: [
      { name: "Steam Bronze Random Key", price: "4 AZN", desc: "3$-29$" },
      { name: "Steam Gold Random Key", price: "6 AZN", desc: "8$-75$" },
      { name: "Steam Diamond Key", price: "8 AZN", desc: "15$-200$" },
    ],
    PSN: [
      { name: "PSN Wallet 10$", price: "5 AZN" },
      { name: "PSN Wallet 20$", price: "10 AZN" },
      { name: "PSN Wallet 30$", price: "15 AZN" },
    ],
    GooglePlay: [
      { name: "Google Play 5$", price: "2 AZN" },
      { name: "Google Play 10$", price: "5 AZN" },
      { name: "Google Play 15$", price: "8 AZN" },
    ],
  };

  const allProducts = Object.entries(products).flatMap(([cat, items]) =>
    items.map((item) => ({ ...item, cat }))
  );

  const filtered = allProducts.filter((item) => {
    const matchCategory = category === "All" || item.cat === category;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
        <div className="text-2xl font-bold text-cyan-400">
          PHOENIXSTORE.AZ
        </div>

        <input
          placeholder="Search products..."
          className="bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold">
          Login / Register
        </button>
      </header>

      {/* MUSIC BUTTON */}
      <div className="p-3 text-center">
        <button
          className="bg-purple-600 px-4 py-2 rounded-xl"
          onClick={() => {
            const audio = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
            audio.play();
          }}
        >
          🎵 Play Music
        </button>
      </div>

      {/* CATEGORY */}
      <div className="flex gap-3 p-4 flex-wrap">
        <button onClick={() => setCategory("All")} className="bg-zinc-800 px-3 py-1 rounded">
          All
        </button>
        {Object.keys(products).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="bg-zinc-800 px-3 py-1 rounded"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* STOCK WARNING */}
      <div className="bg-red-700 text-center p-4 text-xl font-bold">
        🔴 STOK STATUS: ADMIN CONTROLLED
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
          >
            <div className="text-sm text-gray-400">{item.cat}</div>
            <h2 className="text-xl font-bold mt-2">{item.name}</h2>

            {item.desc && (
              <p className="text-gray-400 mt-1">{item.desc}</p>
            )}

            <div className="text-cyan-400 text-2xl mt-3 font-bold">
              {item.price}
            </div>

            <button className="w-full mt-4 bg-cyan-500 text-black py-2 rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </div>

    </div>
  );
        }
