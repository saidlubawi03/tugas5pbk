<template>
    <q-page padding>
      <div class="q-pa-md">
        <h1>Kontak Kami</h1>
        <p>
          Kami selalu siap untuk membantu Anda. Jika Anda memiliki pertanyaan, saran, atau keluhan, jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau informasi kontak yang tersedia.
        </p>
        
        <q-form @submit.prevent="submitForm">
          <q-input v-model="name" label="Nama" outlined required />
          <q-input v-model="email" label="Email" type="email" outlined required />
          <q-input v-model="message" label="Pesan" type="textarea" outlined required />
          
          <q-btn type="submit" label="Kirim" color="primary" class="q-mt-md" />
        </q-form>
        
        <div class="q-mt-lg">
          <h2>Informasi Kontak</h2>
          <p><strong>Alamat:</strong> Jl. Jend. Sudirman No. 123, Pekanbaru</p>
          <p><strong>Telepon:</strong> (+62) 81261797771</p>
          <p><strong>Email:</strong> BawiikGacor@gmail.com</p>
          
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      const name = ref('')
      const email = ref('')
      const message = ref('')
  
      const submitForm = () => {
        // Proses pengiriman formulir
        console.log('Formulir dikirim:', { name: name.value, email: email.value, message: message.value })
        alert('Pesan Anda telah terkirim. Terima kasih!')
        
        // Reset form
        name.value = ''
        email.value = ''
        message.value = ''
      }
  
      return {
        name,
        email,
        message,
        submitForm
      }
    }
  }
  </script>
  
  <style>
  .q-page {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1, h2 {
    color: #2c3e50;
  }
  
  p {
    color: #7f8c8d;
  }
  </style>
  