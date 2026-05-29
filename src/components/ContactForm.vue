<template>
  <!-- WebMCP: Contact Form Component -->
  <div class="pb-10 pt-4 not-prose" id="contactForm" data-mcp-component="contact-form">
    <!-- WebMCP: Error Display Section -->
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

    <!-- WebMCP: Contact Form - Main form with field validation and submission -->
    <form @submit.prevent="onSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mt-8" data-mcp-form="contact">
      <!-- WebMCP: Email Field - Required email input for user contact -->
      <label class="block" data-mcp-field="email">
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
          data-mcp-input="email"
          data-mcp-required="true"
          data-mcp-type="email"
        />
      </label>

      <!-- WebMCP: Name Field - Required text input for user name -->
      <label class="block" data-mcp-field="name">
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
          data-mcp-input="name"
          data-mcp-required="true"
          data-mcp-type="text"
        />
      </label>

      <!-- WebMCP: URL Field - Optional URL input for user website -->
      <label class="block sm:col-span-2" data-mcp-field="url">
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
          data-mcp-input="url"
          data-mcp-required="false"
          data-mcp-type="url"
        />
      </label>

      <!-- WebMCP: Subject Field - Required select input for message subject -->
      <label class="block sm:col-span-2" data-mcp-field="subject">
        <span class="text-sm font-bold tracking-[0.2em] uppercase text-primary-900/90 block mb-2"
          >Sujet *</span
        >
        <div
          class="relative border-b border-primary-900/20 focus-within:border-primary-600 transition-colors"
          :class="{ 'border-red-400': errors.subject }"
          data-mcp-select-container
        >
          <select
            required
            v-model="subject"
            name="subject"
            class="w-full appearance-none bg-transparent py-3 text-base focus:outline-none text-primary-900"
            data-mcp-input="subject"
            data-mcp-required="true"
            data-mcp-type="select"
          >
            <option value="" disabled>Choisir un sujet</option>
            <option v-for="value in subjectSelect" :value="value" :key="value" data-mcp-option>{{ value }}</option>
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

      <!-- WebMCP: Message Field - Required textarea for user message -->
      <label class="block sm:col-span-2" data-mcp-field="message">
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
          data-mcp-input="message"
          data-mcp-required="true"
          data-mcp-type="textarea"
        ></textarea>
      </label>

      <!-- WebMCP: Honeypot Field - Hidden field for bot detection -->
      <label class="flex items-center absolute -left-[9999px] -top-[9999px] overflow-hidden w-0 h-0" data-mcp-field="honeypot">
        <input type="checkbox" v-model="check" name="check" class="mr-2" data-mcp-input="honeypot" />
        <span>Ne pas sélectionner cet élément, c'est pour attraper les scripts</span>
      </label>

      <!-- WebMCP: Submit Button - Form submission trigger -->
      <div class="sm:col-span-2 pt-2" data-mcp-submit-container>
        <input
          ref="submitButton"
          type="submit"
          value="Envoyer le message"
          class="w-full bg-primary-800 hover:bg-primary-700 text-white font-bold py-5 text-sm tracking-[0.12em] uppercase cursor-pointer transition-colors rounded-md"
          data-mcp-submit="contact-form"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// WebMCP: Contact Form Component Script
// Provides form state management, validation, and submission for user contact
import { ref } from "vue";
import type { Ref } from "vue";
import { useIMask } from "vue-imask";

const CONTACT_URL = import.meta.env.PUBLIC_CONTACT_URL;
// WebMCP: Subject options for contact form
const subjectSelect = [
  'Demande de devis',
  'Question sur un projet',
  'Maintenance',
  'Problème technique',
  'Autre'
]
// WebMCP: Form state variables
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

// WebMCP: URL field auto-formatting on blur
const onUrlBlur = () => {
  const val = masked.value.trim();
  if (val && !/^https?:\/\//i.test(val)) {
    masked.value = 'https://' + val;
  }
};


// WebMCP: Email validation function
const isEmail = (email: string) => {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// WebMCP: Form submission handler with validation
const onSubmit = (event: Event) => {
  event.preventDefault();
  errors.value = {};
  success.value = undefined;
  submitButton.value.disabled = true;
  submitButton.value.value = "Envoi en cours...";
  // WebMCP: Honeypot check - prevent bot submissions
  if (check.value) {
    return;
  }
  // WebMCP: Field validation - check required fields
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
  // WebMCP: Submit form data if validation passes
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
        // WebMCP: Handle successful form submission
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
        // WebMCP: Handle form submission error
        errors.value.send = "Une erreur est survenue";
      });
  }
};
</script>

<!-- WebMCP: ContactForm Component - End -->
