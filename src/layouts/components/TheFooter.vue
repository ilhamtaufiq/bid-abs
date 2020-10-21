<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
     
========================================================================================== -->


<template>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>COPYRIGHT @ {{ new Date().getFullYear() }} <a href="/" target="_blank" rel="nofollow">Bidang Air Bersih dan Sanitasi</a> All rights Reserved</span>
        <span class="md:flex hidden items-center">
            <feather-icon icon="CodeIcon" svgClasses="stroke-current text-dark w-6 h-6" class="ml-2" />
            <feather-icon icon="CoffeeIcon" svgClasses="stroke-current text-dark w-6 h-6" class="ml-2" />
        </span>
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
