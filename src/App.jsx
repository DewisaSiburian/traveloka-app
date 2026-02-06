import React, { useState } from 'react';

// Data maskapai dengan logo dari sumber yang stabil
const flightData = [
  { 
    id: 1, 
    airline: "AirAsia Indonesia", 
    logo: "https://tse4.mm.bing.net/th/id/OIP.VT_SdQCioREkYtrRyZ2TxQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta", 
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 639378,
    duration: "1j 45m",
    baggage: "20kg",
    transit: "Langsung"
  },
  { 
    id: 2, 
    airline: "Batik Air Malaysia", 
    logo: "https://i.pinimg.com/736x/c5/c0/8b/c5c08b65a449e320cd7a8b23bf86e250.jpg", 
    fromCode: "KUL", 
    toCode: "CGK", 
    fromCity: "Kuala Lumpur",
    toCity: "Jakarta",
    date: "Sab, 21 Feb 2026",
    price: 649865,
    duration: "2j 15m",
    baggage: "30kg",
    transit: "1 transit"
  },
  { 
    id: 3, 
    airline: "Scoot", 
    logo: "https://15below.com/sites/default/files/images/customers/scoot_450x300px.png", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta",
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 658100,
    duration: "1j 45m",
    baggage: "0kg",
    transit: "Langsung"
  },
  { 
    id: 4, 
    airline: "Garuda Indonesia", 
    logo: "https://talk-incorporation.com/wp-content/uploads/2017/12/cdr-logo-garuda-indonesia.png", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta",
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 1250000,
    duration: "1j 45m",
    baggage: "30kg",
    transit: "Langsung"
  },
  { 
    id: 5, 
    airline: "Citilink", 
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/28/b3/be/28b3be98-fc28-1e1c-d7ea-86ad43017f67/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta",
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 912200,
    duration: "1j 50m",
    baggage: "20kg",
    transit: "Langsung"
  },
  { 
    id: 6, 
    airline: "Lion Air", 
    logo: "https://tse1.mm.bing.net/th/id/OIP.qUTKcT7PygpxvMRkardfFgHaFf?rs=1&pid=ImgDetMain&o=7&rm=3", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta",
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 721500,
    duration: "1j 45m",
    baggage: "15kg",
    transit: "Langsung"
  },
  { 
    id: 7, 
    airline: "Singapore Airlines", 
    logo: "https://tse3.mm.bing.net/th/id/OIP.E4kkqIjr7yvb-ZRaj-Zq4QHaHo?rs=1&pid=ImgDetMain&o=7&rm=3", 
    fromCode: "CGK", 
    toCode: "SIN", 
    fromCity: "Jakarta",
    toCity: "Singapore",
    date: "Sel, 24 Feb 2026",
    price: 1850000,
    duration: "1j 45m",
    baggage: "35kg",
    transit: "Langsung"
  },
  { 
    id: 8, 
    airline: "Malaysia Airlines", 
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e71d6f68217805.5b55acd4a85d1.jpg", 
    fromCode: "KUL", 
    toCode: "CGK", 
    fromCity: "Kuala Lumpur",
    toCity: "Jakarta",
    date: "Rab, 25 Feb 2026",
    price: 1250000,
    duration: "2j",
    baggage: "30kg",
    transit: "Langsung"
  },
  { 
    id: 9, 
    airline: "Thai Airways", 
    logo: "https://logotaglines.com/wp-content/uploads/2022/06/Thai-Airways-International-Logo-Tagline-Slogan-Founder-Owner.jpg", 
    fromCode: "BKK", 
    toCode: "CGK", 
    fromCity: "Bangkok",
    toCity: "Jakarta",
    date: "Kam, 26 Feb 2026",
    price: 1350000,
    duration: "3j 30m",
    baggage: "30kg",
    transit: "1 transit"
  },
  { 
    id: 10, 
    airline: "Vietnam Airlines", 
    logo: "https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/6024e61b2966ac821d80fbe7_VNA_lockup_darkbg.png", 
    fromCode: "HAN", 
    toCode: "SIN", 
    fromCity: "Hanoi",
    toCity: "Singapore",
    date: "Jum, 27 Feb 2026",
    price: 850000,
    duration: "2j 45m",
    baggage: "25kg",
    transit: "Langsung"
  },
];

// Tambah data sampai 25 item
const createFullData = () => {
  const fullData = [...flightData];
  while (fullData.length < 25) {
    fullData.push(...flightData.slice(0, Math.min(flightData.length, 25 - fullData.length)));
  }
  return fullData.slice(0, 25).map((item, index) => ({
    ...item,
    id: index + 1,
    price: item.price + Math.floor(Math.random() * 100000)
  }));
};

const fullData = createFullData();

// Data tiket untuk halaman 3
const ticketOptions = [
  {
    id: 1,
    name: "Economy",
    price: 438235,
    features: [
      "Bagasi kabin 10 kg",
      "Bagasi check-in 0 Kg",
      "Tidak bisa reschedule",
      "Tidak bisa refund",
      "E-tiket terbit hingga 24 jam setelah pembayaran",
      "Kebijakan refund/reschedule berbeda dengan maskapai"
    ],
    promo: "Promo penerbangan pertama"
  },
  {
    id: 2,
    name: "Economy",
    price: 462000,
    features: [
      "Bagasi kabin 10 kg",
      "Bagasi check-in 0 Kg",
      "Biaya reschedule mulai dari Rp 717.000",
      "Tidak bisa refund",
      "Kursi standar (Jarak kursi 28 inci)",
      "Tata kursi 3-3"
    ]
  },
  {
    id: 3,
    name: "Economy | Paket e-SIM",
    price: 538305,
    features: [
      "Bagasi kabin 10 kg",
      "Bagasi check-in 0 Kg",
      "Tidak bisa reschedule",
      "Tidak bisa refund",
      "2 GB per Hari (4G) selama 5 Hari oleh GoHub",
      "E-tiket terbit hingga 24 jam setelah pembayaran",
      "Kebijakan refund/reschedule berbeda"
    ]
  },
  {
    id: 4,
    name: "Economy | Aman",
    price: 577235,
    features: [
      "Bagasi kabin 10 kg",
      "Bagasi check-in 0 Kg",
      "Tidak bisa reschedule",
      "Refund 100% Dari Hari",
      "Asuransi Perjalanan",
      "E-tiket terbit hingga 24 jam setelah pembayaran",
      "Kebijakan refund/reschedule berbeda"
    ]
  }
];

function App() {
  const [page, setPage] = useState('home');
  const [selectedFlight, setSelectedFlight] = useState(flightData[0]);
  const [selectedFilter, setSelectedFilter] = useState('semua');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
    setPage('detail');
    window.scrollTo(0, 0);
  };

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
    setPage('ticketSelection');
    window.scrollTo(0, 0);
  };

  const handleBookTicket = () => {
    setPage('booking');
    window.scrollTo(0, 0);
  };

  const filterFlights = () => {
    if (selectedFilter === 'semua') return fullData;
    if (selectedFilter === 'langsung') return fullData.filter(f => f.transit === 'Langsung');
    if (selectedFilter === 'transit') return fullData.filter(f => f.transit !== 'Langsung');
    return fullData;
  };

  const filteredFlights = filterFlights();

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* NAVBAR */}
      <nav className="bg-white p-4 border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
            <img 
              src="https://clipground.com/images/logo-traveloka-png-7.png" 
              alt="Traveloka" 
              className="h-8 w-auto" 
            />
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <span>IDR | ID</span>
            <span className="text-blue-600 cursor-pointer">Promo</span>
            <span className="cursor-pointer">Bantuan</span>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50">Log In</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Daftar</button>
          </div>
        </div>
      </nav>

      {/* TAB MENU */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex gap-6 px-4 py-3 text-sm font-medium overflow-x-auto">
          <div 
            className={`${page === 'home' ? 'text-blue-500 border-b-2 border-blue-500' : ''} pb-1 cursor-pointer whitespace-nowrap`}
            onClick={() => setPage('home')}
          >
            Tiket Pesawat
          </div>
          <div className="cursor-pointer whitespace-nowrap hover:text-blue-500">Hotel</div>
          <div className="cursor-pointer whitespace-nowrap hover:text-blue-500">Xperience</div>
          <div className="cursor-pointer whitespace-nowrap hover:text-blue-500">Tiket Kereta Api</div>
          <div className="cursor-pointer whitespace-nowrap hover:text-blue-500">Tiket Bus & Travel</div>
        </div>
      </div>

      {/* KONTEN */}
      {page === 'home' ? (
        <div className="max-w-7xl mx-auto p-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mb-6">
            <h1 className="text-2xl font-bold mb-2">Harga Tiket Pesawat: Selalu Promo di Traveloka</h1>
            <p className="mb-4">Pesan tiket pesawat online dengan harga murah dan promo menarik</p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded font-bold">Lihat Semua Promo</button>
              <p className="text-sm">Gunakan kode 'FLYOVERSEANOW' untuk diskon hingga Rp250.000</p>
            </div>
          </div>

          {/* Filter */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex gap-4">
              <button 
                className={`px-4 py-2 rounded ${selectedFilter === 'semua' ? 'bg-blue-100 text-blue-600 font-bold' : 'bg-gray-100'}`}
                onClick={() => setSelectedFilter('semua')}
              >
                Semua
              </button>
              <button 
                className={`px-4 py-2 rounded ${selectedFilter === 'langsung' ? 'bg-blue-100 text-blue-600 font-bold' : 'bg-gray-100'}`}
                onClick={() => setSelectedFilter('langsung')}
              >
                Langsung
              </button>
              <button 
                className={`px-4 py-2 rounded ${selectedFilter === 'transit' ? 'bg-blue-100 text-blue-600 font-bold' : 'bg-gray-100'}`}
                onClick={() => setSelectedFilter('transit')}
              >
                Transit
              </button>
            </div>
          </div>

          {/* Grid Tiket - DIUBAH MENJADI 2 KOLOM */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Hasil Pencarian ({filteredFlights.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFlights.map((flight) => (
                <div 
                  key={flight.id} 
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer border hover:border-blue-300 transition-all duration-300"
                  onClick={() => handleFlightClick(flight)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white border rounded-lg flex items-center justify-center shadow-sm">
                        <img 
                          src={flight.logo} 
                          alt={flight.airline} 
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/40?text=Airline";
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{flight.airline}</p>
                        <p className="text-sm text-gray-500">{flight.transit}</p>
                      </div>
                    </div>
                    {flight.id <= 3 && (
                      <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">PROMO</span>
                    )}
                  </div>

                  <h3 className="font-bold text-xl mb-3">{flight.fromCode} → {flight.toCode}</h3>
                  <p className="text-gray-600 mb-4">{flight.date}</p>
                  
                  <div className="flex gap-6 text-sm text-gray-700 mb-6">
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{flight.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎒</span>
                      <span>{flight.baggage}</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Sekali Jalan</p>
                        <p className="text-sm text-blue-600 font-bold">Lihat Detail</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-500">Rp {flight.price.toLocaleString('id-ID')}</p>
                        <p className="text-sm text-gray-500">/orang</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jump to Top */}
          <div className="text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-600 font-bold hover:text-blue-800"
            >
              Jump to Top ↑
            </button>
          </div>
        </div>
      ) : page === 'detail' ? (
        <div className="max-w-7xl mx-auto p-4">
          {/* Header Detail */}
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold">
                  {selectedFlight.fromCity} ({selectedFlight.fromCode}) → {selectedFlight.toCity} ({selectedFlight.toCode})
                </h1>
                <p className="text-gray-600 mt-2">
                  {selectedFlight.date} | 1 penumpang | Economy
                </p>
              </div>
              <button 
                onClick={() => setPage('home')}
                className="text-blue-600 font-bold hover:text-blue-800"
              >
                ← Kembali
              </button>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-3 md:mb-0">
                  <p className="font-bold text-white">Raya Sale</p>
                  <p className="text-white">Diskon Bagasi s.d. 20%</p>
                  <p className="text-white text-sm">Gunakan kode 'FLYOVERSEANOW'</p>
                </div>
                <div className="bg-white px-4 py-2 rounded">
                  <p className="text-orange-600 font-bold">FLYOVERSEANOW</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filter */}
            <div className="lg:w-1/4">
              <div className="bg-white p-4 rounded-xl shadow sticky top-24">
                <h3 className="font-bold mb-4">Filter</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-sm mb-3">Jumlah transit</h4>
                  <div className="space-y-2">
                    {['Langsung', '1 transit', '2+ transits'].map((type, idx) => (
                      <label key={idx} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <span className="flex items-center gap-2">
                          <input type="radio" name="transit" defaultChecked={idx === 0} />
                          {type}
                        </span>
                        <span className="text-sm font-bold">
                          {type === 'Langsung' ? `Rp ${selectedFlight.price.toLocaleString('id-ID')}` : 
                           type === '1 transit' ? 'Rp 1.651.510' : 'Rp 2.100.000'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-sm mb-3">Maskapai</h4>
                  <div className="space-y-2">
                    {['AirAsia Indonesia', 'Batik Air', 'Scoot', 'Garuda Indonesia', 'Citilink'].map((airline, idx) => (
                      <label key={idx} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <span className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked={idx === 0 || idx === 2} />
                          {airline}
                        </span>
                        <span className="text-sm">
                          {airline === 'AirAsia Indonesia' ? 'Rp 758.700' :
                           airline === 'Batik Air' ? 'Rp 777.600' :
                           airline === 'Scoot' ? `Rp ${selectedFlight.price.toLocaleString('id-ID')}` :
                           airline === 'Garuda Indonesia' ? 'Rp 1.250.000' :
                           'Rp 912.200'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2 text-blue-600 border border-blue-600 rounded font-bold hover:bg-blue-50">
                  Reset
                </button>
              </div>
            </div>

            {/* List Penerbangan */}
            <div className="lg:w-3/4">
              {/* Info */}
              <div className="bg-white p-4 rounded-xl shadow mb-4">
                <p className="text-sm text-gray-700">
                  Pesan penerbangan pertamamu? Gunakan kode 'FLYOVERSEANOW' untuk diskon hingga Rp250.000!
                </p>
              </div>

              {/* Cards */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow mb-4 hover:shadow-lg border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Airline Info */}
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white border rounded flex items-center justify-center">
                          <img 
                            src={selectedFlight.logo} 
                            alt={selectedFlight.airline}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{selectedFlight.airline}</p>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">EKONOMI</span>
                        </div>
                      </div>
                      {i === 0 && (
                        <p className="text-green-600 text-sm font-bold">Hemat Rp 12.333</p>
                      )}
                    </div>

                    {/* Flight Schedule */}
                    <div className="md:w-2/4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-center">
                          <p className="text-xl font-bold">11:20</p>
                          <p className="text-sm text-gray-600">{selectedFlight.fromCode}</p>
                        </div>
                        <div className="flex-1 px-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-700">{selectedFlight.duration}</p>
                            <div className="relative mt-1">
                              <div className="h-1 bg-gray-300"></div>
                              <div className="absolute top-1/2 left-0 w-2 h-2 bg-gray-500 rounded-full transform -translate-y-1/2"></div>
                              <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-500 rounded-full transform -translate-y-1/2"></div>
                            </div>
                            <p className="text-green-600 text-sm font-bold mt-1">{selectedFlight.transit}</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold">14:05</p>
                          <p className="text-sm text-gray-600">{selectedFlight.toCode}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="md:w-1/4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-500">Rp {(selectedFlight.price + i * 50000).toLocaleString('id-ID')}</p>
                        <p className="text-sm text-gray-600 mb-3">/orang</p>
                        <button 
                          onClick={() => handleSelectTicket(ticketOptions[i % ticketOptions.length])}
                          className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                        >
                          Pilih
                        </button>
                        {i === 0 && (
                          <p className="text-xs text-gray-500 mt-2">Termurah • Durasi tersingkat</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-green-600 font-bold">✓ Keuntungan Tambahan</span>
                      <span>✓ Refund</span>
                      <span>✓ Reschedule</span>
                      <span className="text-blue-600 font-bold">Promo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : page === 'ticketSelection' ? (
        <div className="max-w-6xl mx-auto p-4">
          {/* Header */}
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Pilih jenis tiket</h1>
                <div className="text-gray-700">
                  <p className="font-bold">Pergi</p>
                  <p>Jakarta → Singapore</p>
                  <p>Kam, 5 Mar 2026</p>
                </div>
              </div>
              <button 
                onClick={() => setPage('detail')}
                className="text-blue-600 font-bold hover:text-blue-800"
              >
                ← Kembali
              </button>
            </div>

            {/* Flight Info */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-white border rounded flex items-center justify-center">
                    <img 
                      src={selectedFlight.logo} 
                      alt={selectedFlight.airline}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{selectedFlight.airline}</p>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Economy</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">22:10</p>
                  <p className="text-sm text-gray-600">CGK</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-700">Langsung • 1j 50m</p>
                  <div className="relative mt-1">
                    <div className="h-1 bg-gray-300 w-32"></div>
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-gray-500 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-gray-500 rounded-full transform -translate-y-1/2"></div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">01:00 (+1h)</p>
                  <p className="text-sm text-gray-600">SIN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Options */}
          <div className="space-y-4">
            {ticketOptions.map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-xl shadow hover:shadow-lg border">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{ticket.name}</h3>
                      {ticket.promo && (
                        <p className="text-blue-600 text-sm mt-1">
                          <a href="#promo" className="underline">{ticket.promo}</a>
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-orange-500">Rp {ticket.price.toLocaleString('id-ID')}</p>
                      <p className="text-sm text-gray-500">/org</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {ticket.features.map((feature, idx) => (
                      <p key={idx} className="text-gray-700 flex items-start gap-2">
                        <span>•</span>
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleBookTicket}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                  >
                    Pilih
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : page === 'booking' ? (
        <div className="max-w-6xl mx-auto p-4">
          {/* Header */}
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">traveloka</h1>
                <h2 className="text-xl font-bold text-gray-700">Data Pemesan (untuk E-tiket/Voucher)</h2>
              </div>
              <button 
                onClick={() => setPage('ticketSelection')}
                className="text-blue-600 font-bold hover:text-blue-800"
              >
                ← Kembali
              </button>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                Dapatkan penawaran dan keuntungan spesial dari akun Traveloka.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Form Section */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nama depan & tengah (cth: BUDI SETIAWAN)*
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: BUDI SETIAWAN"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Sesuai KTP/paspor/SIM (tanpa tanda baca atau gelar)
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nama belakang (cth: WIRYOSAPUTRO)*
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contoh: WIRYOSAPUTRO"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Nama penumpang hanya satu kata
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      No. Handphone*
                    </label>
                    <div className="flex">
                      <div className="w-24 p-3 border border-r-0 rounded-l-lg bg-gray-50 flex items-center">
                        +62
                      </div>
                      <input 
                        type="tel" 
                        className="flex-1 p-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="812345678"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Contoh: +62812345678, untuk Kode Negara (+62) dan No. Handphone 0812345678
                    </p>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-bold text-lg mb-4">Masuk atau Daftar</h3>
                    <p className="text-gray-600 mb-4">
                      Masuk untuk mendapatkan penawaran spesial dan akses ke riwayat pemesanan.
                    </p>
                    <div className="flex gap-4">
                      <button className="flex-1 border border-blue-500 text-blue-500 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                        Masuk
                      </button>
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow sticky top-24">
                <h3 className="font-bold text-lg mb-6">Ringkasan Penerbangan</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Pergi</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="font-bold">Jakarta (CGK)</p>
                        <p className="text-sm text-gray-600">1j 50m • Langsung</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Singapore (SIN)</p>
                        <p className="text-sm text-gray-600">Jun, 6 Mar 2026 01:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white border rounded flex items-center justify-center">
                        <img 
                          src={selectedFlight.logo} 
                          alt={selectedFlight.airline}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm">{selectedFlight.airline}</span>
                      <span className="text-sm text-gray-500">• Economy</span>
                    </div>
                  </div>
                </div>

                {/* Rincian Harga */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Rincian Harga</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Harga tiket</span>
                      <span className="font-bold">Rp {selectedTicket ? selectedTicket.price.toLocaleString('id-ID') : '508.235'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Biaya layanan</span>
                      <span className="font-bold">Rp 0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pajak</span>
                      <span className="font-bold">Rp 70.000</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Harga yang Anda bayar</span>
                        <span className="text-orange-500">Rp {selectedTicket ? (selectedTicket.price + 70000).toLocaleString('id-ID') : '578.235'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mb-4">
                  <p>2</p>
                  <p className="font-bold">Pembayaran</p>
                </div>

                <button className="w-full bg-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors">
                  Lanjut ke Pembayaran
                </button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>4</p>
           </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;