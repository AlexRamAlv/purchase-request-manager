<template>
  <div>
    <span class="arrow">
      <div>&#060;</div>
    </span>
    <section class="numbers">
      <span class="exact-page">1</span><span>2</span><span>3</span>
    </section>
    <span class="arrow">
      <div>&#62;</div>
    </span>
  </div>
</template>
<style scoped>
.arrow {
  background-color: var(--primary);
  color: var(--just-white);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
}
.arrow:hover {
  box-shadow: 1px 1px 4px 6px hsl(240deg 4% 79% / 77%);
}
.numbers {
  display: flex;
  border: 1px solid var(--just-gray);
  width: 120px;
  border-radius: 7px;
  align-items: center;
  justify-content: space-evenly;
}
.numbers span {
  cursor: pointer;
  width: 30px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.numbers span:hover {
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--just-white);
}
.exact-page {
  background-color: var(--primary);
  border-radius: 5px;
  color: var(--just-white);
}
</style>
