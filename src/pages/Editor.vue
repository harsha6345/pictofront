<template>
  <section class="h-screen">
    <EditNav @fullScreen="enableFullScreen" />

    <section class="flex w-full" id="editor-container">
      <div class="codecontainer h-full w-1/2">
        <div
          class="code-controls h-[50px] w-full bg-black flex items-center px-2 py-1 justify-between"
        >
          <div class="flex text-white language-toggle">
            <button
              @click="changeLanguage('html')"
              class="text-md font-semibold tracking-wider uppercase flex items-center gap-x-[2px] px-3"
              :class="{
                'bg-pictored bg-opacity-50 py-1 px-3 rounded-md':
                  currentLanguage === 'html',
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
                />
                <path
                  fill="#F16529"
                  d="m64 116.8l36.378-10.086l8.559-95.878H64z"
                />
                <path
                  fill="#EBEBEB"
                  d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
                />
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
                />
              </svg>
              Html
            </button>
            <button
              @click="changeLanguage('css')"
              class="text-md font-semibold tracking-wider uppercase flex items-center gap-x-[2px] px-3"
              :class="{
                'bg-pictored bg-opacity-50 py-1 px-3 rounded-md':
                  currentLanguage === 'css',
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#1572b6"
                  d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z"
                />
                <path
                  fill="#33a9dc"
                  d="m16 27.858l8.17-2.265l1.922-21.532H16z"
                />
                <path
                  fill="#fff"
                  d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z"
                />
                <path
                  fill="#ebebeb"
                  d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z"
                />
                <path
                  fill="#fff"
                  d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z"
                />
                <path
                  fill="#ebebeb"
                  d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z"
                />
              </svg>
              Css
            </button>
            <button
              @click="changeLanguage('javascript')"
              class="text-md font-semibold tracking-wider uppercase flex items-center gap-x-[2px] px-3"
              :class="{
                'bg-pictored bg-opacity-50 py-1 px-3 rounded-md':
                  currentLanguage === 'javascript',
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 128 128"
              >
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
                />
              </svg>
              javascript
            </button>
          </div>
          <div class="flex items-center text-white gap-x-2">
            <button
              @click="formatFn"
              class="flex items-center gap-x-[1px] hover:text-pictored transition"
            >
              Format
              <magicWand :class="{ 'hover:text-pictored transition': true }" />
            </button>
            <button
              class="text-white hover:text-pictored transition relative"
              x-data="{openControls : false}"
            >
              <svg
                x-on:click="openControls = !openControls"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6"
                />
              </svg>
              <div
                x-show="openControls"
                x-on:click.away="openControls = false"
                x-transition
                class="absolute -bottom-20 right-0 z-10 bg-pictoblue2 px-3 py-2 rounded-md flex flex-col items-center gap-y-2"
                v-show="isControlsOpen"
              >
                <label for="fontSize" class="text-white">Font size : </label>
                <div class="flex items-center gap-x-1 text-white">
                  <span>8</span>
                  <input
                    type="range"
                    min="8"
                    max="40"
                    id="fontSize"
                    v-model="controls.fontSize"
                    @change="changeFontSize"
                  />
                  <span>40</span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div
          id="html-editor"
          class="w-full"
          v-show="currentLanguage == 'html'"
        ></div>
        <div
          id="css-editor"
          class="w-full"
          v-show="currentLanguage == 'css'"
        ></div>

        <div
          id="js-editor"
          class="w-full"
          v-show="currentLanguage == 'javascript'"
        ></div>
      </div>

      <div class="output-div w-1/2 bg-white flex flex-col z-20" id="output-div">
        <div id="output-iframe" class="h-full w-full">
          <iframe
            frameborder="0"
            class="w-full h-full"
            :srcdoc="computedSrcdoc"
            id="preview"
            allowfullscreen="allowfullscreen"
            webkitallowfullscreen
            mozallowfullscreen
            oallowfullscreen
            msallowfullscreen
          ></iframe>
        </div>
        <div class="virtual-console h-[200px] w-full bg-slate-800"></div>
      </div>
    </section>
  </section>
</template>

<script setup>
import "ace-builds/src-noconflict/ace.js";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github_dark.js";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-inline_autocomplete";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/worker-html";
import { html_beautify } from "js-beautify";
import { css_beautify } from "js-beautify";
import { js_beautify } from "js-beautify";
import screenfull from "screenfull";
import { onMounted, ref, computed } from "vue";
import { generateScript } from "../scripts/returnScript.js";
import Split from "split.js";

//Components
import EditNav from "../components/EditNav.vue";
import magicWand from "../assets/magicWand.vue";

//Data storage

const code = ref();
const currentLanguage = ref();
const isControlsOpen = ref(false);

const controls = ref({
  fontSize: 18,
});

//Language codes
let HtmlEditor;
let CssEditor;
let JsEditor;
const htmlCode = ref("<!--This is a comment-->");
const cssCode = ref("/*This is a comment*/");
const jsCode = ref("//This is a comment");
const computedSrcdoc = computed(() => {
  return `${htmlCode.value} <style>${cssCode.value}</style> ${generateScript(
    jsCode.value
  )}`;
});

const changeLanguage = (language) => {
  currentLanguage.value = language;
  aceinit();
};

const aceinit = () => {
  HtmlEditor = ace.edit("html-editor");
  ace.require("ace/ext/emmet");
  HtmlEditor.session.setMode(`ace/mode/html`);
  HtmlEditor.setTheme("ace/theme/github_dark");
  HtmlEditor.setOptions({
    fontSize: `${controls.value.fontSize}px`,
    useWorker: false,
    scrollSpeed: 5,
  });
  HtmlEditor.setValue(htmlCode.value);

  HtmlEditor.on("change", () => {
    htmlCode.value = HtmlEditor.getValue();
  });
  HtmlEditor.clearSelection();

  //Css

  CssEditor = ace.edit("css-editor");
  ace.require("ace/ext/emmet");
  CssEditor.session.setMode(`ace/mode/css`);
  CssEditor.setTheme("ace/theme/github_dark");
  CssEditor.setValue(cssCode.value);
  CssEditor.setOptions({
    fontSize: `${controls.value.fontSize}px`,
    useWorker: false,
    scrollSpeed: 5,
  });
  CssEditor.on("change", () => {
    cssCode.value = CssEditor.getValue();
  });
  CssEditor.clearSelection();

  //Js

  JsEditor = ace.edit("js-editor");
  ace.require("ace/ext/emmet");
  JsEditor.session.setMode(`ace/mode/javascript`);
  JsEditor.setTheme("ace/theme/github_dark");
  JsEditor.setValue(jsCode.value);
  JsEditor.setOptions({
    fontSize: `${controls.value.fontSize}px`,
    useWorker: false,
    scrollSpeed: 5,
  });
  JsEditor.on("change", () => {
    jsCode.value = JsEditor.getValue();
  });
  JsEditor.clearSelection();
};

//Editor controls

const changeFontSize = () => {
  aceinit();
};

const formatFn = () => {
  if (currentLanguage.value === "html") {
    const formattedhtml = html_beautify(htmlCode.value, { indent_size: 2 });
    htmlCode.value = formattedhtml;

    if (HtmlEditor) {
      HtmlEditor.setValue(htmlCode.value);
      HtmlEditor.clearSelection();
    }
  } else if (currentLanguage.value == "css") {
    const formattedcss = css_beautify(cssCode.value, { indent_size: 2 });
    cssCode.value = formattedcss;

    if (CssEditor) {
      CssEditor.setValue(cssCode.value);
      CssEditor.clearSelection();
    }
  } else if (currentLanguage.value == "javascript") {
    const formattedjs = js_beautify(jsCode.value, { indent_size: 2 });
    jsCode.value = formattedjs;

    if (JsEditor) {
      JsEditor.setValue(jsCode.value);
      JsEditor.clearSelection();
    }
  }
};

const enableFullScreen = () => {
  const element = document.getElementById("output-div");
  if (screenfull.isEnabled) {
    screenfull.request(element);
  }

  document.querySelector(".virtual-console").style.display = "none";
};

const openCodeControls = () => {
  isControlsOpen.value = !isControlsOpen.value;
};
//TODO : Write the execute code function

const executeCode = () => {};

onMounted(() => {
  currentLanguage.value = "html";

  aceinit();

  const editornav = document.getElementById("editor-nav");
  const editorcontainer = document.getElementById("editor-container");

  editorcontainer.style.height = `calc(100% - ${editornav.offsetHeight}px)`;

  const elements = ["html-editor", "css-editor", "js-editor"];

  for (const element of elements) {
    document.getElementById(element).style.height = `calc(100% - 50px)`;
  }

  //Splitting

  Split([".codecontainer", ".output-div"], {
    sizes: [50, 50],
    gutterSize: 5,
    minSize: [150, 150],
  });
});
</script>
<script>
//Virtual console functionality
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
