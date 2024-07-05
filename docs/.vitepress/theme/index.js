// .vitepress/theme/index.js
import "./style.css";
import DefaultTheme from "vitepress/theme";
import MyLayout from "./base.vue";
export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
};
