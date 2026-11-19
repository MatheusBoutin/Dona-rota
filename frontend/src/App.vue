<template>
  <main class="page">
    <section class="welcome" aria-labelledby="page-title">
      <h1 id="page-title">Controle de Excursões</h1>
      <p>Bem-vindo ao sistema de gerenciamento de excursões.</p>
      <p class="closing">Tudo pronto para começar!</p>
    </section>
  </main>
</template>

<style>
:root {
  font-family: Arial, Helvetica, sans-serif;
  color: #243424;
  background: #f7f9f4;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* { box-sizing: border-box; }

body { margin: 0; }

.page {
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 2rem 1.25rem;
}

.welcome {
  width: min(100%, 44rem);
  padding: clamp(2rem, 6vw, 4rem);
  text-align: center;
  background: #fff;
  border: 1px solid #dce5d6;
  border-radius: 1.25rem;
  box-shadow: 0 0.5rem 2rem rgb(36 52 36 / 6%);
}

h1 {
  margin: 0 0 1.5rem;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
}

p {
  margin: 0;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  line-height: 1.6;
}

.closing {
  margin-top: 1.5rem;
  font-weight: 700;
  color: #315b3c;
}
</style>
