<template>
  <form
    ref="form"
    :model="form"
    inline
    label-width="auto"
    label-position="left"
    @submit.prevent="helloName(form.name)"
  >
    <h2>Hello, {name}</h2>
    <fieldset label="Name">
      <input v-model="form.name" placeholder="Your name" required />
    </fieldset>
    <button
      type="primary"
      data-cy="btn-hello-name"
      @click.stop="helloName(form.name)"
    >
      👋 Say hello
    </button>

    <p>Response: {{ response }}</p>
    <p v-if="error" style="color: red">
      <strong>Error {{ error.status }}</strong>
      <br />
      {{ error.data }}
    </p>
  </form>
</template>

<script>
export default {
  name: 'helloServerless',
  data() {
    return {
      form: {
        name: '',
      },
      response: '—',
      error: null,
    }
  },
  methods: {
    async helloName(name) {
      try {
        const res = await this.$axios({
          method: 'post',
          data: {
            name: name,
          },
          url: `/.netlify/functions/helloServerless`, // must always be '/.netlify/functions/' no matter the function folder is called in repo
          // responseType: 'json', only use if sure that return data is JSON, otherwise won't show data

          // get version with url parameter
          // method: 'get',
          // url: `/.netlify/functions/helloServerless?name=${name}`,
        })
        // console.log(res)
        this.response = res.data
        this.error = null
      } catch (e) {
        this.error = e.response
        this.response = '—'
      }
    },
  },
}
</script>
