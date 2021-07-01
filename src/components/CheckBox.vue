<template>
  <label>
    <input
      :id="id"
      v-model="computedValue"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :true-value="trueValue"
      :false-value="falseValue"
      :value="value"
      :checked="checked"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

function computed(arg0: {
  get(): boolean | string | number | (string | number)[] | undefined;
  set(value: boolean | string | number | (string | number)[] | undefined): void;
}) {
  throw new Error("Function not implemented.");
}

export default Vue.extend({
  name: "Checkbox",
  props: {
    modelValue: [
      Boolean,
      String,
      Number,
      Array as () => Array<string | number>,
    ],
    value: [String, Number, Array as () => Array<string>],
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    checked: Boolean,
    id: String,
    name: String,
    round: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
  },
  emits: ["update:modelValue"],
  setup: (props, { emit }) => {
    const computedValue = computed({
      get(): boolean | string | number | (string | number)[] | undefined {
        return props.modelValue;
      },
      set(value: boolean | string | number | (string | number)[] | undefined) {
        emit("update:modelValue", value);
      },
    });
    return { computedValue };
  },
});
</script>
