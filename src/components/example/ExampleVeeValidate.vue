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
  <div class="border border-gray-200 p-4 rounded-lg flex flex-col items-center basis-xs">
    <div class="border-b border-gray-300 pb-1 mb-4 w-full text-center">
      <h3>Vee Validate + yup</h3>
      <div class="leading-0">
        <a
          href="https://github.com/roy-margasa/YAVBT/blob/master/src/components/example/ExampleVeeValidate.vue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-700 text-xs"
        >
          source
        </a>
      </div>
    </div>

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
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
            class="mt-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
