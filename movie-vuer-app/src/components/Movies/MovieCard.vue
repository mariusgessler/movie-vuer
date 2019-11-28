    <template>
    <div>
        <div class="col-sm-6 col-md-4">
            
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ movies.title }}</h5>
                <p class="card-text">{{ movies.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["movies"]
}

</script>
