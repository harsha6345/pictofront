<template>
  <div>
    <div class="flex w-full px-5 py-4 items-center justify-between">
      <div class="flex items-center gap-x-2">
        <img
          src="https://picsum.photos/40/40/?random"
          alt=""
          class="rounded-full"
        />
        <div class="flex flex-col">
          <h6>Posted by Harsha</h6>
          <h6>September 2026</h6>
        </div>
      </div>
      <div class="flex justify-center pt-4 text-3xl gap-x-2 items-center">
        <div class="flex flex-col items-center">
          <ShareVue />
          <h6 class="text-xs">SHARE</h6>
        </div>
        <button @click="copyLink"><LinkchainVue /></button>
        <button @click="shareOnWhatsApp"><WhatsappVue /></button>
        <button @click="shareOnTwitter"><TwitterVue /></button>
        <button @click="shareOnTelegram"><TelegramVue /></button>
        <button @click="shareOnReddit"><RedditVue /></button>
      </div>
    </div>
    <div class="flex justify-center">
      <div>
        <div v-if="blog" class="blog-container">
          <h1 class="pt-7 pb-3">{{ blog.title }}</h1>

          <div class="flex justify-center py-3 px-4">
            <img :src="blog.thumbnail" alt="" class="max-w-[300px]" />
          </div>

          <div class="ql-editor" v-html="blog.content"></div>
        </div>
        <div v-else>
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import {
  RyuseiLight,
  none,
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
} from "@ryusei/light";
import "@ryusei/light/dist/css/themes/ryuseilight-ginga.min.css";
import TwitterVue from "../assets/Twitter.vue";
import FacebookVue from "../assets/Facebook.vue";
import TelegramVue from "../assets/Telegram.vue";
import WhatsappVue from "../assets/Whatsapp.vue";
import RedditVue from "../assets/Reddit.vue";
import LinkchainVue from "../assets/Linkchain.vue";
import ShareVue from "../assets/Share..vue";
import Clipboard from "clipboard";

RyuseiLight.register([none()]);
RyuseiLight.compose({
  Gutter,
  LineNumbers,
  Overlay,
  Copy,
  Caption,
  LanguageName,
});
const route = useRoute();
const blog = ref(null);

onMounted(async () => {
  const slug = route.params.slug;
  try {
    const response = await axios.get(`http://localhost:8000/api/blogs/${slug}`);
    blog.value = response.data[0];
    blog.value.content += `
        <style>
          h1 {
            font-size: 37px;
            color: white;
          }
          h2 {
            font-size: 30px;
            color: white;
          }
          h3 {
            font-size: 24px;
            color: white;
          }
          h4 {
            font-size: 20px;
            color: white;
          }
          p {
            font-size: 18px;
            color: white;
          }
        </style>
      `;
    setTimeout(() => {
      const ryuseilight = new RyuseiLight({ languageName: true });
      ryuseilight.apply("pre", {
        language: "none",
        copy: {
          html: "Copy",
          activeHtml: "Copied!",
        },

        lineNumbers: true,
      });
    }, 0);
  } catch (error) {
    console.error("Error fetching blog details:", error);
  }
});

const getCurrentURL = () => {
  const currentURL = window.location.href;
  const encodedURL = currentURL.includes(":")
    ? currentURL.replace(/:/g, "%3A")
    : encodeURIComponent(currentURL);
  return encodedURL;
};

const shareOnTwitter = () => {
  const url = getCurrentURL();
  const tweetText = encodeURIComponent("Check out this link!");
  window.open(
    `https://twitter.com/intent/tweet?url=${url}&text=${tweetText}`,
    "_blank"
  );
};

const shareOnWhatsApp = () => {
  const url = getCurrentURL();
  window.open(`https://api.whatsapp.com/send?text=${url}`, "_blank");
};

const shareOnTelegram = () => {
  const url = getCurrentURL();
  window.open(`https://t.me/share/url?url=${url}`, "_blank");
};

const shareOnReddit = () => {
  const url = getCurrentURL();
  window.open(`https://www.reddit.com/submit?url=${url}`, "_blank");
};
</script>

<style scoped>
/* Add specific styles for the Quill content wrapper */
.blog-container {
  max-width: 800px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the container horizontally */
}

* {
  color: white;
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.3);
  border-top: 8px solid #d60606;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

h1 {
  font-size: 37px;
  color: white;
}
h2 {
  font-size: 30px;
  color: white;
}
h3 {
  font-size: 24px;
  color: white;
}

h4 {
  font-size: 20px;
  color: white;
}

p {
  font-size: 18px;
  color: white;
}
</style>
