<template>
<div>
  <h1>{{jumlah_spam}}</h1>
</div>
  
</template>
<script>
import jumlah_spam from '@/graphql/jumlah_spam.gql'
export default {
  data() {
    return{
      jumlah_spam: null,
    };
  },
  async getJumlahSpam() {
            let {data} = await this.$apollo.query({
                query: jumlah_spam,
                variables: {
                  jumlah_spam: this.jumlah_spam
                }
            });
            console.log("DATA", data); 
        },
}
</script>