<template>
	<!-- note list -->
	<div class="notes">
		<div class="note" :class="[{ full: !grid }, `note_${note.priority}`]" v-for="(note, index) in notes" :key="index">
	    	<div class="note-header" :class="{ full: !grid}">
				<noteBlock field="title" :note="note" :index="index"/>
			  	<p style="cursor: pointer;" @click="removeNote(index)">x</p>
	    	</div>
	    	<div class="note-body">
				<noteBlock field="descr" :note="note" :index="index"/>
			    <span>{{ note.date }}</span>
	    	</div>
	  	</div>
	</div>
</template>

<script>
import noteBlock from '@/components/NoteBlock.vue'

export default {
	components: {
		noteBlock
	},
	props: {
		notes: {
			type: Array,
			required: true
		},
		grid: {
			type: Boolean,
			required: true
		}
	},
  	methods: {
		removeNote(index) {
			this.$store.dispatch('removeNote', index)
		}
	}
}
</script>

<style lang="scss">
.notes{
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 40px 0;
}
.note{
	width: 48%;
	padding: 18px 20px;
	margin-bottom: 20px;
	background-color: #fff;
	&.full{
		width: 100%;
	}
	&_high{
		background-color: #fff7b3;
	}
	&_vhigh{
		background-color: #f8c1bc;
	}

}
.note-header{
	display: flex;
	align-items: center;
	justify-content: space-between;
	h1{
		font-size: 32px;
	}
	p{
		color: rgb(54, 38, 128);
		font-size: 22px;
	}
	svg{
		margin-right: 12px;
		color: #999;
		&.active{
			color: blue;
		}
		&:last-child{
			margin-right: 0;
		}
	}
}
.note-body{
	p{
		margin: 20px 0;
	}
	span{
		font-size: 14px;
		color: #999;
	}
}
</style>