<template>
	<div class="note-block">
		<p @click="clickField">{{ note[field] }}</p>
		<input  class="note-block__input" :class="`note-block__input_${field}`" type="text"
		  		v-if="show"
				v-model="newVal"
				v-focus
				@blur="show = false"
				@keydown.esc="show = false"
				@keydown.enter="setValue">
	</div>
</template>

<script>
export default {
	props: {
		field: {
			type: String,
			required: true
		},
		note: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true
		}
	},
	data() {
    	return {
			show: false,
			newVal: ''
		}
	},
	methods: {
		clickField() {
			this.show = true
			this.newVal = this.note[this.field]
		},
		setValue() {
			if (this.newVal==''){
				this.show = false
				return false
			}

			this.$store.dispatch('renameField', {
				index: this.index,
				field: this.field,
				newVal: this.newVal,
				date: new Date(Date.now()).toLocaleString()
				})
				.then(this.show = false)
				.catch(e=>{
					console.log(e)
					this.show = false
				})
		}
	},
	directives: {
		focus: {
			inserted: function (el) {
				el.focus()
			}
		}
	}
}
</script>

<style lang="scss">
.note-block{
	position: relative;
	flex-grow: 1;
	&__input{
		position: absolute;
		left: -20px;
		top: -15px;
		&_title{
			top: -12px;
			font-size: 20px;
		}
	}
	p:hover:after{
		content: ' \270E'
	}
}
</style>