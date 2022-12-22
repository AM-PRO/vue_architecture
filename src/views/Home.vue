<template>
  <div>
    <Card title="Home page (publique)">
      <router-link class="text-blue-600 underline" to="/todo/list"
        >Accéder à la todolist</router-link
      >
    </Card>
    <Card title="Test vee validate">
      {{ errors }}
      <form @submit.prevent="submit">
        <input type="text" v-model="name" />
        <ErrorText v-if="errors.name">{{ errors.name }}</ErrorText>
        <input type="text" v-model="email" />
        <ErrorText v-if="errors.email">{{ errors.email }}</ErrorText>
        <input type="text">
        <button type="submit">Submit</button>
      </form>
    </Card>
  </div>
</template>

<script lang="ts">
import { toFormValidator } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import { defineComponent, ref } from "vue";
import * as zod from "zod";

export default defineComponent({
  setup() {
    const validationSchema = toFormValidator(
      zod.object({
        name: zod
          .string({
            required_error: "Ce champ est requis",
          })
          .min(3, "Ce champ doit faire minimum 3 caractères"),
        email: zod
          .string()
          .email("Ce champ doit être un email valide")
          .startsWith("g", "Ton email doit commencer par g"),
      })
    );

    const { errors, values, resetForm, handleSubmit } = useForm({
      validationSchema,
    });

    const { value: name } = useField<string>("name");
    const { value: email } = useField<string>("email");


    const submit = handleSubmit(
      () => {
        console.log("success" + values);
      },
      () => {
        console.log("error" + errors);
      }
    );

    return {
      submit,
      name,
      email,
      errors,
      values,
    };
  },
});
</script>

<style scoped></style>
