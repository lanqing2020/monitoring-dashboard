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
    <div class="logo-wrap flex-layout">
      <img alt="logo" class="logo" src="../assets/logo.png" width="28" height="28" />
      <span class="text">FinCorp</span>
    </div>
    <div class="menu-wrap flex-layout flex-direction-column">
      <div class="menu menu-up">
        <ul>
          <li v-for="(item, index) in menuUpItems" :key="index" :class="item.active ? 'active flex-layout' : 'flex-layout'">
            <div class="item-main flex-layout">
              <div class="img-wrap flex-layout">
                <img class="menu-icon" :src="item.icon" :alt="item.icon" width="22" height="22" />
              </div>
              <span>{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="menu menu-down">
        <ul>
          <li v-for="(item, index) in menuDownItems" :key="index">
            <div class="item-main flex-layout">
              <img class="menu-icon" :src="item.icon" :alt="item.icon" width="22" height="22" />
              <span>{{ item.name }}</span>
            </div>
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

<style scoped lang="less">
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
    padding: 0 15px;
    height: 55px;
    align-items: center;
    justify-content: flex-start;
    .logo {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }
    .text {
      font-size: 22px;
      font-weight: 700;
      color: white;
    }
  }
  .menu-wrap {
    flex: 1;
    padding: 5px 0;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    .menu {
      width: 100%;
      ul {
        li {
          width: 100%;
          height: 48px;
          cursor: pointer;
          align-items: center;
          .item-main {
            width: 95%;
            height: 44px;
            align-items: center;
            justify-content: flex-start;
            padding: 0 15px;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
            border-right: 1px solid transparent;
            position: relative;
            .img-wrap {
              width: 28px;
              height: 28px;
              margin-right: 10px;
              align-items: center;
              justify-content: center;
              .menu-icon {
                width: 22px;
                height: 22px;
              }
            }
            span {
              color: #9497aa;
            }
            &::before {
              position: absolute;
              content: "";
              width: 97%;
              height: 1px;
              background: transparent;
              top: -2px;
              left: 0;
            }
            &::after {
              position: absolute;
              content: "";
              width: 97%;
              height: 1px;
              background: transparent;
              bottom: -2px;
              left: 0;
            }
          }
        }
        li.active {
          .item-main {
            background: #0337a4;
            border-radius: 0 6px 6px 0;
            border-top-color: #04125d;
            border-bottom-color: #012885;
            border-right-color: #0638ab;
            span {
              color: white;
            }
            &::before {
              background: #02022a;
            }
            &::after {
              background: #02022a;
            }
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
