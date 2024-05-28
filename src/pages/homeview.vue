<template>
  <q-page padding class="bg-light">
    <!-- Bagian Hero -->
    <div class="hero-section q-pa-md q-mb-md">
      <q-img src="../assets/download.jpeg" class="rounded-borders">
        <div class="absolute-bottom bg-black text-white text-center q-pa-md" style="opacity: 0.7;">
          <h1 class="q-mb-none">Selamat Datang di Toko Online Saya</h1>
          <p>Temukan produk terbaik dengan harga terbaik kami</p>
        </div>
      </q-img>
    </div>

    <!-- Carousel -->
    <q-carousel v-model="slide" height="600px" arrows infinite animated transition-prev="jump-right" transition-next="jump-left" control-color="black">
      <q-carousel-slide v-for="(image, index) in images" :key="index" :name="index.toString()">
        <q-img :src="image" class="full-width"></q-img>
        <div class="absolute-bottom bg-black text-white text-center q-pa-sm" style="opacity: 0.5;">
          <h3>Slide {{ index + 1 }}</h3>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Produk Unggulan -->
    <div class="q-pa-md q-mt-md">
      <h2 class="text-center q-mb-md">Produk Unggulan</h2>
      <div class="row justify-center">
        <q-card v-for="(product, index) in products" :key="index" class="my-card q-ma-sm">
          <q-img :src="product.image" class="card-img"></q-img>
          <q-card-section>
            <div class="text-h6">{{ product.name }}</div>
            <div class="text-subtitle1">{{ product.price }}</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat color="primary" label="Tambah ke Keranjang"></q-btn>
            <q-btn flat color="negative" label="Hapus" @click="deleteProduct(index)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: '0',
      images: [
        'https://i.ebayimg.com/images/g/uVkAAOSwkzhlhBZY/s-l1200.webp',
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/17/3c0ff396-1a05-4b1e-a2bd-6b1fba802934.jpg',
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/12/6/3b9e05fa-50d8-465d-9c5c-03a53a41da3a.jpg'
      ],
      products: [
        { name: 'Produk 1', price: 'Rp5.000.000', image: 'https://s0.bukalapak.com/img/50178712003/s-463-463/data.png.webp' },
        { name: 'Produk 2', price: 'Rp3.550.000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgV1p1SBFMkLetfmS2IDql5vTY9BIYkC0N-P4EacjyQI9bumsbgD_zq6z0WOUAvBo20s&usqp=CAU' },
        { name: 'Produk 3', price: 'Rp4.500.000', image: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/12/30/f6d6a1e0-8f26-48cc-83fe-2a8c3649137f.png' },
        { name: 'Produk 4', price: 'Rp10.000.000', image: 'https://sumeks.disway.id/upload/large/e98a98b675adb5a7f25eb3c3bd970d05.png' }
      ]
    }
  },
  methods: {
    deleteProduct(index) {
      this.products.splice(index, 1);
    }
  }
}
</script>

<style>
.hero-section {
  background: url('https://via.placeholder.com/1200x400?text=Hero+Section') no-repeat center center;
  background-size: cover;
}

.card-img {
  height: 225px;
  width: 100%;
}

.full-width {
  width: 100%;
}

.my-card {
  width: 250px;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
}

.bg-light {
  background-color: #f9f9f9;
}

.rounded-borders {
  border-radius: 10px;
}
</style>
