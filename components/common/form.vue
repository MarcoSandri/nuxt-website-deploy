<template>

<section class="form">
  <div>
    <h1>Invia un'email</h1>
    <form @submit.prevent="sendMail">
      <label>
        Mittente:
        <input type="email" v-model="from" required>
      </label>
      <label>
        Oggetto:
        <input type="text" v-model="subject" required>
      </label>
      <label>
        Telefono:
        <input type="tel" v-model="tel" required>
      </label>
      <label>
        Testo:
        <textarea v-model="message" required></textarea>
      </label>
      <button type="submit" class="button" >Invia</button>
    </form>

  </div>
</section>

</template>

<script setup>
  const mail = useMail()
  const { $emailTemplate } = useNuxtApp()

  const props = defineProps({
    component : Object
  })

  const to = props.component.To;
  const from = ref('');
  const subject = ref('');
  const message = ref('');
  const tel = ref('')
  
  const sendMail = () => {
    mail.send({
      to,
      from: from.value,
      subject: subject.value,
      text: message.value,
      html: $emailTemplate(from.value, subject.value, message.value, tel.value)
    })
}

</script>

<style lang="scss" >
  .form {
    padding: rvh(100);
  }
</style>