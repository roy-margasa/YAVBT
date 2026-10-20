<script setup lang="ts">
// 📜 CODE BLOCK - imports
import { Form, Field, ErrorMessage, useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import type { InferType } from 'yup';

// 📜 CODE BLOCK - validation schema
const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Email must be valid')
});

// 📜 CODE BLOCK - typing
const typedSchema = toTypedSchema(validationSchema);
type FormValues = InferType<typeof validationSchema>;

// 📜 CODE BLOCK - Vee Validate composable example
const displayTextComposable = ref('');

// Ref: https://vee-validate.logaretm.com/v4/api/use-form
const { handleSubmit, errors } = useForm({
  validationSchema: typedSchema
});

// The useField parameter 'email' match the validation schema key
// Ref: https://vee-validate.logaretm.com/v4/api/use-field/
const { value: emailComposable } = useField('email');

const onSubmitComposable = handleSubmit((values) => {
  displayTextComposable.value = `Submitted email: ${values.email}`;
});

// 📜 CODE BLOCK - Vee Validate component example
const displayTextComponent = ref('');

const onSubmitComponent = (values: Record<string, unknown>) => {
  const typedValues = values as FormValues;
  displayTextComponent.value = `Submitted email: ${typedValues.email}`;
};
</script>

<template>
  <div>
    <div class="w-full text-center">
      <div class="mb-1">
        <p>Using Composables</p>
        <p class="text-xs"><code>useForm()</code> and <code>useField()</code></p>
      </div>
      <form data-test="composable-form" @submit.prevent="onSubmitComposable">
        <div class="flex gap-2">
          <input
            data-test="composable-input"
            v-model="emailComposable"
            type="email"
            class="border border-gray-300 rounded px-2 py-1 w-full"
            :class="{ 'border-red-600': errors.email }"
            placeholder="Insert email"
          />
          <button
            type="submit"
            class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer enabled:hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>

        <p
          v-if="errors.email"
          data-test="composable-error-message"
          class="mt-1 text-sm text-red-600"
        >
          {{ errors.email }}
        </p>
      </form>
      <div v-if="displayTextComposable" data-test="composable-success-message" class="mt-2">
        {{ displayTextComposable }}
      </div>
    </div>

    <hr class="my-4 w-full border-gray-400" />

    <div class="w-full text-center">
      <div class="mb-1">
        <p>Using Components</p>
        <p class="text-xs"><code>&lt;Form&gt;</code> and <code>&lt;Field&gt;</code></p>
      </div>
      <!-- VeeValidate's Form handles the native submit event and emits validated values, so use @submit without .prevent. -->
      <Form data-test="component-form" @submit="onSubmitComponent" :validation-schema="typedSchema">
        <template #default="{ errors }">
          <div class="flex gap-2">
            <Field
              data-test="component-input"
              name="email"
              type="email"
              class="border border-gray-300 rounded px-2 py-1 w-full"
              :class="{ 'border-red-600': errors.email }"
              validate-on-input
              autocomplete="off"
              placeholder="Insert email"
            />
            <button
              type="submit"
              class="rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer enabled:hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
          <ErrorMessage
            data-test="component-error-message"
            name="email"
            class="block mt-1 text-sm text-red-600"
          />
        </template>
      </Form>
      <div v-if="displayTextComponent" data-test="component-success-message" class="mt-2">
        {{ displayTextComponent }}
      </div>
    </div>
  </div>
</template>
