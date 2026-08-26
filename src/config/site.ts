export const siteConfig = {
  name: 'Sayur Online Bantul (SOB)',
  description: 'Toko sayur dan sembako lokal di Bantul, Yogyakarta. Belanja sayur online mudah, cepat, dan segar.',
  address: 'Jogonalan Kidul, Tirtonirmolo, Kec. Kasihan, Kabupaten Bantul, DIY 55184',
  coordinates: {
    lat: '-7.8286',
    lng: '110.3392' // These are approximate, need to be updated with real ones if necessary
  },
  whatsapp: '62895804069320',
  hours: '04.30–22.00 WIB',
  socials: [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
  ],
  categories: [
    {
      id: 'sayur-segar',
      title: 'Sayur Segar',
      description: 'Pesan sayuran segar langsung dari pasar.',
      whatsappTemplate: 'Halo SOB, saya mau pesan Sayur Segar...'
    },
    {
      id: 'sembako',
      title: 'Sembako',
      description: 'Kebutuhan pokok harian.',
      whatsappTemplate: 'Halo SOB, saya mau pesan Sembako...'
    },
    {
      id: 'buah',
      title: 'Buah-buahan',
      description: 'Buah segar pilihan.',
      whatsappTemplate: 'Halo SOB, saya mau pesan Buah-buahan...'
    }
  ]
};
