<script setup lang="ts">
import { ref, watch } from "vue";
import { useAuth } from "../composables/useAuth";
const msg = ref("Hello Vite + Vue 3 Template");

const { loginAccount, createAccount, account } = useAuth();

const handleLoginAccount = () => {
  return loginAccount.mutateAsync({
    email: "teste@gmail.com",
    password: "!1234Teste",
  });
};

const handleCreateAccount = () => {
  return createAccount.mutateAsync({
    name: "teste",
    email: "teste@gmail.com",
    password: "!1234Teste",
  });
};

watch(
  account,
  value => {
    if (value) {
      console.log(value);
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <section
    class="flex flex-col items-center justify-center gap-5 px-2 text-center"
  >
    <h1>{{ msg }}</h1>

    <img alt="Vue logo" src="/vite.svg" class="h-32 w-32" />

    <button
      class="rounded-md border border-black p-2"
      type="button"
      @click="handleCreateAccount"
    >
      CreateAccount
    </button>

    <button
      class="rounded-md border border-black p-2"
      type="button"
      @click="handleLoginAccount"
    >
      LoginAccount
    </button>

    <span>
      {{ JSON.stringify(account) }}
    </span>
  </section>
</template>
