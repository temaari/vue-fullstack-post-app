<template>
	<div id="app">
	<img alt="Vue logo" src="./assets/logo.png">
	<PostComponent/>
	<section>Powered by Christian Te Maari</section>
	</div>
</template>

<script>
import PostComponent from './components/PostComponent'

export default {
	name: 'App',
	components: {
		PostComponent
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
