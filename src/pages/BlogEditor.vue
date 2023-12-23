<template>
  <div class="px-6 py-5 bg-white w-9/12 h-full">
    <div ref="editor" />
    <input
      type="file"
      ref="fileInput"
      style="display: none"
      @change="insertImage"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

const editor = ref(null);
const fileInput = ref(null);

onMounted(() => {
  var toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    ["code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["clean"], // remove formatting button
    [{ image: "Insert image" }], // image button
  ];

  const quill = new Quill(editor.value, {
    theme: "snow", // You can choose a different theme if needed
    modules: {
      toolbar: toolbarOptions,
      imageResize: {
        displaySize: true, // This enables resizing images
      },
      imageDrop: true,
      image: {
        toolbar: [
          "imageResize",
          "imageRotateLeft",
          "imageRotateRight",
          "imageFlipVertical",
          "imageFlipHorizontal",
        ],
      },
    },
  });

  // Emit the content when it changes
  quill.on("text-change", () => {
    const content = quill.root.innerHTML;
    // Here, you can emit or perform any action with the updated content
    console.log(content);
  });

  // Assign the file input reference to handle image uploads
  fileInput.value = quill
    .getModule("toolbar")
    .container.querySelector("input[type=file]");
});

// Function to handle inserting images into the editor
const insertImage = () => {
  const file = fileInput.value.files[0];
  if (file) {
    const quillEditor = editor.value.__quill;
    const range = quillEditor.getSelection();
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = e.target.result;
      quillEditor.clipboard.dangerouslyPasteHTML(
        range.index,
        `<img src="${imageData}" alt="image" />`
      );
    };

    reader.readAsDataURL(file);
  }
};
</script>

<style scoped></style>
