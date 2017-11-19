<template>
  <button class="btn" :class="btnType" @click="handleBtnClick( $event )">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'sfButton',

  props: {
    type: {
      required: false,
      type: String,
    }
  },

  computed: {
    btnType () {
      if ( this.type )
        return 'btn-' + this.type
      else
        return 'btn-default'
    }
  },

  methods: {
    handleBtnClick ( e ) {
      this.$emit('click', e)
    }
  },

  created () {

  }
}
</script>

<style lang="less" scoped src="./button.less"></style>
