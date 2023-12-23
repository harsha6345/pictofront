<template>
  <form @submit.prevent="submitFn">
    <!-- Include CSRF Token -->
    <input type="hidden" name="_token" v-model="csrfToken" />

    <input type="file" ref="fileInput" name="image" id="image" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const fileInput = ref(null);
const csrfToken = ref("");

const submitFn = async () => {
  try {
    // Fetch CSRF Token from Laravel backend with appropriate headers
    const csrfResponse = await axios.get("http://localhost:8000/csrf-token", {
      withCredentials: true, // To allow sending cookies in cross-origin requests
    });
    csrfToken.value = csrfResponse.data.csrfToken;

    // Prepare form data
    const formData = new FormData();
    const file = fileInput.value.files[0];
    formData.append("image", file);
    formData.append("_token", csrfToken.value); // Include CSRF token in form data

    // Upload file with CSRF token included
    const uploadResponse = await axios.post(
      "http://localhost:8000/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // To allow sending cookies in cross-origin requests
      }
    );

    console.log("Upload successful", uploadResponse);
    // Handle the response or do something with it
  } catch (error) {
    console.error("Error uploading file", error);
    // Handle the error
  }
};
</script>
