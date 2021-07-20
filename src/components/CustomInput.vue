<template>
  <div class="custom-input-container">
    <div class="custom-input">
      <div class="box" v-show="!isEdit" @click="showTool = !showTool">
        <i class="fas" :class="linkTypes[selectedLink].icon"></i>
      </div>

      <div class="input-container" @click="isEdit = true">
        <input
          class="input"
          :type="linkTypes[selectedLink].type"
          :placeholder="linkTypes[selectedLink].placeholder"
          :pattern="linkTypes[selectedLink].pattern || ''"
          v-model="value"
          ref="input"
        />
        <div class="input-mirror" v-if="!isEdit" @click.stop="mirrorClick" />
      </div>

      <div v-show="isEdit" class="box box-orange" @click="isEdit = !isEdit">
        <i class="fas fa-check"></i>
      </div>

      <div class="box" v-show="isEdit" @click="cancelInput">
        <i class="fas fa-times"></i>
      </div>

      <div
        class="box box-white"
        v-if="value.length && !isEdit"
        @click="value = ''"
      >
        <i class="fas fa-trash"></i>
      </div>

      <div v-show="!isEdit" class="box">
        <i class="fas fa-external-link-alt"></i>
      </div>
    </div>

    <!-- Tooltip -->
    <div class="tooltip" v-show="showTool" ref="tooltip">
      <div class="tooltip-content">
        <div
          class="tooltip-item"
          v-for="(link, index) of linkTypes"
          :key="link.name"
          @click="linkClicked(index)"
        >
          <i class="tooltip-icon far" :class="link.icon"></i>
          <p class="tooltip-text">{{ link.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      showTool: false,
      isEdit: false,
      value: '',
      selectedLink: 0,
      linkTypes: [
        {
          icon: 'fa-envelope',
          text: 'Link to Email',
          name: 'email',
          type: 'email',
          placeholder: 'Email',
        },
        {
          icon: 'fa-copy',
          text: 'Link to Page',
          name: 'page',
          type: 'url',
          placeholder: 'Page',
        },
        {
          icon: 'fa-mobile-alt',
          text: 'Link to Phone',
          name: 'phone',
          type: 'tel',
          placeholder: 'Phone',
          pattern: '0[0-9]{10}',
        },
      ],
    };
  },
  mounted() {
    document.addEventListener('mousedown', this.listener);
    document.addEventListener('touchstart', this.listener);
  },
  unmounted() {
    document.removeEventListener('mousedown', this.listener);
    document.removeEventListener('touchstart', this.listener);
  },
  methods: {
    listener(event) {
      if (!this.$refs.tooltip || this.$refs.tooltip.contains(event.target)) {
        return;
      }
      this.showTool = false;
    },
    mirrorClick() {
      this.isEdit = true;
      this.$refs.input.focus();
    },
    cancelInput() {
      this.value = '';
      this.isEdit = false;
    },
    linkClicked(link) {
      this.selectedLink = link;
      this.showTool = false;
    },
  },
};
</script>

<style scoped>
.custom-input-container {
  position: relative;
}

.input-container {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
}

.input-mirror {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  left: -2%;
  top: -50%;
  background: white;
  border-radius: 12px;
  min-width: 150px;
  transform: translateX(-100%);
}

.tooltip-content {
  overflow: hidden;
  border-radius: 12px;
}

/* TODO: */
.tooltip::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(100%) translateY(-50%);
  border: 5px solid transparent;
  border-left-color: white;
}

.tooltip-item {
  padding: 7px;
  display: flex;
  align-items: center;
}

.tooltip-item:hover {
  background: #bcc2cb;
}

.tooltip-text {
  margin: 0;
  margin-left: 5px;
  font-size: 0.9rem;
}

.tooltip i {
  color: #494c53;
  font-size: 0.9rem;
  width: 16px;
  height: 16px;
}

.custom-input {
  width: 250px;
  height: 40px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bcc2cb;
  position: relative;
}

.custom-input input {
  border: 0;
  outline: none;
  padding: 10px;
}

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

.box > i {
  font-size: 70%;
}

.box:hover {
  background: #bcc2cb;
}

.box:active {
  background: #494c53;
  color: white;
}
</style>
