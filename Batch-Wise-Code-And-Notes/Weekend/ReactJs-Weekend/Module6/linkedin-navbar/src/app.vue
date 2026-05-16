<template>
  <div
    style="
      margin: 0;
      padding: 0;
      background-color: #f3f2ef;
      min-height: 100vh;
      font-family: Arial;
    "
  >
    <!-- Navbar -->

    <div
      style="
        background-color: white;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      "
    >
      <!-- Left Section -->

      <div
        style="
          display: flex;
          align-items: center;
          gap: 20px;
        "
      >
        <!-- Linkedin Logo -->

        <h1
          style="
            color: #0a66c2;
            font-size: 32px;
            margin: 0;
          "
        >
          in
        </h1>

        <!-- Search Bar -->

        <input
          type="text"
          placeholder="Search"
          style="
            width: 250px;
            padding: 10px 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #eef3f8;
            outline: none;
          "
        />
      </div>

      <!-- Right Section -->

      <div
        style="
          display: flex;
          gap: 25px;
          align-items: center;
        "
      >
        <button
          @click="HomeFunction"
          :style="{
            color: currentTab == 'Home' ? '#0a66c2' : '#555',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            fontWeight: currentTab == 'Home' ? 'bold' : 'normal',
            cursor: 'pointer'
          }"
        >
          Home
        </button>

        <button
          @click="NetworkFunction"
          :style="{
            color: currentTab == 'MyNetwork' ? '#0a66c2' : '#555',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            fontWeight: currentTab == 'MyNetwork' ? 'bold' : 'normal',
            cursor: 'pointer'
          }"
        >
          MyNetwork
        </button>

        <button
          style="
            background: none;
            border: none;
            font-size: 16px;
            color: #555;
            cursor: pointer;
          "
        >
          Jobs
        </button>

        <button
          style="
            background: none;
            border: none;
            font-size: 16px;
            color: #555;
            cursor: pointer;
          "
        >
          Messaging
        </button>

        <button
          style="
            background: none;
            border: none;
            font-size: 16px;
            color: #555;
            cursor: pointer;
          "
        >
          Notifications
        </button>
      </div>
    </div>

    <!-- Dummy Content -->

    <div
      style="
        padding: 40px;
      "
    >
      <h2>Current Active Tab : {{ currentTab }}</h2>

      <div
        style="
          background-color: white;
          padding: 25px;
          border-radius: 10px;
          margin-top: 20px;
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        "
      >
        <h3>Welcome to LinkedIn Clone UI</h3>

        <p>
          This is a simple styled navbar project using VueJS state and
          conditional styling.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      currentTab: "Home",
    };
  },

  methods: {
    HomeFunction() {
      this.currentTab = "Home";
      console.log(
        "The user clicked on tab called as : " + this.currentTab
      );
    },

    NetworkFunction() {
      this.currentTab = "MyNetwork";
      console.log(
        "The user clicked on tab called as : " + this.currentTab
      );
    },
  },
};
</script>