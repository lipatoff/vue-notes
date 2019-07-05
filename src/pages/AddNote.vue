<template>
    <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
        	<h1 class="title">Add New Note</h1>

			<!-- message -->
          	<message v-if="message" :message="message"/>

			<!-- new note -->
			<div class="new-note">
				<label>Title</label>
				<input v-model="note.title" type="text">
				<label>Priority</label>
				<select v-model="note.priority" class="select">
					<option
						v-for="(priority, index) in priorites"
						:key="index"
						:value="priority.name">
						{{ priority.title }}	
					</option>
				</select>
				<label>Description</label>
				<textarea v-model="note.descr"></textarea>
				<button class="btn btnPrimary new-note" @click="addNote">New Note</button>
			</div>

        </div>
      </section>
    </div>
</template>

<script>
import message from '@/components/Message.vue'

export default {
	components: {
  		message
	},
	data () {
    	return {
			message: null,
			note: {
				title: '',
				descr: '',
				priority: 'base'
			},
			priorites: [
				{name: 'base', title: 'Стандартный'},
				{name: 'high', title: 'Важный'},
				{name: 'vhigh', title: 'Очень важный'}
			]
		}
	},
  	methods: {
  		addNote() {
			let {title, descr, priority} = this.note

  			if (title == '' || descr == '') {
  				this.message = 'title or description can`t be blank!'
  				return false
			}

			this.$store.dispatch('addNote', {
				title,
				descr,
				priority,
  				date: new Date(Date.now()).toLocaleString()
			})

  			this.note.title = ''
  			this.note.descr = ''
  			this.note.priority = 'base'

  			this.message = null
		}
	}
}
</script>

<style lang="scss">
.new-note{
	text-align: center;
	margin: 10px 0;
}
.select{
	display: block;
	width: 100%;
	padding: 16px 26px;
    margin-bottom: 30px;
    border-radius: 20px;
}
</style>