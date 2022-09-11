<template>
  <span class="bg"></span>
  <v-app id="inspire">
    <v-app-bar color="#0b182b" prominent>
      <v-app-bar-nav-icon style="color:white;"
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white">Cyrus Quiz App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Cyrus Quiz App
          </v-list-item-title>
          <v-list-item-subtitle> Poggers </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation :value="value" color="primary">
      <v-btn>
        <span>Recents</span>

        <router-link role="button" to="/">
          <v-icon>mdi-history</v-icon>
        </router-link>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <router-link role="button" to="/quizapp">
          <v-icon>mdi-heart</v-icon>
        </router-link>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <router-link role="button" to="/about">
          <v-icon>mdi-map-marker</v-icon>
        </router-link>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    drawer: null,

    items: [
      { title: "Dashboard", icon: "mdi-monitor-dashboard", to: "/" },
      { title: "About", icon: "mdi-book-account", to: "/about" },
      {
        title: "Quiz App",
        icon: "mdi-pencil-box-multiple-outline",
        to: "/quizapp",
      },
    ],
  }),
};
</script>

<style>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1817&q=80")
    no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
}
</style>