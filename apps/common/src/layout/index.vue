<template>
  <a-layout class="layout-demo">
    <a-layout-sider
      hide-trigger
      collapsible
      :collapsed="collapsed"
    >
      <div class="logo" />
      <a-menu
        :defaultOpenKeys="['1']"
        :defaultSelectedKeys="['0_3']"
        :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="0_1" @click="handleRole">
          <IconHome />
          Menu 1
        </a-menu-item>
        <a-menu-item key="0_2">
          <IconCalendar @click="handleRouter" />
          User
        </a-menu-item>
        <a-menu-item key="0_3" @click="handleMicroApp">
          <IconCalendar />
          MES
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px;">
        <a-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </a-button>
      </a-layout-header>
      <a-layout style="padding: 0 24px;">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <RouterView v-if="!isMicroApp" />
          <!-- <micro-app v-else baseroute='/sre' name="sre" inline disableSandbox url="http://192.168.1.222:8982" /> -->
          <micro-app v-else baseroute='/mes' name="mes" iframe url="http://192.168.1.222:8981" />
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { Message} from '@arco-design/web-vue';
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
} from '@arco-design/web-vue/es/icon';
import { RouterView } from 'vue-router';
import router from '@/router';
let isMicroApp = ref(false)
const collapsed = ref(false);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};
const handleRouter = () => {
  isMicroApp.value = false
  router.push('/systems/users')
}
const handleRole = () => {
  isMicroApp.value = false
  router.push('/systems/roles')
}
const handleMicroApp = () => {
  isMicroApp.value = true
}
const onClickMenuItem = (key: string) => {
    Message.info({ content: `You select ${key}`, showIcon: true });
  }
</script>
<style scoped >
.layout-demo {
  height: 100vh;
  overflow-y: hidden;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo{
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header)  {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content)  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>