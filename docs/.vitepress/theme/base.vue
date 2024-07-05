<script setup>
import DefaultTheme from "vitepress/theme";
import { unref, computed } from 'vue'
import { useData } from "vitepress";
const { Layout } = DefaultTheme;
const { page } = useData();
import Comment from "./Comment.vue";
const isHome = computed(() => unref(page)?.filePath === "index.md");

</script>

<template>
  <Layout>
    <template #not-found>
      <div class="NotFound">
        <p class="code">404</p>
        <h1 class="title">页面丢失了哦</h1>
        <div class="divider"></div>
        <blockquote class="quote">過此相逢陌路人，都如元來曾相識。</blockquote>
        <div class="action">
          <a class="link" href="/" aria-label="go to home">返回首页</a>
        </div>
      </div>
    </template>
    <template #layout-bottom>
      <!-- footer -->
    </template>
    <template #doc-after>
      <Comment v-if="!isHome" :key="page.filePath"></Comment>
    </template>
  </Layout>
</template>
<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}
.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}
.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}
.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}
.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.action {
  padding-top: 20px;
}
.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: border-color 0.25s, color 0.25s;
}
</style>
