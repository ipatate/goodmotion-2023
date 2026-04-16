<template>
  <div class="py-10 flex flex-col items-center">
    <div
      v-if="Object.keys(errors).length"
      class="bg-red-100 border border-red-400 not-prose text-red-700 px-5 py-3 rounded relative text-base max-w-3xl w-full"
      role="alert"
    >
      <ul class="list-disc list-inside">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div
      v-if="success"
      class="bg-green-100 border border-green-400 not-prose text-green-700 px-5 py-3 rounded relative text-base max-w-3xl w-full"
      role="alert"
    >
      <span class="block sm:inline">{{ success }}</span>
    </div>
    <form @submit.prevent="onSubmit" class="grid grid-cols-1 gap-3 max-w-3xl w-full not-prose mt-8">
      <label for="email" class="block">
        <span class="text-gray-700 text-base">Votre adresse email</span>
        <input
          required
          type="email"
          v-model="email"
          name="email"
          placeholder="victor@monsupersite.com"
          class="block border border-gray-300 px-2 w-full bg-white rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg py-4"
          :class="{ 'border-red-500': errors.email }"
        />
      </label>
      <label for="name" class="block">
        <span class="text-gray-700 text-base">Votre nom</span>
        <input
          required
          type="text"
          v-model="name"
          name="name"
          placeholder="Victor Dupont"
          class="block border border-gray-300 px-2 w-full bg-white rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg py-4"
          :class="{ 'border-red-500': errors.name }"
        />
      </label>
      <label for="url" class="block">
        <span class="text-gray-700 text-base">Url de votre site</span>
        <input
          type="url"
          v-model="url"
          name="url"
          placeholder="https://monsupersite.com"
          class="block border border-gray-300 px-2 w-full bg-white rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-lg py-4"
          :class="{ 'border-red-500': errors.url }"
        />
      </label>
      <label for="subject" class="block">
        <span class="text-gray-700 text-base">Sujet du message</span>
        <div class="border-gray-300 px-2 w-full bg-white border focus:ring rounded-md has-[select:focus]:border-indigo-300 has-[select:focus]:ring-indigo-200 has-[select:focus]:ring-opacity-50 flex items-center text-gray-500">
          <select
          required
          v-model="subject"
          name="subject"
          class="appearance-none flex-1 placeholder:text-body text-lg focus:outline-0 py-4 text-gray-800"
          :class="{ 'border-red-500': errors.subject }"
          >
            <option v-for="value in subjectSelect" :value="value" :key="value">{{ value }}</option>
          </select>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="pointer-events-none"><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"/></svg>
        </div>
      </label>
      <label for="message" class="block">
        <span class="text-gray-700 text-base">Votre message</span>
        <textarea
          required
          v-model="message"
          name="message"
          class="block border w-full px-2 rounded-md border-gray-300 bg-white focus:border-indigo-300 text-lg py-4 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          :class="{ 'border-red-500': errors.message }"
          rows="5"
        ></textarea>
      </label>
      <label for="check" class="flex items-center absolute -left-500 -top-2500">
        <input
          type="checkbox"
          v-model="check"
          name="check"
          class="mr-2 block rounded-md border-gray-300 focus:border-indigo-300 text-lg p-2 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          :class="{ 'border-red-500': errors.message }"
        />
        <span class="text-gray-700 text-base"
          >Ne pas sélectionner cet élément, c'est pour attraper les scripts</span
        >
      </label>
      <div class="pt-4 text-right">
        <input
          ref="submitButton"
          type="submit"
          value="Envoyer le message"
          class="bg-primary-800 hover:bg-primary-700 text-white font-bold py-2 px-4 text-base rounded cursor-pointer"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { set } from "astro:schema";
import { ref } from "vue";
import type { Ref } from "vue";
const CONTACT_URL = import.meta.env.PUBLIC_CONTACT_URL;
const subjectSelect = [
  'Demande de devis',
  'Question sur un projet',
  'Maintenance',
  'Problème technique',
  'Autre'
]
const errors: Ref<{ [key: string]: string }> = ref({});
const success: Ref<string | undefined> = ref();
const email = ref("");
const name = ref("");
const url = ref("");
const subject = ref("");
const message = ref("");
const check = ref(false);
const submitButton = ref();

const isEmail = (email: string) => {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const onSubmit = (event: Event) => {
  event.preventDefault();
  errors.value = {};
  success.value = undefined;
  submitButton.value.disabled = true;
  submitButton.value.value = "Envoi en cours...";
  if (check.value) {
    return;
  }
  if (email.value.length < 1) {
    errors.value.email = "Vous devez remplir l'email";
  }
  if (name.value.length < 1) {
    errors.value.name = "Vous devez remplir votre nom";
  }
  if (subject.value.length < 1) {
    errors.value.subject = "Vous devez remplir l'objet du message";
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
        email: email.value,
        body: message.value,
        name: name.value,
        url: url.value,
        subject: subject.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          email.value = "";
          message.value = "";
          name.value = "";
          url.value = "";
          subject.value = "";
          success.value = "Message envoyé avec succès";
          setTimeout(() => {
            success.value = undefined;
          }, 4000)
        }
        submitButton.value.disabled = false;
        submitButton.value.value = "Envoyer le message";
      })
      .catch((error) => {
        errors.value.send = "Une erreur est survenue";
      });
  }
};
</script>
