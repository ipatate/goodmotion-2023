<template>
  <div class="pb-10 pt-4 not-prose">
    <!-- Errors -->
    <div
      v-if="Object.keys(errors).length"
      class="border border-red-200 bg-red-50 px-5 py-4 mb-8 text-red-900 text-sm"
      role="alert"
    >
      <ul class="list-none space-y-1">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>

    <!-- Success -->
    <div
      v-if="success"
      class="border border-green-100 rounded bg-green-50 px-5 py-4 mb-8 text-green-900 text-sm"
      role="alert"
    >
      {{ success }}
    </div>

    <form @submit.prevent="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-8">
      <!-- Email -->
      <label class="block">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Adresse email *</span
        >
        <input
          required
          type="email"
          v-model="email"
          name="email"
          placeholder="victor@monsupersite.com"
          class="w-full border-b border-primary-900/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-primary-600 transition-colors placeholder:text-primary-900/25"
          :class="{ 'border-red-400 focus:border-red-400': errors.email }"
        />
      </label>

      <!-- Name -->
      <label class="block">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Nom *</span
        >
        <input
          required
          type="text"
          v-model="name"
          name="name"
          placeholder="Victor Dupont"
          class="w-full border-b border-primary-900/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-primary-600 transition-colors placeholder:text-primary-900/25"
          :class="{ 'border-red-400 focus:border-red-400': errors.name }"
        />
      </label>

      <!-- URL -->
      <label class="block sm:col-span-2">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Site web actuel</span
        >
        <input
          type="url"
          name="url"
          ref="el"
          @blur="onUrlBlur"
          placeholder="https://monsupersite.com"
          class="w-full border-b border-primary-900/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-primary-600 transition-colors placeholder:text-primary-900/25"
          :class="{ 'border-red-400 focus:border-red-400': errors.url }"
        />
      </label>

      <!-- Subject -->
      <label class="block sm:col-span-2">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Sujet *</span
        >
        <div
          class="relative border-b border-primary-900/20 focus-within:border-primary-600 transition-colors"
          :class="{ 'border-red-400': errors.subject }"
        >
          <select
            required
            v-model="subject"
            name="subject"
            class="w-full appearance-none bg-transparent py-3 text-base focus:outline-none text-primary-900"
          >
            <option value="" disabled>Choisir un sujet</option>
            <option v-for="value in subjectSelect" :value="value" :key="value">{{ value }}</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-primary-900/40"
            aria-hidden="true"
          >
            <path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
          </svg>
        </div>
      </label>

      <!-- Message -->
      <label class="block sm:col-span-2">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Message *</span
        >
        <textarea
          required
          v-model="message"
          name="message"
          placeholder="Décrivez votre projet..."
          class="w-full border-b border-primary-900/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-primary-600 transition-colors placeholder:text-primary-900/25 resize-none"
          :class="{ 'border-red-400 focus:border-red-400': errors.message }"
          rows="5"
        ></textarea>
      </label>

      <!-- Honeypot -->
      <label class="flex items-center absolute -left-[9999px] -top-[9999px] overflow-hidden w-0 h-0">
        <input type="checkbox" v-model="check" name="check" class="mr-2" />
        <span>Ne pas sélectionner cet élément, c'est pour attraper les scripts</span>
      </label>

      <!-- Submit -->
      <div class="sm:col-span-2 pt-2">
        <input
          ref="submitButton"
          type="submit"
          value="Envoyer le message"
          class="w-full bg-primary-800 hover:bg-primary-700 text-white font-bold py-5 text-sm tracking-[0.12em] uppercase cursor-pointer transition-colors"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { useIMask } from "vue-imask";

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
const subject = ref("");
const message = ref("");
const check = ref(false);
const submitButton = ref();

const { el, masked } = useIMask({
  mask: /^\S*$/,
});

const onUrlBlur = () => {
  const val = masked.value.trim();
  if (val && !/^https?:\/\//i.test(val)) {
    masked.value = 'https://' + val;
  }
};


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
    fetch(CONTACT_URL, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        body: message.value,
        name: name.value,
        url: masked.value,
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
          masked.value = "";
          subject.value = "";
          success.value = "Message envoyé avec succès";
          setTimeout(() => {
            success.value = undefined;
          }, 4000)
        }
        submitButton.value.disabled = false;
        submitButton.value.value = "Envoyer le message";
      })
      .catch(() => {
        errors.value.send = "Une erreur est survenue";
      });
  }
};
</script>
