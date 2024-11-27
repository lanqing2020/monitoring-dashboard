<script setup lang="ts">
import {reactive} from "vue";

const menuUpItems = reactive([
  { id: 0, icon: "", name: "Dashboard", active: true },
  { id: 1, icon: "", name: "Clients", active: false },
  { id: 2, icon: "", name: "Policies", active: false },
  { id: 3, icon: "", name: "Claims", active: false },
  { id: 3, icon: "", name: "Providers", active: false },
  { id: 3, icon: "", name: "Renewals", active: false },
  { id: 3, icon: "", name: "Reports", active: false },
  { id: 3, icon: "", name: "Chats", active: false },
  { id: 3, icon: "", name: "My Calendar", active: false }
])
const menuDownItems = reactive([
  { id: 0, icon: "", name: "Help", active: false },
  { id: 1, icon: "", name: "Notifications", active: false }
])
</script>

<template>
  <div class="sidebar flex-layout flex-direction-column">
    <div class="logo-wrap">
      <img alt="logo" class="logo" src="" width="28" height="28" />
      <span class="text">FinCorp</span>
    </div>
    <div class="menu-wrap">
      <div class="menu menu-up">
        <ul>
          <li v-for="(item, index) in menuUpItems" :key="index" :class="item.active ? 'active' : ''">
            <div class="border1 width100per height1" />
            <div class="border2 width100per height1" />
            <div class="item-main flex-layout">
              <img class="menu-icon" :src="item.icon" :alt="item.icon" width="22" height="22" />
              <span>{{ item.name }}</span>
            </div>
            <div class="border2 width100per height1" />
            <div class="border1 width100per height1" />
          </li>
        </ul>
      </div>
      <div class="menu menu-down">
        <ul>
          <li v-for="(item, index) in menuDownItems" :key="index">
            <img class="menu-icon" :src="item.icon" :alt="item.icon" width="22" height="22" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="user">
      <div class="user-info">
        <div class="info-name">Melinda Jesell</div>
        <div class="info-contact">melinda@fincorp.com</div>
      </div>
      <div class="user-avatar">
        <img alt="user-avatar" class="avatar-img" width="34" height="34" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 180px;
  height: 100%;
  background-color: #040848;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 15px 0 0 15px;
  border-left: 1px solid #e1eafb;
  .logo-wrap {
    width: 100%;
    height: 55px;
    .text {
      font-size: 16px;
    }
  }
  .menu-wrap {
    flex: 1;
    width: 100%;
    .menu {
      ul {
        li {
          width: 100%;
          height: 48px;
          cursor: pointer;
          .item-main {
            width: 95%;
            height: 44px;
            align-items: center;
            justify-content: flex-start;
            padding: 0 15px;
            img {
              margin-right: 10px;
            }
            span {
              color: #9497aa;
            }
          }
          .border1 {
            background: transparent;
          }
          .border2 {
            background: transparent;
          }
        }
        li.active {
          .item-main {
            background: #0337a4;
            border-radius: 0 6px 6px 0;
            span {
              color: white;
            }
          }
          .border1 {
            background: #050543;
          }
          .border2 {
            background: #04125d;
          }
        }
      }
    }
  }
  .user {
    width: 100%;
    height: 71px;
  }
}
</style>
