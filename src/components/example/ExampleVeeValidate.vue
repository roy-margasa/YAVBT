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

// 📜 CODE BLOCK - composable example
const displayTextComposable = ref('');

// Ref: https://vee-validate.logaretm.com/v4/api/use-form
const { handleSubmit, errors } = useForm({
  validationSchema: typedSchema
});

// The useField parameter 'email' match the validation schema key
// Ref: https://vee-validate.logaretm.com/v4/api/use-field/
const { value: emailComposable } = useField('email');

const disableSubmitComposable = computed(
  () => Object.keys(errors.value).length > 0 || !emailComposable.value
);

const onSubmitComposable = handleSubmit((values) => {
  displayTextComposable.value = `Submitted email: ${values.email}`;
});

// 📜 CODE BLOCK - component example
const displayTextComponent = ref('');

const onSubmitComponent = (values: Record<string, unknown>) => {
  const typedValues = values as FormValues;
  displayTextComponent.value = `Submitted email: ${typedValues.email}`;
};
</script>

<template>
  <div>
    <div class="w-full text-center">
      <p>Composables</p>
      <form @submit.prevent="onSubmitComposable">
        <input
          v-model="emailComposable"
          type="email"
          class="border border-gray-300 rounded px-2 py-1 w-full"
          :class="{ 'border-red-600': errors.email }"
          placeholder="Insert email"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-600">
          {{ errors.email }}
        </p>

        <button
          type="submit"
          :disabled="disableSubmitComposable"
          class="mt-2 rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer enabled:hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
      <div v-if="displayTextComposable" class="mt-2">
        {{ displayTextComposable }}
      </div>
    </div>

    <hr class="my-4 w-full border-gray-400" />

    <div class="w-full text-center">
      <p>Components</p>
      <Form @submit="onSubmitComponent" :validation-schema="typedSchema">
        <template #default="{ values, errors }">
          <Field
            name="email"
            type="email"
            class="border border-gray-300 rounded px-2 py-1 w-full"
            :class="{ 'border-red-600': errors.email }"
            validate-on-input
            autocomplete="off"
            placeholder="Insert email"
          />
          <ErrorMessage name="email" class="block mt-1 text-sm text-red-600" />
          <button
            type="submit"
            :disabled="Object.keys(errors).length > 0 || !values.email"
            class="mt-2 rounded border px-2 py-3 border-emerald-500 text-emerald-500 text-sm leading-1 cursor-pointer enabled:hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </template>
      </Form>
      <div v-if="displayTextComponent" class="mt-2">
        {{ displayTextComponent }}
      </div>
    </div>
  </div>
</template>
