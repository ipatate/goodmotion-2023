<template>
  <div class='inline-flex gap-1'
 :class="props.className">
      <span v-if="props.showFrom == true" class="text-xs text-gray-600">
        A partir de
      </span>
      <strong class="text-primary-900 relative font-bold">{{props.amount}}€ euros HT  <span v-if="props.suffix" v-html="props.suffix" /></strong>
      <span class="text-xs text-gray-600 italic" v-if="chf">(environ {{ chf }} HT)</span>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';

const PUBLIC_SITE_LOCALE = import.meta.env.PUBLIC_SITE_LOCALE || "fr";
const chf = ref(null);

const props = defineProps({
  amount: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  suffix: {
    type: String,
    required: false,
  },
  showFrom: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const fetchConvert = async () => {
  try {
    const response = await fetch(`https://sender.goodmotion.fr/api/convert/${props.amount}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(async () => {
  if (PUBLIC_SITE_LOCALE === 'ch') {
    const result = await fetchConvert();
    chf.value = new Intl.NumberFormat("fr-CH", { style: "currency", currency: "CHF" }).format(result.amount_chf);
  }
});
</script>
