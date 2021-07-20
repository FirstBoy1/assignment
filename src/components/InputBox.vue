<template>
  <div class="box" :class="boxClass" v-show="show" @click="onClick">
    <font-awesome-icon class="icon" :icon="icon" />
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: {
    boxClass: String,
    icon: String,
    show: Boolean,
    onClick: { type: Function, default: () => {} },
  },
};
</script>

<style>
.box {
  width: 15%;
  height: 100%;
  background: #f0f2f6;
  color: #494c53;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-orange {
  background: #e74f30;
  color: white;
}

/* TODO: make border orange */
.custom-input:has(.custom-input > .box-orange) {
  border-color: #e74f30;
}

.box-white {
  background-color: white;
}

.icon {
  font-size: 80%;
}

.box:hover {
  background: #bcc2cb;
}

.box:active {
  background: #494c53;
}

.box:active .icon,
.box-orange .icon {
  color: white;
}
</style>
