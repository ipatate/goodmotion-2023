<template>
  <div
    v-if="Object.keys(errors).length"
    class="bg-red-100 border border-red-400 not-prose text-red-700 px-5 py-3 rounded relative text-base"
    role="alert"
  >
    <ul class="list-disc list-inside">
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
  <div
    v-if="success"
    class="bg-green-100 border border-green-400 not-prose text-green-700 px-5 py-3 rounded relative text-base"
    role="alert"
  >
    <span class="block sm:inline">{{ success }}</span>
  </div>
  <form
    @submit.prevent="onSubmit"
    class="grid grid-cols-1 gap-4 max-w-lg not-prose"
  >
    <label for="name" class="block">
      <span class="text-gray-700 text-base">Votre nom/prénom</span>
      <input
        required
        type="text"
        v-model="name"
        name="name"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        :class="{ 'border-red-500': errors.name }"
      />
    </label>
    <label for="email" class="block">
      <span class="text-gray-700 text-base">Votre adresse email</span>
      <input
        required
        type="email"
        v-model="email"
        name="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        :class="{ 'border-red-500': errors.email }"
      />
    </label>
    <label for="message" class="block">
      <span class="text-gray-700 text-base">Votre message</span>
      <textarea
        required
        v-model="message"
        name="message"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        :class="{ 'border-red-500': errors.message }"
        rows="5"
      ></textarea>
    </label>
    <div>
      <input
        type="submit"
        value="Envoyer le message"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-base rounded"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const CONTACT_URL = import.meta.env.CONTACT_URL;

console.log(import.meta);

const errors: Ref<{ [key: string]: string }> = ref({});
const success: Ref<string | undefined> = ref();
const name = ref("");
const email = ref("");
const message = ref("");

const isEmail = (email: string) => {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const onSubmit = (event: Event) => {
  event.preventDefault();
  errors.value = {};
  success.value = undefined;
  if (name.value.length < 1) {
    errors.value.name = "Vous devez remplir le nom";
  }
  if (email.value.length < 1) {
    errors.value.email = "Vous devez remplir l'email";
  }
  if (!isEmail(email.value) && email.value.length > 1) {
    errors.value.email = "L'adresse email n'est pas valide";
  }
  if (message.value.length < 1) {
    errors.value.message = "Vous devez remplir le message";
  }
  if (Object.keys(errors.value).length === 0) {
    // use fetch API for send  form post request
    fetch(CONTACT_URL, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          name.value = "";
          email.value = "";
          message.value = "";
          success.value = "Message envoyé avec succès";
        }
      })
      .catch((error) => {
        errors.value.send = "Une erreur est survenue";
      });
  }
};
</script>
