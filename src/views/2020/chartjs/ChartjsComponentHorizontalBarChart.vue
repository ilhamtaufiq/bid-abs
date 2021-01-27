<template>
<div>
 {{jumlah_spam}}
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
  apollo: {
    jumlah_spam: {
      query: jumlah_spam,
      variables() {
        // don't do stupid thing, please.
      },
      update({ airMinumsConnection }) {
        return airMinumsConnection;
      },
    },
  },
}
</script>