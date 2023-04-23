<template>
  <div>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      </head>

<b-col>
      <b-card
  :title="title"
  :img-src="poster"
  img-alt="Image"
  img-top
  tag="article"
  style="max-width: 25rem; background-color: black; color: white;"
  class="mb-2"
  
 >
<p>{{ truncatedOverview }}</p>


  <b-button

    v-b-tooltip.hover
  class="genre"
    variant="primary"
    v-for="(genre, index) in genres"
    :key="index"
  >
      {{genre}}
    </b-button >

   <b-button class="bookmark"    
   v-b-tooltip.hover   
   variant="primary"
   @click.prevent="handleFavClick"
   >
    <a href="#" style="font-size: 1em; color: white;" >
          <span class="glyphicon glyphicon-bookmark"></span>
        </a></b-button> 
     
  </b-card>
    </b-col>  
  </div>
    
</template>




<script>
export default {
  props: [ "title", "poster", "overview", "release_date", "genres" ],
  computed: {
    truncatedOverview() {
      if (this.overview.length > 150) {
        return this.overview.substring(0,150) + '...';
      } else {
        return this.overview;
      }
    }
  },
  methods: {
      handleFavClick() {
       
      },
    },
};

</script>



<style>
.bookmark{
background-color: transparent;
margin: 2px;
padding: 0;
size: 1.4em;

}
.genre{
  margin: 2px;
}

.card-img-top {
   height:32rem; 
}

</style>
