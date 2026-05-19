<template>
  <div class='inline-flex px-2 pb-2 gap-1'
 :class="props.className">
      <span class="text-xs text-gray-600">
        A partir de
      </span>
      <strong class="text-primary-900 relative top-0.5 font-bold">{{props.amount}}€ euros HT</strong>
      <span class="text-xs text-gray-600" v-if="chf"> environ {{ chf }} HT</span>
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
