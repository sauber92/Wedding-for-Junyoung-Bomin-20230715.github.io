<template>
  <div class="scroll-interactive">
    <div class="section" :style="{ backgroundColor: backgroundColor }">
      <h1>Scroll Interactive</h1>
      <p>This section's background color changes as you scroll.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestCard',
  data() {
    return {
      backgroundColor: 'white'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY
      const maxScrollPosition = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = scrollPosition / maxScrollPosition

      this.backgroundColor = `rgba(255, 0, 0, ${scrollPercentage})`
    }
  }
}
</script>

<style>
.scroll-interactive {
  height: 2000px;
}

.section {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
}
</style>